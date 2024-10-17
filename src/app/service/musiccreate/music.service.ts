import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Music } from 'src/app/components/music-create/music.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMsg(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })}
  
  create(music: Music){

  }

  }

 