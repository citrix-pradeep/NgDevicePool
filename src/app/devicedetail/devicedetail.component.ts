import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DeviceDetail } from './../models/deviceDetail.model';

@Component({
  selector: 'app-devicedetail',
  templateUrl: './devicedetail.component.html',
  styleUrls: ['./devicedetail.component.scss']
})
export class DevicedetailComponent implements OnInit {
  deviceDetail: DeviceDetail; 
  constructor() { }

  ngOnInit() {
    this.deviceDetail = new DeviceDetail("00FCAB","58DC","NA","540", "02.09",new Date(), new Date());
  }

}
