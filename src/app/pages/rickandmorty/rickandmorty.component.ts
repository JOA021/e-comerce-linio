import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickComponent } from '../../componets/rick/rick.component';
import { RickandmortyService } from '../../services/rickandmorty/rickandmorty.service';

@Component({
  selector: 'app-rickandmorty',
  standalone: true,
  imports: [CommonModule, RickComponent],
  templateUrl: './rickandmorty.component.html',
  styleUrl: './rickandmorty.component.css'
})
export class RickandmortyComponent {
  constructor(private rickService:RickandmortyService ) {}

  personajes:any={}

  traerPersonajes(){
  this.rickService.obtenerPersonajes().subscribe({

    // nos va a dar un resultado esperado si la función sale bien
    next: (data) =>{
      console.log(data)
      this.personajes = data.results
    }
  })

  console.log(this.personajes)
  }
}
