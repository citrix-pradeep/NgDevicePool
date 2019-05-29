import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DeviceDetail } from './../models/deviceDetail.model';
import { DevicePoolService } from '../services/device-pool.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-devicedetail',
  templateUrl: './devicedetail.component.html',
  styleUrls: ['./devicedetail.component.scss']
})
export class DevicedetailComponent implements OnInit {
  deviceDetail: DeviceDetail; 
  constructor(private devicepoolservice : DevicePoolService,
    public dialogRef: MatDialogRef<DevicedetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeviceDetail) {
      debugger;
      this.deviceDetail = data;
    }

  ngOnInit() {
    // this.deviceDetail = new DeviceDetail("00FCAB","58DC","NA","540", "02.09",new Date(), new Date());
    // this.deviceDetail.Status = ["Offline","Online","Offline","Online","Offline","Online","Offline","Online"];
  }

  UpdateDevice() {
  this.devicepoolservice.updateDevice(this.deviceDetail).subscribe(result => console.log(result))
  }

  DeleteDevice() {
   this.devicepoolservice.deleteDevice(this.deviceDetail.MacId).subscribe(result => console.log(result))
  }

}
