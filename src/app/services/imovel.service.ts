import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Imovel } from '../models/imobly.models';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  private imoveisMock: Imovel[] = [
    {
      id: 1,
      proprietarioId: 10,
      titulo: 'Apartamento Studio Moderno',
      descricao: 'Excelente studio totalmente mobiliado, próximo ao centro de Itu. Ideal para estudantes ou jovens profissionais.',
      valor: 1850,
      condominio: 280,
      iptu: 65,
      endereco: 'Rua Floriano Peixoto, Centro',
      bairro: 'Centro',
      cidade: 'Itu - SP',
      quartos: 1,
      banheiros: 1,
      vagas: 1,
      areaM2: 42,
      imagens: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800'
      ],
      comodidades: ['Ar Condicionado', 'Piscina', 'Academia', 'Portaria 24h', 'Varanda'],
      aceitaPets: true,
      mobiliado: true
    },
    {
      id: 2,
      proprietarioId: 11,
      titulo: 'Casa Ampla em Condomínio Fechado',
      descricao: 'Casa de alto padrão com amplo quintal, área gourmet com churrasqueira e acabamento refinado.',
      valor: 3400,
      condominio: 450,
      iptu: 120,
      endereco: 'Alameda dos Ipês, Bairro Brasil',
      bairro: 'Bairro Brasil',
      cidade: 'Itu - SP',
      quartos: 3,
      banheiros: 3,
      vagas: 2,
      areaM2: 160,
      imagens: [
        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800'
      ],
      comodidades: ['Churrasqueira', 'Quintal', 'Garagem Coberta', 'Segurança 24h'],
      aceitaPets: true,
      mobiliado: false
    },
    {
      id: 3,
      proprietarioId: 12,
      titulo: 'Apartamento Aconchegante com Varanda Gourmet',
      descricao: 'Lindo apartamento com vista panorâmica, armários planejados na cozinha e quartos.',
      valor: 2200,
      condominio: 320,
      iptu: 80,
      endereco: 'Av. Prudente de Moraes, Vila Nova',
      bairro: 'Vila Nova',
      cidade: 'Itu - SP',
      quartos: 2,
      banheiros: 2,
      vagas: 1,
      areaM2: 68,
      imagens: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
      ],
      comodidades: ['Varanda Gourmet', 'Elevador', 'Salão de Festas', 'Playground'],
      aceitaPets: false,
      mobiliado: true
    }
  ];

  obterImoveisDescoberta(): Observable<Imovel[]> {
    return of(this.imoveisMock);
  }
}