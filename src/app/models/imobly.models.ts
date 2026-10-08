export interface Usuario {
  id: number;
  nome: string;
  email: string;
  tipoPerfil: 'Locatario' | 'Proprietario' | 'Admin';
}

export interface Imovel {
  id: number;
  proprietarioId: number;
  titulo: string;
  descricao: string;
  valor: number;
  condominio?: number;
  iptu?: number;
  endereco: string;
  bairro: string;
  cidade: string;
  quartos: number;
  banheiros: number;
  vagas: number;
  areaM2: number;
  imagens: string[];
  comodidades: string[];
  aceitaPets: boolean;
  mobiliado: boolean;
}

export interface Match {
  id: number;
  locatarioId: number;
  imovel: Imovel;
  dataMatch: string;
}

export interface Mensagem {
  id: number;
  matchId: number;
  remetenteId: number;
  texto: string;
  dataEnvio: string;
}