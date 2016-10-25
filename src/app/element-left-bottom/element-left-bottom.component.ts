import { Component, OnInit } from '@angular/core';
import {DataForWidget } from '../data-for-widget';

@Component({
  selector: 'element-left-bottom',
  templateUrl: './element-left-bottom.component.html',
  styleUrls: ['./element-left-bottom.component.css']
})
export class ElementLeftBottomComponent implements OnInit {
	private my_tel;
	//private data;

  constructor(private dataforwidget:DataForWidget) {

 	
  this.my_tel = dataforwidget.tel_to_send;	
  }


  ngOnInit() {
  }

}
