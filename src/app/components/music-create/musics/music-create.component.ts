import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/musiccreate/music.service';
import { Router } from '@angular/router';
import { Music } from '../music.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-music-create',
  templateUrl: './music-create.component.html',
  styleUrls: ['./music-create.component.css']
})
export class MusicCreateComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}

  music: Music = {
    nome: '',
    autor: '',
    genero: '',
    link:  '',
  }

  constructor(private musicService: MusicService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createMusic(): void 
  {
    this.musicService.create(this.music).subscribe(() => {
    this.musicService.showMsg('Música adicionada com sucesso!')
    this.router.navigate(['/produtos'])
  })
  }



  cancel(): void {
    this.router.navigate(['/produtos'])
  }
}
