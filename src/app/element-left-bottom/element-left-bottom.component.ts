import { Component, OnInit } from '@angular/core';
import {DataForWidget } from '../data-for-widget';

@Component({
  selector: 'element-left-bottom',
  templateUrl: './element-left-bottom.component.html',
  styleUrls: ['./element-left-bottom.component.css']
})
export class ElementLeftBottomComponent implements OnInit {
	selected = 'Hotel Two';
	private my_tel;
	private my_places:string[] = ['Hotel','Fishing','Tours'];
	private my_hotels:string[] = ['Hotel One','Hotel Two','Hotel Three'];
  constructor(private dataforwidget:DataForWidget) {
	
  this.my_tel = dataforwidget.tel_to_send;	
  }
  onSelectedChange(event){
	console.info('event = ', event);
  }

  ngOnInit() {
  }

}
