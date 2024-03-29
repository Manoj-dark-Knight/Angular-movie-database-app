import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {

  @Input() key: string | null = null;
  @Input() site: string = "YouTube";

  videoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.videoUrl = this.getSafeURL('https://www.youtube.com/embed/' + this.key);
  }

  getSafeURL(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
