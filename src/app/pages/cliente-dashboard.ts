import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ImovelService, Imovel, Conversa } from '../services/imovel.service';

@Component({
  selector: 'app-cliente-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente-dashboard.html',
  styleUrls: ['./cliente-dashboard.css']
})
export class ClienteDashboardComponent implements OnInit {
  abaAtiva: string = 'visao-geral';
  modoEscuro: boolean = true;

  // Propriedades do modal declaradas para evitar erros de compilação
  modalChatDisponivelVisivel: boolean = false;
  imovelRecenteMatch: string = 'Mansão Térrea no Terras de São José';

  usuario = {
    nome: 'Pedro Sanches Biasini',
    iniciais: 'PB',
    email: 'pedro.sanches@email.com',
    cidade: 'Itu, São Paulo',
    instituicao: 'Fatec Itu',
    curso: 'Análise e Desenvolvimento de Sistemas',
    tipoConta: 'Comprador / Investidor'
  };

  imoveisFavoritos: Imovel[] = [];
  matchesAtivos: any[] = [];
  conversas: Conversa[] = [];

  conversaAtiva: any = null;
  novaMensagemTexto: string = '';

  reagendamentoAtivo: boolean = false;
  visitaSelecionadaId: number | null = null;
  novaDataVisita: string = '';
  novoHorarioVisita: string = '14:30';
  horariosDisponiveis: string[] = ['09:00', '10:30', '14:00', '15:30', '17:00'];
  avisoErroData: string = '';

  dataMinimaHoje: string = '';
  dataMaximaAnoAtual: string = '';

  modalPasso1Visivel: boolean = false;
  modalPasso2Visivel: boolean = false;

  visitasAgendadas = [
    {
      id: 1,
      imovel: 'Mansão Térrea no Terras de São José - Itu',
      data: '12 de Outubro de 2026 às 14:30',
      endereco: 'Terras de São José, Itu - SP',
      status: 'Confirmada com Corretor'
    }
  ];

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private imovelService: ImovelService
  ) {}

  ngOnInit(): void {
    this.carregarDadosGlobais();
    
    // Verifica se veio da rota com queryParam indicando a aba de mensagens diretamente
    const abaParam = this.route.snapshot.queryParams['aba'];
    if (abaParam) {
      this.abaAtiva = abaParam;
    }

    if (this.conversas.length > 0) {
      this.conversaAtiva = this.conversas[this.conversas.length - 1];
      this.imovelRecenteMatch = this.conversaAtiva.imovelAssociado || 'Imóvel em Destaque';
    }

    this.inicializarLimitesDeData();
  }

  carregarDadosGlobais(): void {
    this.imoveisFavoritos = this.imovelService.getImoveis();
    this.matchesAtivos = this.imovelService.getMatches();
    this.conversas = this.imovelService.getConversas();
  }

  inicializarLimitesDeData(): void {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    this.dataMinimaHoje = hoje.toISOString().split('T')[0];
    this.dataMaximaAnoAtual = `${anoAtual}-12-31`;
  }

  mudarAba(aba: string): void { this.abaAtiva = aba; }
  alternarTema(): void { this.modoEscuro = !this.modoEscuro; }

  removerFavorito(id: number): void {
    this.imovelService.removerImovel(id);
    this.carregarDadosGlobais();
  }

  verDetalhesImovel(id: number): void { this.router.navigate(['/descoberta']); }
  irParaDescoberta(): void { this.router.navigate(['/descoberta']); }
  irParaHome(): void { this.router.navigate(['/']); }
  terminarSessao(): void { this.router.navigate(['/login']); }

  // Métodos do modal de chat disponível
  fecharModalChatDisponivel(): void {
    this.modalChatDisponivelVisivel = false;
  }

  irParaAbaMensagensDoModal(): void {
    this.modalChatDisponivelVisivel = false;
    this.abaAtiva = 'mensagens';
  }

  irParaChat(match: any): void {
    const conversaEncontrada = this.conversas.find(c => c.imovelAssociado === match.titulo) || this.conversas[0];
    this.conversaAtiva = conversaEncontrada;
    this.abaAtiva = 'mensagens';
  }

  agendarVisitaMatch(match: any): void {
    this.abaAtiva = 'visitas';
    const visitaExistente = this.visitasAgendadas.find(v => v.imovel.includes(match.titulo));
    if (visitaExistente) {
      this.abrirReagendamento(visitaExistente.id);
    } else {
      this.abrirReagendamento(1);
    }
  }

  abrirReagendamento(id: number): void {
    this.visitaSelecionadaId = id;
    this.reagendamentoAtivo = true;
    this.avisoErroData = '';
    this.novaDataVisita = '';
  }

  cancelarReagendamento(): void {
    this.reagendamentoAtivo = false;
    this.visitaSelecionadaId = null;
  }

  validarEAvancarReagendamento(): void {
    if (!this.novaDataVisita) {
      this.avisoErroData = 'Por favor, selecione uma data real.';
      return;
    }

    const dataEscolhida = new Date(this.novaDataVisita + 'T00:00:00');
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dataEscolhida < hoje) {
      this.avisoErroData = '❌ Não é possível agendar visitas em datas passadas.';
      return;
    }

    if (dataEscolhida.getDay() === 0) {
      this.avisoErroData = '❌ A Imobly não realiza agendamentos aos domingos.';
      return;
    }

    this.avisoErroData = '';
    this.modalPasso1Visivel = true;
  }

  fecharModalPasso1(): void { this.modalPasso1Visivel = false; }
  
  confirmarPasso1ESeguir(): void {
    this.modalPasso1Visivel = false;
    this.modalPasso2Visivel = true;
  }

  concluirReagendamentoFinal(): void {
    const dataEscolhida = new Date(this.novaDataVisita + 'T00:00:00');
    const opcoes: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dataFormatada = dataEscolhida.toLocaleDateString('pt-BR', opcoes);

    const visita = this.visitasAgendadas.find(v => v.id === this.visitaSelecionadaId);
    if (visita) {
      visita.data = `${dataFormatada} às ${this.novoHorarioVisita}`;
      visita.status = 'Agendamento Confirmado';
    }

    this.modalPasso2Visivel = false;
    this.reagendamentoAtivo = false;
    this.visitaSelecionadaId = null;
  }

  selecionarConversa(conversa: any): void { this.conversaAtiva = conversa; }
  
  enviarMensagem(): void {
    if (!this.novaMensagemTexto || !this.novaMensagemTexto.trim()) return;
    const horaAtual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.conversaAtiva.mensagens.push({ remetente: 'cliente', texto: this.novaMensagemTexto.trim(), hora: horaAtual });
    this.conversaAtiva.ultimaMensagem = `Você: ${this.novaMensagemTexto.trim()}`;
    this.conversaAtiva.tempo = 'Agora';
    this.novaMensagemTexto = '';
  }

  salvarPerfil(): void {
    alert('Alterações guardadas com sucesso!');
  }
}