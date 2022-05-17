import { style, transition, animate, state, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../Models/Movie'
import { IMAGES_SIZES } from "../Constants/image-sizes";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition('void <=> *', [animate('1s')]),   
      
    ])
  ]
})
export class SliderComponent implements OnInit {

  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;
  readonly imgSize = IMAGES_SIZES;

  currentSliderIndex: number = 0;

  
  
  constructor() { }

  ngOnInit(): void {
    if(!this.isBanner){
      setInterval(()=>{
        this.currentSliderIndex = ++this.currentSliderIndex % this.items.length;
      }, 5000)
    }
    
    
  }
  

}
