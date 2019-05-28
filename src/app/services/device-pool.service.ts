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
  constructor(private http : HttpClient) {

   }

   getDeviceAsync() : Observable<DeviceDetail> {
     return this.http.get<DeviceDetail>("http://localhost:63714/api/device");
   }
}
