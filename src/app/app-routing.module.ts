import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiPokemonComponent } from './pokemon/presentation/mi-pokemon/mi-pokemon.component';

const routes: Routes = [
  {
    path: "",
    data: {title: "Pokemon/ Mis Pokemones"},
    children:[
      {path: "", redirectTo: "pokemon", pathMatch:"full"},
      {path:"pokemon", component:MiPokemonComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
