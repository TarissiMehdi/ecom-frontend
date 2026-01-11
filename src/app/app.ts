import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule], // Ajout de CommonModule
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('ecom-web-app');

  // Variable pour suivre la route actuelle
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Surveiller les changements de route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  // Méthode pour vérifier si une route est active
  isActive(route: string): boolean {
    return this.currentRoute.includes(route);
  }

  // Méthode pour naviguer (optionnel)
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  // Méthode pour rafraîchir les données (solution au problème de refresh manuel)
  refreshData(): void {
    // Émettre un événement que les composants enfants peuvent écouter
    window.dispatchEvent(new CustomEvent('refreshData'));
  }
}
