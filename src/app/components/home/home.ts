import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService, ThemeMode } from '../../services/theme.service';

export interface ChatMessage {
  remetente: 'user' | 'bot';
  texto: string;
  horario: string;
}

export interface ZonaSlide {
  titulo: string;
  subtitulo: string;
  imagem: string;
  cidade: string;
  linkFiltro: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
    
  @ViewChild('homeContainer') homeContainer!: ElementRef;

  logoBase64: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWAQAAAAA7g1/zAAACtElEQVR42u3YQU7DMBCF0b+k5T3Q0XgBqg4g0g2lJvQAKR1A0iWkJ8AKuVzASr2G9Lq/sQy7yVp9T54k24r22W/G3e+P97ff97mPf393/+9t6PfrD//73u3v9/v7u//7+93t9/vvf78n9787Pff3379+fv/++v3t9/v7e//79/fv97v73v//v3v73//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v7vvf//v3v93v73f//v3v7vvf//v3v7vvf//v3v93v73f//v3v7vvf//v3v7vvf//v3v93v73f//v3v7vvf//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v7vvf//v3v93v73f//v3v7vvf//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v7vvf//v3v93v73f//v3v93v73f//v3v93v73f//v3v93v73f'; // (cole aqui a string completa em base64 da sua imagem logo-imobly.png)



  abaSelecionada: string = 'comprar';
  cidadeSelecionada: string = '';
  tipoImovelSelecionado: string = '';
  quartosSelecionados: string = '';

  // Carrossel de Zonas/Condomínios
  slideAtualIndex: number = 0;
  private intervalCarrossel: any;

  zonasAtendidas: ZonaSlide[] = [
    {
      titulo: 'TERRAS DE SÃO JOSÉ I E II',
      subtitulo: 'CONDOMÍNO',
      cidade: 'Itu - SP',
      imagem: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600',
      linkFiltro: 'terras-de-sao-jose'
    },
    {
      titulo: 'FAZENDA VILA REAL',
      subtitulo: 'CONDOMÍNIO',
      cidade: 'Itu - SP',
      imagem: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
      linkFiltro: 'fazenda-vila-real'
    },
    {
      titulo: 'HELVETIA & POLO COUNTRY CLUB',
      subtitulo: 'CONDOMÍNIO',
      cidade: 'Indaiatuba - SP',
      imagem: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600',
      linkFiltro: 'helvetia'
    },
    {
      titulo: 'XAPURI & ZONAS NOBRES',
      subtitulo: 'REGIÃO',
      cidade: 'Salto - SP',
      imagem: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600',
      linkFiltro: 'salto'
    }
  ];

  // Chatbot
  chatAberto: boolean = false;
  mensagemDigitada: string = '';
  mensagens: ChatMessage[] = [
    {
      remetente: 'bot',
      texto: 'Olá! Sou a Bia, consultora virtual da Imobly. 🏠 Como posso te ajudar a encontrar seu imóvel em Itu, Salto ou Indaiatuba hoje?',
      horario: 'Agora'
    }
  ];

  constructor(
    
    private router: Router,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.iniciarCarrosselAutomatico();
  }

  ngOnDestroy(): void {
    this.pararCarrosselAutomatico();
  }

  // Controlo do Carrossel
  iniciarCarrosselAutomatico() {
    this.intervalCarrossel = setInterval(() => {
      this.proximoSlide();
    }, 4000);
  }

  pararCarrosselAutomatico() {
    if (this.intervalCarrossel) {
      clearInterval(this.intervalCarrossel);
    }
  }

  proximoSlide() {
    this.slideAtualIndex = (this.slideAtualIndex + 1) % this.zonasAtendidas.length;
  }

  slideAnterior() {
    this.slideAtualIndex = (this.slideAtualIndex - 1 + this.zonasAtendidas.length) % this.zonasAtendidas.length;
  }

  irParaSlide(index: number) {
    this.slideAtualIndex = index;
    this.pararCarrosselAutomatico();
    this.iniciarCarrosselAutomatico();
  }

  
  // Ações de Navegação
  irParaHome() {
    if (this.homeContainer && this.homeContainer.nativeElement) {
      this.homeContainer.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      if (this.homeContainer?.nativeElement) {
        this.homeContainer.nativeElement.scrollTop = 0;
      }
      window.scrollTo(0, 0);
    }, 100);
  }

  // O botão  leva corretamente para a tela de login/seleção de perfis
  entrarNoImobly(): void {
    this.router.navigate(['/login']); 
  }

  rolarParaSeccao(idSeccao: string, event: Event) {
    event.preventDefault();
    const el = document.getElementById(idSeccao);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  selecionarAba(aba: string) {
    this.abaSelecionada = aba;
  }

  onTipoImovelChange() {
    if (this.tipoImovelSelecionado === 'terreno') {
      this.quartosSelecionados = '';
    }
  }

  irParaLogin() {
    this.router.navigate(['/login']);
  }

  irParaDescoberta(filtroCondominio?: string) {
  if (filtroCondominio) {
    // Redireciona para /descoberta passando o condomínio/região via queryParams
    this.router.navigate(['/descoberta'], {
      queryParams: { busca: filtroCondominio }
    });
  } else {
    this.router.navigate(['/descoberta']);
  }
}

  mudarTema(tema: ThemeMode) {
    this.themeService.setTheme(tema);
  }

  toggleChat() {
    this.chatAberto = !this.chatAberto;
  }

  enviarMensagem() {
    if (!this.mensagemDigitada.trim()) return;

    const textoUsuario = this.mensagemDigitada;
    const agora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    this.mensagens.push({
      remetente: 'user',
      texto: textoUsuario,
      horario: agora
    });

    this.mensagemDigitada = '';

    setTimeout(() => {
      this.gerarRespostaBot(textoUsuario);
    }, 1000);
  }

  gerarRespostaBot(pergunta: string) {
    const agora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let resposta = 'Perfeito! Posso agendar um atendimento com nossos especialistas ou te direcionar para nosso feed de imóveis.';

    const p = pergunta.toLowerCase();
    if (p.includes('casa') || p.includes('condominio') || p.includes('terras')) {
      resposta = 'Temos ótimas opções em condomínios fechados como Terras de São José e Fazenda Vila Real. Deseja ver casas prontas para morar ou terrenos?';
    } else if (p.includes('alugar') || p.includes('aluguel') || p.includes('locacao')) {
      resposta = 'Temos apartamentos e casas para locação imediata em Itu e Indaiatuba. Você prefere com ou sem mobília?';
    } else if (p.includes('preço') || p.includes('valor') || p.includes('quanto')) {
      resposta = 'Trabalhamos com oportunidades desde apartamentos modernos até mansões de alto padrão. Qual faixa de investimento você procura?';
    }

    this.mensagens.push({
      remetente: 'bot',
      texto: resposta,
      horario: agora
    });
  }
}