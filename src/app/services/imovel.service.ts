import { Injectable } from '@angular/core';

export interface Imovel {
  id: number;
  titulo: string;
  preco: string;
  localizacao: string;
  badge: string;
  imagem: string;
  corretor?: string;
}

export interface Mensagem {
  remetente: 'cliente' | 'consultor';
  texto: string;
  hora: string;
}

export interface Conversa {
  id: number;
  consultor: string;
  cargo: string;
  avatar: string;
  imovelAssociado: string;
  ultimaMensagem: string;
  tempo: string;
  mensagens: Mensagem[];
}

@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  private imoveisFavoritos: Imovel[] = [];
  
  private matchesAtivos: Imovel[] = [
    {
      id: 1,
      titulo: 'Mansão Térrea no Terras de São José',
      preco: 'R$ 7.800.000',
      localizacao: 'Terras de São José, Itu - SP',
      badge: 'Venda',
      imagem: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
      corretor: 'Carlos Imobiliária'
    }
  ];

  private conversas: Conversa[] = [
    {
      id: 1,
      consultor: 'Carlos Imobiliária',
      cargo: 'Consultor Regional (Itu & Salto)',
      avatar: 'CI',
      imovelAssociado: 'Mansão Térrea no Terras de São José',
      ultimaMensagem: 'Olá Pedro! Conseguiu analisar as novas propriedades em Itu?',
      tempo: 'Há 2 horas',
      mensagens: [
        { remetente: 'consultor', texto: 'Olá Pedro! Seja bem-vindo à Imobly.', hora: '10:15' },
        { remetente: 'cliente', texto: 'Olá Carlos! Sim, estou a acompanhar as novidades.', hora: '10:20' }
      ]
    }
  ];

  getImoveis(): Imovel[] {
    return this.imoveisFavoritos;
  }

  adicionarImovel(imovel: Imovel): void {
    if (!this.imoveisFavoritos.some(i => i.id === imovel.id)) {
      this.imoveisFavoritos.push(imovel);
    }
  }

  removerImovel(id: number): void {
    this.imoveisFavoritos = this.imoveisFavoritos.filter(i => i.id !== id);
  }

  getMatches(): Imovel[] {
    return this.matchesAtivos;
  }

  adicionarMatch(imovel: any, corretorNome: string = 'Carlos Imobiliária'): void {
    const tituloImovel = imovel.titulo || imovel.imovel;
    if (!this.matchesAtivos.some(m => m.titulo === tituloImovel)) {
      const novoMatch = {
        id: this.matchesAtivos.length + 1,
        titulo: tituloImovel,
        preco: imovel.preco || 'Sob consulta',
        localizacao: imovel.endereco || imovel.localizacao || 'Itu, SP',
        badge: imovel.badge || 'Venda',
        imagem: (imovel.imagens && imovel.imagens.length > 0) ? imovel.imagens[0] : (imovel.imagem || ''),
        corretor: corretorNome
      };
      this.matchesAtivos.push(novoMatch);

      // Cria a conversa correspondente no chat se ainda não existir
      if (!this.conversas.some(c => c.imovelAssociado === tituloImovel)) {
        this.conversas.push({
          id: this.conversas.length + 1,
          consultor: corretorNome,
          cargo: 'Consultor Regional (Itu & Região)',
          avatar: corretorNome.substring(0, 2).toUpperCase(),
          imovelAssociado: tituloImovel,
          ultimaMensagem: `Olá! Interessado no imóvel ${tituloImovel}?`,
          tempo: 'Agora',
          mensagens: [
            { remetente: 'consultor', texto: `Olá Pedro! Vi que deu match no imóvel "${tituloImovel}". Como posso ajudar com a visita ou proposta?`, hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
          ]
        });
      }
    }
  }

  getConversas(): Conversa[] {
    return this.conversas;
  }
}