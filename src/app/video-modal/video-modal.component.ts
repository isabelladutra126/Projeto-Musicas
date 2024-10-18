import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent {
  videoUrl: SafeResourceUrl; // Agora é do tipo SafeResourceUrl

  constructor(
    public dialogRef: MatDialogRef<VideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { videoUrl: string },
    private sanitizer: DomSanitizer // Injeta o DomSanitizer
  ) {
    // Sanitiza a URL do vídeo recebida
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.videoUrl);
  }

  onClose(): void {
    this.dialogRef.close(); // Método para fechar o modal
  }
}

