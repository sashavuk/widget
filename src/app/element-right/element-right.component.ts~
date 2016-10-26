import { Component, OnInit } from '@angular/core';
import {DataForWidget } from '../data-for-widget';

@Component({
  selector: 'element-right',
  templateUrl: './element-right.component.html',
  styleUrls: ['./element-right.component.css']
})
export class ElementRightComponent implements OnInit {
  private my_temp;
			private my_water;
			private my_followers;
			private my_following;
   constructor(private dataforwidget:DataForWidget) {
    this.my_temp = dataforwidget.temp_to_send;
    this.my_water= dataforwidget.water_to_send;
    this.my_followers= dataforwidget.followers_to_send;
    this.my_following= dataforwidget.following_to_send;
  }

  ngOnInit() {
  }

}
