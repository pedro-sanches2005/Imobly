import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  modoRegistro: boolean = false;
  tipoConta: 'cliente' | 'imobiliaria' = 'cliente';

  constructor(private router: Router) {}

  alternarModoRegistro(status: boolean) {
    this.modoRegistro = status;
  }

  selecionarTipo(tipo: 'cliente' | 'imobiliaria') {
    this.tipoConta = tipo;
  }

 entrarNoSistema() {
    if (this.modoRegistro) {
      if (this.tipoConta === 'cliente') {
        this.router.navigate(['/cliente-dashboard']);
      } else if (this.tipoConta === 'imobiliaria') {
        this.router.navigate(['/painel-corretor']); // Atualizado para a rota correta
      } else {
        this.router.navigate(['/cliente-dashboard']);
      }
    } else {
      // Lê o valor selecionado no <select id="perfil">
      const perfilSelect = (document.getElementById('perfil') as HTMLSelectElement)?.value;
      
      // Se for corretor ou proprietario, redireciona para o painel do corretor/proprietário
      if (perfilSelect === 'corretor' || perfilSelect === 'proprietario') {
        this.router.navigate(['/painel-corretor']); 
      } else {
        this.router.navigate(['/cliente-dashboard']); 
      }
    }
  }
}
