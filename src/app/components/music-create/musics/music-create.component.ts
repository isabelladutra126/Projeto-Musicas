import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/musiccreate/music.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-music-create',
  templateUrl: './music-create.component.html',
  styleUrls: ['./music-create.component.css']
})
export class MusicCreateComponent implements OnInit {

  constructor(private musicService: MusicService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createMusic(): void 
  {
    this.musicService.showMsg('Música adicionada com sucesso!')
  }

  cancelMusic(): void {
    this.router.navigate(['/produtos'])
  }
}
