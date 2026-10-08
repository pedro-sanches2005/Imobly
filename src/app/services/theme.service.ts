import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<ThemeMode>('system');
  currentTheme$ = this.currentThemeSubject.asObservable();

  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    const savedTheme = (localStorage.getItem('imobly-theme') as ThemeMode) || 'system';
    this.setTheme(savedTheme);

    this.mediaQuery.addEventListener('change', () => {
      if (this.currentThemeSubject.value === 'system') {
        this.applyThemeToDocument('system');
      }
    });
  }

  setTheme(theme: ThemeMode) {
    this.currentThemeSubject.next(theme);
    localStorage.setItem('imobly-theme', theme);
    this.applyThemeToDocument(theme);
  }

  get currentTheme(): ThemeMode {
    return this.currentThemeSubject.value;
  }

  private applyThemeToDocument(theme: ThemeMode) {
    let activeTheme = theme;

    if (theme === 'system') {
      activeTheme = this.mediaQuery.matches ? 'dark' : 'light';
    }

    if (activeTheme === 'dark') {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }
}