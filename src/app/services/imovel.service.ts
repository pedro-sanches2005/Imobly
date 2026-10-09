import { Injectable } from '@angular/core';

export interface Imovel {
  id: number;
  titulo: string;
  localizacao: string;
  preco: string;
  badge: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  private readonly STORAGE_KEY = 'imobly_imoveis_cadastrados';

  constructor() {
    // Garante que começa com uma lista limpa ou vazia se for a primeira vez
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify([]));
    }
  }

  // Retorna os imóveis cadastrados dinamicamente pelos administradores/corretores
  getImoveis(): Imovel[] {
    const dados = localStorage.getItem(this.STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
  }

  // Adiciona um novo imóvel a partir do painel administrativo
  adicionarImovel(novoImovel: Omit<Imovel, 'id'>): void {
    const imoveis = this.getImoveis();
    const id = imoveis.length > 0 ? Math.max(...imoveis.map(i => i.id)) + 1 : 1;
    
    const imovelComId: Imovel = { id, ...novoImovel };
    imoveis.unshift(imovelComId);
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(imoveis));
  }

  // Remove um imóvel pelo ID
  removerImovel(id: number): void {
    let imoveis = this.getImoveis();
    imoveis = imoveis.filter(i => i.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(imoveis));
  }
}