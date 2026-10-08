import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email = '';
  senha = '';
  perfilSelecionado: 'Locatario' | 'Proprietario' = 'Locatario';

  constructor(private router: Router) {}

  irParaHome() {
    this.router.navigate(['/']);
  }

  entrar() {
    if (!this.email || !this.senha) {
      alert('Por favor, preencha o e-mail e a senha.');
      return;
    }

    localStorage.setItem('usuarioLogado', JSON.stringify({
      email: this.email,
      tipoPerfil: this.perfilSelecionado
    }));

    alert(`Bem-vindo ao Imobly como ${this.perfilSelecionado}!`);
    this.router.navigate(['/descoberta']);
  }
}