import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicCreateComponent } from '../../components/music-create/music-create.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToMusicCreate (): void{
    this.router.navigate(['/music-create'])
  }
}
