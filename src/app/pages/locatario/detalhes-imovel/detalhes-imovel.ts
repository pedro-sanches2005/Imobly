import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ImovelService } from '../../../services/imovel.service';

@Component({
  selector: 'app-detalhes-imovel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-imovel.html',
  styleUrl: './detalhes-imovel.css'
})
export class DetalhesImovelComponent implements OnInit {
  fotoSelecionadaIndex: number = 0;
  isFavorito: boolean = false;
  imovelId: number = 0;
  matchModalVisivel: boolean = false;

  imovel: any = {
    id: 1,
    titulo: 'Mansão Térrea no Terras de São José',
    preco: '7.800.000',
    localizacao: 'Terras de São José, Itu - SP',
    endereco: 'Alameda das Magnólias, Terras de São José - Itu / SP',
    descricao: 'Residência de altíssimo padrão com projeto arquitetônico assinado. Espaço gourmet totalmente integrado com piscina aquecida, sauna e paisagismo exuberante. Acabamentos em mármore importado e automação completa.',
    quarto: 5,
    banheiro: 6,
    vaga: 6,
    area: 850,
    tipo: 'Venda',
    badge: 'Venda',
    imagem: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900',
    aceitaPets: true,
    mobiliado: true,
    imagens: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900'
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private imovelService: ImovelService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.imovelId = +params['id'];
      }
    });

    const favoritos = this.imovelService.getImoveis();
    this.isFavorito = favoritos.some(i => i.id === this.imovel.id);
  }

  selecionarFoto(index: number) {
    this.fotoSelecionadaIndex = index;
  }

  toggleFavorito() {
    this.isFavorito = !this.isFavorito;
    if (this.isFavorito) {
      this.imovelService.adicionarImovel(this.imovel);
    } else {
      this.imovelService.removerImovel(this.imovel.id);
    }
  }

  voltarParaDescoberta() {
    this.router.navigate(['/descoberta']);
  }

  darMatch() {
    this.imovelService.adicionarMatch(this.imovel);
    this.matchModalVisivel = true;
  }

 iniciarConversa() {
    this.matchModalVisivel = false;
    // Redireciona e força a abertura direta na aba de mensagens
    this.router.navigate(['/cliente-dashboard'], { queryParams: { aba: 'mensagens' } });
  }

  fecharMatchModal() {
    this.matchModalVisivel = false;
    this.router.navigate(['/descoberta']);
  }
}