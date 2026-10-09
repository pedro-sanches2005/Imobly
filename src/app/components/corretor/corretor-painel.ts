import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corretor-painel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './corretor-painel.html',
  styleUrls: ['./corretor-painel.css']
})
export class CorretorPainelComponent {
  abaAtiva: string = 'visao-geral';
  isModoClaro: boolean = false;
  mensagemSucesso: string = '';

  // Dados do corretor exibidos no cartão compacto do topo
  anunciante = {
    nome: 'Pedro Sanches',
    creci: '123456-F'
  };

  // Objeto para novo imóvel na Visão Geral
  novoImovel = {
    titulo: '',
    localizacao: '',
    preco: '',
    badge: '',
    imagem: ''
  };

  // Lista de imóveis anunciados
  imoveisAnunciados: Array<any> = [
    {
      id: 1,
      titulo: 'Casa Moderna em Condomínio',
      localizacao: 'Itu, SP • 4 Quartos • 300m²',
      preco: 'R$ 1.450.000',
      badge: 'Exclusivo',
      status: 'Ativo',
      imagem: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80'
    }
  ];

  // Variáveis para controlar a edição na aba de Gestão
 imovelEmEdicaoId: number | null = null;
  imovelEditando = {
    titulo: '',
    localizacao: '',
    preco: '',
    badge: '',
    imagem: ''
  };

  constructor(private router: Router) {}

  mudarAba(aba: string) {
    this.abaAtiva = aba;
  }

  alternarTema() {
    this.isModoClaro = !this.isModoClaro;
  }

  terminarSessao() {
    this.router.navigate(['/login']); 
  }

  publicarImovel() {
    if (!this.novoImovel.titulo || !this.novoImovel.preco) {
      return;
    }
    this.imoveisAnunciados.unshift({
      id: Date.now(),
      ...this.novoImovel,
      status: 'Ativo',
      imagem: this.novoImovel.imagem || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80'
    });
    this.mensagemSucesso = 'Imóvel publicado com sucesso e sincronizado na gestão!';
    this.novoImovel = { titulo: '', localizacao: '', preco: '', badge: '', imagem: '' };
    setTimeout(() => this.mensagemSucesso = '', 4000);
  }

  removerAnuncio(id: number) {
    this.imoveisAnunciados = this.imoveisAnunciados.filter(item => item.id !== id);
  }

  alternarStatusImovel(id: number) {
    const imovel = this.imoveisAnunciados.find(i => i.id === id);
    if (imovel) {
      imovel.status = imovel.status === 'Ativo' ? 'Pausado' : 'Ativo';
    }
  }

  abrirModalEdicao(imovel: any) {
    this.imovelEmEdicaoId = imovel.id;
    this.imovelEditando = { ...imovel }; // Clona os dados atuais para o formulário do modal
  }

  cancelarEdicao() {
    this.imovelEmEdicaoId = null;
  }

  salvarEdicaoModal() {
    if (this.imovelEmEdicaoId === null) return;

    const index = this.imoveisAnunciados.findIndex(i => i.id === this.imovelEmEdicaoId);
    if (index !== -1) {
      // Atualiza o objeto na lista mantendo o ID e o status originais
      this.imoveisAnunciados[index] = {
        ...this.imoveisAnunciados[index],
        titulo: this.imovelEditando.titulo,
        localizacao: this.imovelEditando.localizacao,
        preco: this.imovelEditando.preco,
        imagem: this.imovelEditando.imagem
      };

      this.mensagemSucesso = 'Imóvel editado com sucesso!';
      this.imovelEmEdicaoId = null; // Fecha o modal
      setTimeout(() => this.mensagemSucesso = '', 4000);
    }
  }
}