import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DeviceDetail } from './../models/deviceDetail.model';

@Component({
  selector: 'app-devicedetail',
  templateUrl: './devicedetail.component.html',
  styleUrls: ['./devicedetail.component.scss']
})
export class DevicedetailComponent implements OnInit {
  deviceDetail: DeviceDetail = new DeviceDetail();  
  constructor() { }

  ngOnInit() {
    this.deviceDetail.MacId = "00FCAB";
    this.deviceDetail.CRC = "58DC";
    this.deviceDetail.DeviceType = "NA";
    this.deviceDetail.OSIndex = "540";
    this.deviceDetail.SoftwareVersion = "02.09";
    this.deviceDetail.Status = ["Offline","Online"];
  }

}
