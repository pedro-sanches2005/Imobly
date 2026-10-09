import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ImovelService, Imovel } from '../services/imovel.service'; // Ajuste o caminho se necessário

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

  // Dados dinâmicos do Utilizador (Baseados na sua documentação)
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

  conversas = [
    {
      id: 1,
      consultor: 'Carlos Imobiliária',
      cargo: 'Consultor Regional (Itu & Salto)',
      avatar: 'CI',
      ultimaMensagem: 'Olá Pedro! Conseguiu analisar as novas propriedades em Itu?',
      tempo: 'Há 2 horas',
      mensagens: [
        { remetente: 'consultor', texto: 'Olá Pedro! Seja bem-vindo à Imobly.', hora: '10:15' },
        { remetente: 'cliente', texto: 'Olá Carlos! Sim, estou a acompanhar as novidades.', hora: '10:20' }
      ]
    }
  ];

  conversaAtiva: any = null;
  novaMensagemTexto: string = '';

  // Controlo de Reagendamento e Calendário
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
      imovel: 'Atendimento Personalizado - Região de Itu',
      data: '12 de Outubro de 2026 às 14:30',
      endereco: 'Itu, SP',
      status: 'Confirmada com Corretor'
    }
  ];

  constructor(private router: Router, private imovelService: ImovelService) {}

  ngOnInit(): void {
    // Carrega dinamicamente os imóveis cadastrados pelos corretores/admins
    this.carregarImoveis();

    if (this.conversas.length > 0) {
      this.conversaAtiva = this.conversas[0];
    }
    this.inicializarLimitesDeData();
  }

  carregarImoveis(): void {
    this.imoveisFavoritos = this.imovelService.getImoveis();
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
    this.carregarImoveis();
  }

  verDetalhesImovel(id: number): void { this.router.navigate(['/descoberta']); }
  irParaDescoberta(): void { this.router.navigate(['/descoberta']); }
  irParaHome(): void { this.router.navigate(['/']); }
  terminarSessao(): void { this.router.navigate(['/login']); }

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
      visita.status = 'Reagendamento Solicitado';
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