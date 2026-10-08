import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-descoberta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './descoberta.html',
  styleUrl: './descoberta.css'
})
export class DescobertaComponent implements OnInit {
  indiceAtual: number = 0;
  imagemIndexAtual: number = 0;
  
  // Filtros e Modais do Template
  mostrarFiltros: boolean = false;
  filtroApenasPets: boolean = false;
  filtroApenasMobiliado: boolean = false;
  matchPopup: boolean = false;

  // Estados de Arraste (Swipe/Drag)
  isDragging: boolean = false;
  startX: number = 0;
  currentX: number = 0;
  dragOffsetX: number = 0;
  dragRotation: number = 0;

  // Imóvel atual e Próximo imóvel
  imovelAtual: any = {};
  proximoImovel: any = null;

  // Base completa de imóveis
  listaImoveis: any[] = [
    {
      titulo: 'Mansão Térrea no Terras de São José',
      preco: '7.800.000',
      endereco: 'Terras de São José, Itu - SP',
      descricao: 'Residência de alto luxo integrada à natureza, acabamento em mármore e ampla área de lazer privativa.',
      quarto: 5, banheiro: 6, vaga: 6,
      imagens: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600'],
      condominio: 'terras-de-sao-jose', cidade: 'itu', pets: true, mobiliado: true
    },
    {
      titulo: 'Residência Exclusiva na Fazenda Vila Real',
      preco: '5.450.000',
      endereco: 'Fazenda Vila Real, Itu - SP',
      descricao: 'Arquitetura moderna com vista panorâmica espetacular para a mata nativa e lagos.',
      quarto: 4, banheiro: 5, vaga: 4,
      imagens: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600'],
      condominio: 'fazenda-vila-real', cidade: 'itu', pets: false, mobiliado: true
    },
    {
      titulo: 'Casa de Condomínio no Helvetia',
      preco: '4.200.000',
      endereco: 'Helvetia & Polo Country Club, Indaiatuba - SP',
      descricao: 'Sofisticação incomparável para os amantes de tranquilidade e exclusividade.',
      quarto: 4, banheiro: 4, vaga: 4,
      imagens: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600'],
      condominio: 'helvetia', cidade: 'indaiatuba', pets: true, mobiliado: false
    },
    {
      titulo: 'Oportunidade Residencial em Salto',
      preco: '1.250.000',
      endereco: 'Zonas Nobres, Salto - SP',
      descricao: 'Excelente custo-benefício em condomínio fechado com infraestrutura completa de lazer.',
      quarto: 3, banheiro: 3, vaga: 2,
      imagens: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600'],
      condominio: 'salto', cidade: 'salto', pets: true, mobiliado: true
    }
  ];

  imoveisFiltrados: any[] = this.listaImoveis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const termo = params['busca'];
      if (termo) {
        const t = termo.toLowerCase();
        this.imoveisFiltrados = this.listaImoveis.filter(i => 
          i.condominio.toLowerCase().includes(t) || 
          i.cidade.toLowerCase().includes(t) ||
          i.titulo.toLowerCase().includes(t)
        );
      } else {
        this.imoveisFiltrados = this.listaImoveis;
      }
      this.atualizarImoveisCard();
    });
  }

  atualizarImoveisCard() {
    if (this.imoveisFiltrados.length > 0) {
      this.indiceAtual = this.indiceAtual % this.imoveisFiltrados.length;
      this.imovelAtual = this.imoveisFiltrados[this.indiceAtual];
      this.imagemIndexAtual = 0;
      
      const proximoIndex = (this.indiceAtual + 1) % this.imoveisFiltrados.length;
      this.proximoImovel = this.imoveisFiltrados.length > 1 ? this.imoveisFiltrados[proximoIndex] : null;
    } else {
      this.imovelAtual = null;
      this.proximoImovel = null;
    }
  }

  aplicarFiltros() {
    this.imoveisFiltrados = this.listaImoveis.filter(i => {
      if (this.filtroApenasPets && !i.pets) return false;
      if (this.filtroApenasMobiliado && !i.mobiliado) return false;
      return true;
    });
    this.indiceAtual = 0;
    this.atualizarImoveisCard();
  }

  limparFiltros() {
    this.filtroApenasPets = false;
    this.filtroApenasMobiliado = false;
    this.imoveisFiltrados = this.listaImoveis;
    this.indiceAtual = 0;
    this.atualizarImoveisCard();
  }

  // Gestos e Arraste
  onDragStart(event: any) {
    this.isDragging = true;
    this.startX = event.clientX || (event.touches ? event.touches[0].clientX : 0);
  }

  onDragMove(event: any) {
    if (!this.isDragging) return;
    this.currentX = event.clientX || (event.touches ? event.touches[0].clientX : 0);
    this.dragOffsetX = this.currentX - this.startX;
    this.dragRotation = this.dragOffsetX * 0.05;
  }

  onDragEnd() {
    if (!this.isDragging) return;
    
    if (this.dragOffsetX > 100) {
      this.darMatch();
    } else if (this.dragOffsetX < -100) {
      this.recusarImovel();
    }

    this.isDragging = false;
    this.dragOffsetX = 0;
    this.dragRotation = 0;
  }

  darMatch() {
    this.matchPopup = true;
  }

  recusarImovel() {
    this.proximoImovelCard();
  }

  proximoImovelCard() {
    if (this.imoveisFiltrados.length > 0) {
      this.indiceAtual = (this.indiceAtual + 1) % this.imoveisFiltrados.length;
      this.atualizarImoveisCard();
    }
  }

  fecharMatchPopup() {
    this.matchPopup = false;
    this.proximoImovelCard();
  }

  // Galeria de imagens do imóvel
  proximaImagem() {
    if (this.imovelAtual && this.imovelAtual.imagens) {
      this.imagemIndexAtual = (this.imagemIndexAtual + 1) % this.imovelAtual.imagens.length;
    }
  }

  imagemAnterior() {
    if (this.imovelAtual && this.imovelAtual.imagens) {
      this.imagemIndexAtual = (this.imagemIndexAtual - 1 + this.imovelAtual.imagens.length) % this.imovelAtual.imagens.length;
    }
  }

  mudarTema(tema: 'light' | 'dark' | 'system') {
    if (this.themeService && typeof this.themeService.setTheme === 'function') {
      this.themeService.setTheme(tema);
    }
  }

  sair() {
    this.router.navigate(['/']);
  }

  irParaHome() {
    this.router.navigate(['/']);
  }
}