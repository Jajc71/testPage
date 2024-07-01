import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, BodyComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export default class LayoutComponent {

}
