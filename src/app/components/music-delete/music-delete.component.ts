import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/musiccreate/music.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Music } from '../music-create/music.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-music-delete',
  templateUrl: './music-delete.component.html',
  styleUrls: ['./music-delete.component.css']
})
export class MusicDeleteComponent implements OnInit {

  constructor(
    private musicService: MusicService, 
    private router: Router, 
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<MusicDeleteComponent>,
    ) { }

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
    this.dialogRef.close(false);
    }

  deleteMusic(): void {
    this.dialogRef.close(true);
      }
      ;
  }
