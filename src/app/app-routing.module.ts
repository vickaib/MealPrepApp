import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from "./app.component";
import { GalleryComponent } from "./gallery/gallery.component";

const routes: Routes = [
  {path:'search/:searchTerm', component:GalleryComponent},
  {path:'',  component:GalleryComponent},
  {path:'**', redirectTo: '/'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}