import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tarjetas = [0, 1, 2, 3, 4, 5, 6, 7 ];
  nombreProducto = 'Laptop';
  precioProducto = 15.99;


  constructor() { }

  ngOnInit() {
  }

}
