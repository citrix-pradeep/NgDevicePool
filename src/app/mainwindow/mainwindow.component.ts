import { DeviceDetail } from './../models/deviceDetail.model';
import { Component, OnInit } from '@angular/core';
import { DevicePoolService } from '../services/device-pool.service';

export interface Food {
  value: string;
  viewValue: string;
}
const ELEMENT_DATA: DeviceDetail[] = [
  new DeviceDetail('00d02d64fcab','3455','NADevice','530','12133',new Date(),new Date()),
  new DeviceDetail('00d02d64FCB1','3444','NADevice','530','144433',new Date(),new Date()),
 ];

@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.scss']
})
export class MainwindowComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  displayedColumns: string[] = ['MacId', 'DeviceType', 'OsIndex', 'LastUpdated'];
  dataSource:any;

  
  
  constructor(private devicepoolService : DevicePoolService) { 
  
  }
  ngOnInit() {
    this.devicepoolService.getDeviceAsync().subscribe(data => {
      
      this.dataSource = data;

    })
  }


}
