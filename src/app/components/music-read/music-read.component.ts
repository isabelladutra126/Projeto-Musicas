import { Component, OnInit } from '@angular/core';
import { Music } from '../music-create/music.model';
import { MusicService } from 'src/app/service/musiccreate/music.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-music-read',
  templateUrl: './music-read.component.html',
  styleUrls: ['./music-read.component.css']
})
export class MusicReadComponent implements OnInit {
[x: string]: any;
  
  musics: Music[] = []
  displayedColumns = ['nome', 'autor', 'genero', 'link', 'action']


  constructor(private musicService: MusicService) { }



  ngOnInit(): void {
    this.musicService.read().subscribe(musics => {
      this.musics = musics
      console.log(musics)
    })

  
  }


}
