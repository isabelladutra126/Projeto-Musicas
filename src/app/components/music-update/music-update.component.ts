import { Component, Inject, OnInit } from '@angular/core';
import { MusicService } from '../../service/musiccreate/music.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Music } from '../music-create/music.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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

  constructor(
    private musicService: MusicService, 
    private router: Router, 
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    public dialogRef: MatDialogRef<MusicUpdateComponent>) { }

  ngOnInit(): void {  
    if (this.editData) {
      // Preenche os dados de edição
      this.music.id = this.editData.id;
      this.music.nome = this.editData.nome;
      this.music.autor = this.editData.autor;
      this.music.genero = this.editData.genero;
      this.music.link = this.editData.link;
    }
  }

  update() {
    if (this.music.nome && this.music.autor && this.music.genero && this.music.link) {
      this.musicService.updateMusic(this.music).subscribe(
        response => {
          this.dialogRef.close(response);  // Fecha o diálogo e envia a resposta
        },
      );
    } else {
      alert('Preencha todos os campos antes de salvar.'); // Validação simples
    }
  }
  

  cancel() {
    this.dialogRef.close(); // Fecha o diálogo sem salvar
  }

  

}
