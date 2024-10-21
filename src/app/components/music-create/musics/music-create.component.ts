
import { Component, Inject, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/musiccreate/music.service';
import { Router } from '@angular/router';
import { Music } from '../music.model';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  };

  constructor(
    private musicService: MusicService, 
    private router: Router, 
    private dialogRef: MatDialogRef<MusicCreateComponent>,
  ) { }

  ngOnInit(): void {}

  

  createMusic(): void {
    this.musicService.create(this.music).subscribe((newMusic) => {
      this.musicService.showMsg('Música adicionada com sucesso!');
      this.dialogRef.close(newMusic); // Passa a nova música ao fechar o diálogo
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
