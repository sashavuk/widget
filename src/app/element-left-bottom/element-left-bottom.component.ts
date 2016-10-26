import { Component, OnInit } from '@angular/core';
import {DataForWidget } from '../data-for-widget';

@Component({
  selector: 'element-left-bottom',
  templateUrl: './element-left-bottom.component.html',
  styleUrls: ['./element-left-bottom.component.css']
})
export class ElementLeftBottomComponent implements OnInit {
//	selected = 'Hotel One';
	private selected;
	//private dataforwidget:DataForWidget;
	private resortName;
	private Address1;
	private Address2;
	private my_tel;
	private my_places:string[];
	private my_hotels:string[];
  constructor(private dataforwidget:DataForWidget) {
	   this.selected = dataforwidget.HotelOne[0];
	   this.my_hotels = [dataforwidget.HotelOne[0],dataforwidget.HotelTwo[0],dataforwidget.HotelThree[0]];
	   this.my_places = dataforwidget.places_to_send; 
        switch(this.selected){
			 case this.my_hotels[0]: [this.resortName,this.Address1,this.Address2,this.my_tel] = dataforwidget.HotelOne;
		//console.info('resortName',this.resortName);
		break;
				case this.my_hotels[1]: [this.resortName,this.Address1,this.Address2,this.my_tel] = dataforwidget.HotelTwo;
	//	console.info('resortName',this.resortName);
		break;
				case this.my_hotels[2]: [this.resortName,this.Address1,this.Address2,this.my_tel] = dataforwidget.HotelThree;
	//	console.info('resortName',this.resortName);
	  }
  }
  onSelectedChange(event){
	console.info('event = ', event,this.dataforwidget);
	        switch(event){
			 case this.my_hotels[0]: [this.resortName,this.Address1,this.Address2,this.my_tel] = this.dataforwidget.HotelOne;
		//console.info('resortName',this.resortName);
		break;
				case this.my_hotels[1]: [this.resortName,this.Address1,this.Address2,this.my_tel] = this.dataforwidget.HotelTwo;
	//	console.info('resortName',this.resortName);
		break;
				case this.my_hotels[2]: [this.resortName,this.Address1,this.Address2,this.my_tel] = this.dataforwidget.HotelThree;
	//	console.info('resortName',this.resortName)
    }/**/
 }

  ngOnInit() {
  }

}
