import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BusInfomationService {
  // route api mẫu của em
  private baseUrl = 'http://localhost:8080/api/BusInformations';

  private Uri='http://inobox.top/AIS/webAPIs/getAllBus.php?username=BaTu&token=21312321';


  constructor(private http: HttpClient) { }

  getTestData(): Observable<any> {
    return this.http.get(`${this.Uri}`);
  }

  getBusInformation(id: number): Observable<Object> {
    //`` cho phép nối chữ với nhau thầy vì nó trả về là một Object nên em ép kiểu nó về Object nếu ra một list thì em để any nó sẽ không bị lỗi
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }
 
  createBusInformation(BusInformation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, BusInformation,);
  }
  
  compareBusInformation(BusInformation: Object): Observable<Object> {
    // console.log(BusInformation);
    return this.http.post(`${this.baseUrl}` + `/user`, BusInformation,);
  }
 
  updateBusInformation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteBusInformation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getBusInformationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getBusInformationByLogging(user:Object): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${user}`);
  }
 
  getBusInformationsByPhone(phone: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/phone/${phone}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
