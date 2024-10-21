import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { MatButtonModule } from '@angular/material/button';
import { MusicCreateComponent } from './components/music-create/musics/music-create.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgModel } from '@angular/forms';
import { MusicReadComponent } from './components/music-read/music-read.component';
import { Productread2Component } from './components/productread2/productread2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CapitalizeWordsPipe } from './capitalize-words.pipe';
import { MusicUpdateComponent } from './components/music-update/music-update.component';
import { MusicDeleteComponent } from './components/music-delete/music-delete.component';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutosComponent,
    RedDirective,
    ForDirective,
    MusicCreateComponent,
    MusicReadComponent,
    Productread2Component,
    CapitalizeWordsPipe,
    MusicUpdateComponent,
    MusicDeleteComponent,
    VideoModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule, 
    MatDialogModule,
    MatIconModule,
    FormsModule, MatTableModule, MatPaginatorModule, MatSortModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
