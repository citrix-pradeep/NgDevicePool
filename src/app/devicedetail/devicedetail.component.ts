import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { DeviceDetail, NewDeviceRequest, DeviceType } from './../models/deviceDetail.model';
import { DevicePoolService } from '../services/device-pool.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-devicedetail',
  templateUrl: './devicedetail.component.html',
  styleUrls: ['./devicedetail.component.scss']
})
export class DevicedetailComponent implements OnInit {
  deviceDetail: DeviceDetail; 
  newDevice: NewDeviceRequest;
  buttonText: string;
  fb: FormGroup;
  constructor(private devicepoolservice : DevicePoolService,
    public dialogRef: MatDialogRef<DevicedetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeviceDetail | string) {
      debugger;
      if(data === undefined || data === "")  {
        this.buttonText = "Add Device"
        this.fb = new FormGroup({
          MacId: new FormControl(""),
          CRC: new FormControl(""),
          DeviceType: new FormControl("")
        });
      } else {
        this.deviceDetail = data as DeviceDetail;
        this.fb = new FormGroup({
          MacId: new FormControl(""),
          CRC: new FormControl(""),
          DeviceType: new FormControl("")
        });
        this.buttonText = "Update Device"
      }
    }

  ngOnInit() {
    
  }

  SaveDevice() {
    if(this.buttonText === "Add Device") {
      this.newDevice = new NewDeviceRequest();
      this.newDevice.MacId = this.fb.controls.MacId.value;
      this.newDevice.CRC = this.fb.controls.CRC.value;
      this.newDevice.DeviceType = this.fb.controls.DeviceType.value;
      this.devicepoolservice.addDevice(this.newDevice).subscribe(result => console.log(result));
    } else {
    this.devicepoolservice.updateDevice(this.deviceDetail).subscribe(result => console.log(result));
    }
  }

  DeleteDevice() {
   this.devicepoolservice.deleteDevice(this.deviceDetail.MacId).subscribe(result => console.log(result))
  }

}
