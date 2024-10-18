import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/musiccreate/music.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Music } from '../music-create/music.model';

@Component({
  selector: 'app-music-delete',
  templateUrl: './music-delete.component.html',
  styleUrls: ['./music-delete.component.css']
})
export class MusicDeleteComponent implements OnInit {

  constructor(private musicService: MusicService, private router: Router, private route: ActivatedRoute) { }

  music: Music = {
    nome: '',
    autor: '',
    genero: '',
    link:  '',
  }

  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.musicService.readbyId(id!).subscribe(music => {this.music = music}); }

  cancel(): void{
    this.router.navigate(['/produtos'])
    }

  deleteMusic(): void {
    this.musicService.delete(this.music?.id ?? '').subscribe(() => {
      this.musicService.showMsg('Música excluída com sucesso!');
      this.router.navigate(['/produtos']);
      });
  }
}