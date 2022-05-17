import { Component, Input, OnInit } from '@angular/core';
import { tvShows } from 'src/app/Models/tv-shows';
import { Movie } from '../../Models/Movie';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent implements OnInit {

  @Input() items: Movie[] = [];
  @Input() title: String = '';
  @Input() tvShowItems: tvShows[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
