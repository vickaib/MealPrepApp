import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import {Food } from '../models/Foods';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  foods:Food[] = []
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

}
