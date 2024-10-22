import { Component, OnInit, Inject } from '@angular/core';
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
  @Inject(MAT_DIALOG_DATA) public removeData: any,
  public dialogRef: MatDialogRef<MusicDeleteComponent>,

    ) { }

  musics: Music[] = [];
  music: Music = {
    nome: '',
    autor: '',
    genero: '',
    link:  '',
  }
  
  ngOnInit(): void {
    if (this.removeData) {
      // Preenche os dados de remover
      this.music.id = this.removeData.id;
      this.music.nome = this.removeData.nome;
      this.music.autor = this.removeData.autor;
      this.music.genero = this.removeData.genero;
      this.music.link = this.removeData.link;
    }
  }

  cancel(): void{
      this.dialogRef.close();
  }
  delete() {
      if (this.music.id) { // Supondo que você tenha um ID para a música que deseja excluir
        this.musicService.deleteMusic(this.music.id).subscribe(
          response => {
            this.dialogRef.close(response); // Fecha o diálogo e envia a resposta
            this.musicService.showMsg('Música excluída com sucesso!');
          },
          
        );
    }
  }
  

  }


