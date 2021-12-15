import { Injectable } from '@angular/core';
import {Food} from '../models/Foods'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
      {id: 1, name: 'Spaghetti', calories: 500, budget: 10.00, time: 20, link: "google.com", image:"assets/img/recepie/recipe1.png"},
    
      {id: 2, name: 'Chicken', calories: 200, budget: 6.00, time: 15, link: "google.com", image:"assets/img/recepie/recipe2.png"},
      
      {id: 3, name: 'Shrimp', calories: 250, budget: 9.00, time: 10, link: "google.com", image:"assets/img/recepie/recipe3.png"},
      
      {id: 4, name: 'Beef Taco', calories: 300, budget: 3.00, time: 20, link: "google.com", image:"assets/img/recepie/recipe4.png"},
      
      {id: 5, name: 'Lasagna', calories: 550, budget: 12.00, time: 30, link: "google.com", image:"assets/img/recepie/recipe5.png"},
      
      {id: 6, name: 'Shrimp Taco', calories: 275, budget: 2.50, time: 10, link: "google.com", image:"assets/img/recepie/recipe6.png"},

      {id: 7, name: 'Spaghetti 2', calories: 500, budget: 10.00, time: 20, link: "google.com", image:"assets/img/recepie/recipe4.png"},
    
      {id: 8, name: 'Chicken 2', calories: 200, budget: 6.00, time: 15, link: "google.com", image:"assets/img/recepie/recipe3.png"},
      
      {id: 9, name: 'Shrimp 2', calories: 250, budget: 9.00, time: 10, link: "google.com", image:"assets/img/recepie/recipe6.png"},
      
      {id: 10, name: 'Beef Taco 2', calories: 300, budget: 3.00, time: 20, link: "google.com", image:"assets/img/recepie/recipe1.png"},
      
      {id: 11, name: 'Lasagna 2', calories: 550, budget: 12.00, time: 30, link: "google.com", image:"assets/img/recepie/recipe5.png"},
      
      {id: 12, name: 'Shrimp Taco 2', calories: 275, budget: 2.50, time: 10, link: "wikipedia.com", image:"assets/img/recepie/recipe2.png"}
    ]
  }
}
