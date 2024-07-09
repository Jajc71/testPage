import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InicioComponent } from '../inicio/inicio.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ProgramasComponent } from '../programas/programas.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { CertificacionesComponent } from '../certificaciones/certificaciones.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, InicioComponent, 
    NosotrosComponent, ProgramasComponent, 
    CertificacionesComponent, ContactoComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export default class LayoutComponent {

}
