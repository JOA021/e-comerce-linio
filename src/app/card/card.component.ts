import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent {
  @Input() imgOfer?: String = "Soy la imagen de la oferta";
  @Input() imgProduct: String = "Soy la imagen del producto";
  @Input() title: String = "Soy el titulo generico";
  @Input() originalPrice: String = "Precio original";
  @Input() discount?: String = "Precio original";
  @Input() discountTarjet?:  String = "Precio original";
  @Input() imgUnica?: String = "Soy la imagen de la oferta";
  @Input() imgCMR?: String = "Soy la imagen de la oferta";
  @Input() imgBank?: String = "Soy la imagen de la oferta";
  
}
