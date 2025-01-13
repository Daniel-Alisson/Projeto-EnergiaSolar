import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.css',
  imports: [HeaderComponent, FooterComponent],
})
export class SobreNosComponent {}
