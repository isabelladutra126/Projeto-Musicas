import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Music } from 'src/app/components/music-create/music.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {


  baseUrl = "http://localhost:3000/musicas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMsg(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })}
  
  create(music: Music): Observable<Music> {
    return this.http.post<Music>(this.baseUrl, music)
  }

  read(): Observable<Music []> {
    return this.http.get<Music []>(this.baseUrl)
  }


  updateMusic(music: Music): Observable<Music>{
    const url = `${this.baseUrl}/${music.id}`;
    return this.http.put<Music>(url, music);
  }
  


  deleteMusic(id: string): Observable<void> { 
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url); // Mudando o tipo de retorno para void
  }


}