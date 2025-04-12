import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./formulario/formulario.component";
import { CuerpoComponent } from "./cuerpo/cuerpo.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioComponent, CuerpoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HolaMundo';
}
