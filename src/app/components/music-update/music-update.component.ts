import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../service/musiccreate/music.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Music } from '../music-create/music.model';

@Component({
  selector: 'app-music-update',
  templateUrl: './music-update.component.html',
  styleUrls: ['./music-update.component.css']
})
export class MusicUpdateComponent implements OnInit {

  music: Music = {
    nome: '',
    autor: '',
    genero: '',
    link:  '',
  }

  constructor(private musicService: MusicService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.musicService.readbyId(id!).subscribe(music => {this.music = music});
  }

  updateMusic(): void {
    this.musicService.update(this.music).subscribe (() => {
      this.musicService.showMsg('Música atualizada com sucesso!')
      this.router.navigate(['/produtos'])
    })
  }
  
  cancel(): void{
  this.router.navigate(['/produtos'])
  }
  
}
