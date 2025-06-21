import { Component, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  ingreso = signal(false);
  constructor() {
    setTimeout(() => {
      this.ingreso.set(true);
    }, 10000);
  }
    ingresar() {
      console.log('Ingresando...');
    this.ingreso.set(true);
  }
}
