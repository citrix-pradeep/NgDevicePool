import { DeviceDetail } from './../models/deviceDetail.model';
import { Component, OnInit } from '@angular/core';
import { DevicePoolService } from '../services/device-pool.service';
import { MatDialog } from '@angular/material';
import { DevicedetailComponent } from '../devicedetail/devicedetail.component';




@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.scss']
})
export class MainwindowComponent implements OnInit { 

  displayedColumns: string[] = ['MacId', 'DeviceType', 'OsIndex', 'LastUpdated', 'Details'];
  dataSource:any;

  
  
  constructor(private devicepoolService: DevicePoolService,
    public dialog: MatDialog) { 
  
  }
  openDialog(deviceDetails: DeviceDetail): void {
    const dialogRef = this.dialog.open(DevicedetailComponent, {
      width: '800px',
      data: deviceDetails
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
    this.devicepoolService.getDeviceAsync().subscribe(data => {
      this.dataSource = data;
    })
  }


}
