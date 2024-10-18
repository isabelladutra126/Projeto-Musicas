import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { MusicCreateComponent } from './components/music-create/musics/music-create.component';
import { MusicUpdateComponent } from './components/music-update/music-update.component';
import { MusicDeleteComponent } from './components/music-delete/music-delete.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'produtos', component: ProdutosComponent},
  {path:'music-create', component: MusicCreateComponent},
  {path: "music/update/:id", component: MusicUpdateComponent},
  {path: "music/delete/:id", component: MusicDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
