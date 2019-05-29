import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceDetail } from '../models/deviceDetail.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DevicePoolService {  
  baseURL = "http://ie3pvw020/NgdevicePool/"
  constructor(private http : HttpClient) {

   }

   getDeviceAsync() : Observable<DeviceDetail> {
    return this.http.get<DeviceDetail>(this.baseURL + "api/device");
  }

  updateDevice(DeviceDetail) : Observable<any>{
    return this.http.put<any>(this.baseURL + "api/device?macId=" + DeviceDetail.macId, DeviceDetail);
  } 

  deleteDevice(macId : string) : Observable<any>{
    return this.http.delete<any>(this.baseURL + "api/device?macId=" + macId );
  }
}
