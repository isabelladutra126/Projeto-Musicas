import { Component, OnInit } from '@angular/core';
import { Music } from '../music-create/music.model';
import { MusicService } from 'src/app/service/musiccreate/music.service';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from 'src/app/video-modal/video-modal.component';

@Component({
  selector: 'app-music-read',
  templateUrl: './music-read.component.html',
  styleUrls: ['./music-read.component.css']
})
export class MusicReadComponent implements OnInit {
  musics: Music[] = [];
  displayedColumns = ['nome', 'autor', 'genero', 'link', 'action'];

  constructor(private musicService: MusicService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.musicService.read().subscribe(musics => {
      this.musics = musics;
      console.log(musics);
    });
  }

  openVideoModal(videoUrl: string): void {
    const videoId = this.getYouTubeVideoId(videoUrl);
    if (!videoId) {
      console.error('Video ID não encontrado');
      return;
    }
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    const dialogRef = this.dialog.open(VideoModalComponent, {
      data: { videoUrl: embedUrl } // Passa a URL formatada para o modal
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado');
    });
  }

  private getYouTubeVideoId(url: string): string {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : '';
  }
}
