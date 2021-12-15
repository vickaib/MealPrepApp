import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import {Food } from '../models/Foods';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  param: any;
  foods:Food[] = []
  constructor(private foodService:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  
    this.param = this.route.paramMap.subscribe(params => 
      {
        console.log('Parameters: ' + params.get('searchTerm'));
        console.log('Parameters2: ' + params.get('searchTerm'));
        if(params.get('searchTerm')){
        this.foods = this.foodService.getAll().filter(food => 
          food.name.toLowerCase().includes(params.get('searchTerm')!.toLowerCase()));
          console.log('successfully filtered by ' + params.get('searchTerm') + '.');
        }
        else
        this.foods = this.foodService.getAll();
      })
      
      console.log('...done.');
    }

      ngOnDestroy(): void {
        this.param.unsubscribe;
      }

    }