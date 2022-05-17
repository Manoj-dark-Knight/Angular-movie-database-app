import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../Models/Movie';
import { IMAGES_SIZES } from "../Constants/image-sizes"; //its a value not a interface nor a model
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() itemData: Movie | any = null;
  @Input() imgSize =  IMAGES_SIZES;
  constructor() { }

  ngOnInit(): void {
  }

}
