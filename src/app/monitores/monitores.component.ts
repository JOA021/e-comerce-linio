import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-monitores',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterModule],
  templateUrl: './monitores.component.html',
  styleUrl: './monitores.component.css'
})


export class MonitoresComponent {

}
