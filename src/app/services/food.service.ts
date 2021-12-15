import { Injectable } from '@angular/core';
import {Food} from '../models/Foods'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
      {id: 1, name: 'Chicken and Pepper Pie', calories: 500, budget: 10.00, time: 20, link: "www.allrecipes.com/recipe/238113/lattice-chicken-and-peppers-pie/", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6402484.jpg&q=85"},
    
      {id: 2, name: 'Chicken Katsu', calories: 200, budget: 6.00, time: 15, link: "www.allrecipes.com/recipe/72068/chicken-katsu/", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5015374.jpg&w=958&h=958&c=sc&poi=face&q=85"},
      
      {id: 3, name: 'Shrimp', calories: 250, budget: 9.00, time: 10, link: "google.com", image:"assets/img/recepie/recipe3.png"},
      
      {id: 4, name: 'Veggie Tacos', calories: 300, budget: 3.00, time: 20, link: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5270522.jpg", image:"assets/img/recepie/recipe4.png"},
      
      {id: 5, name: 'Chicken Yakisoba', calories: 550, budget: 12.00, time: 30, link: "www.allrecipes.com/recipe/230764/chicken-yakisoba/", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3215083.jpg&w=300&h=399&c=sc&poi=face&q=85"},
      
      {id: 6, name: 'Shrimp Tacos', calories: 275, budget: 2.50, time: 10, link: "www.allrecipes.com/recipe/139830/shrimp-tacos/", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2370315.jpg"},

      {id: 7, name: 'Sweet and Sour Chicken', calories: 500, budget: 10.00, time: 20, link: "www.allrecipes.com/recipe/282257/sweet-and-sour-grilled-chicken/", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8775464.jpg&q=85"},
    
      {id: 8, name: 'Chicken Fritters', calories: 200, budget: 6.00, time: 15, link: "www.allrecipes.com/recipe/270533/chicken-fritters/", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6334387.jpg&w=596&h=792&c=sc&poi=face&q=85"},
      
      {id: 9, name: 'Crunchy Fried Shrimp', calories: 250, budget: 9.00, time: 10, link: "www.allrecipes.com/recipe/216969/crunchy-fried-shrimp/", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1076570.jpg&w=596&h=399&c=sc&poi=face&q=85"},
      
      {id: 10, name: 'Green Chile Beef Tacos', calories: 300, budget: 3.00, time: 20, link: "www.allrecipes.com/recipe/214894/green-chile-beef-tacos/", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F771109.jpg"},
      
      {id: 11, name: 'Avocado Chicken Salad Dip', calories: 550, budget: 12.00, time: 30, link: "www.allrecipes.com/recipe/247412/avocado-chicken-salad-dip/", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3709155.jpg&w=596&h=596&c=sc&poi=face&q=85"},
      
      {id: 12, name: 'Macaroni and Cheese', calories: 275, budget: 2.50, time: 10, link: "www.allrecipes.com/recipe/14140/baked-macaroni-and-cheese/", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2017%2F05%2F964194-Baked-Macaroni-Cheese-Photo-by-MyHotSouthernMess-resize.jpg"}
    ]
  }
}
