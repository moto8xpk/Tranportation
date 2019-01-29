import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { Tranport } from './../../../model/Trainport.model';
import { from } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { NgSelectConfig, NgOption } from '@ng-select/ng-select';
import { TabsetComponent } from 'ngx-bootstrap';
import { Router } from "@angular/router";
import { BusInfomationService } from './../../../service/bus-infomation.service';

@Component({
  selector: 'app-auto-setup',
  templateUrl: './auto-setup.component.html',
  styleUrls: ['./auto-setup.component.css']
})
export class AutoSetupComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  tranport: Tranport[] = [];
  // dtTrigger: Subject<Tranport> = new Subject();
  data: any;
  data2: any;
  dataHS: any;
  tableData = [];
  testData:any;

  photos = [];
  bufferSize = 50;
  loading = false;
  numberOfItemsFromEndBeforeFetchingMore = 10;

  constructor(private config: NgSelectConfig, private router: Router, private busInformationService: BusInfomationService) {
    this.config.notFoundText = 'Custom not found';
  }

  ngOnInit() {

    this.busInformationService.getTestData()
    .subscribe(data=>{
      this.testData=data;
    },error=>console.log(error));

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      ordering: true,
      retrieve: true,
      autoWidth: true
    };
    this.data = [
      { Id: '1', TuyenXe: 1, MaXe: 1, SoLuongHS: 1, GiaoVu: 'H', TaiXe: 'Hydrogen', time: '07:30AM', IdBus: 1, timeStart: '2018-08-28' },
      { Id: '2', TuyenXe: 2, MaXe: 2, SoLuongHS: 4, GiaoVu: 'He', TaiXe: 'Hydrogen', time: '07:30AM', IdBus: 2, timeStart: '2018-08-28' },
      { Id: '3', TuyenXe: 3, MaXe: 3, SoLuongHS: 6, GiaoVu: 'Li', TaiXe: 'Hydrogen', time: '08:30AM', IdBus: 3, timeStart: '2018-08-29' },
      { Id: '4', TuyenXe: 4, MaXe: 4, SoLuongHS: 9, GiaoVu: 'Be', TaiXe: 'Hydrogen', time: '09:30AM', IdBus: 4, timeStart: '2018-08-30' },
      { Id: '5', TuyenXe: 5, MaXe: 5, SoLuongHS: 10, GiaoVu: 'B', TaiXe: 'Hydrogen', time: '10:30AM', IdBus: 5, timeStart: '2018-08-10' },
      { Id: '6', TuyenXe: 6, MaXe: 6, SoLuongHS: 12, GiaoVu: 'C', TaiXe: 'Hydrogen', time: '11:30AM', IdBus: 6, timeStart: '2018-08-11' },
      { Id: '7', TuyenXe: 7, MaXe: 7, SoLuongHS: 14, GiaoVu: 'N', TaiXe: 'Hydrogen', time: '00:00PM', IdBus: 11, timeStart: '2018-08-28' },
      { Id: '8', TuyenXe: 8, MaXe: 8, SoLuongHS: 15, GiaoVu: 'O', TaiXe: 'Hydrogen', time: '3:30PM', IdBus: 2, timeStart: '2018-08-28' },
      { Id: '9', TuyenXe: 9, MaXe: 9, SoLuongHS: 18, GiaoVu: 'F', TaiXe: 'Hydrogen', time: '4:30PM', IdBus: 3, timeStart: '2018-08-28' },
      { Id: '0', TuyenXe: 10, MaXe: 10, SoLuongHS: 20, GiaoVu: 'Ne', TaiXe: 'Hydrogen', time: '5:30AM', IdBus: 1, timeStart: '2018-08-28' },
      { Id: '1', TuyenXe: 1, MaXe: 1, SoLuongHS: 1, GiaoVu: 'H', TaiXe: 'Hydrogen', time: '6:30PM', IdBus: 21, timeStart: '2018-08-28' },
      { Id: '2', TuyenXe: 2, MaXe: 2, SoLuongHS: 4, GiaoVu: 'He', TaiXe: 'Hydrogen', time: '7:30PM', IdBus: 13, timeStart: '2018-08-28' },
      { Id: '3', TuyenXe: 3, MaXe: 3, SoLuongHS: 6, GiaoVu: 'Li', TaiXe: 'Hydrogen', time: '8:30PM', IdBus: 14, timeStart: '2018-08-28' },
      { Id: '4', TuyenXe: 4, MaXe: 4, SoLuongHS: 9, GiaoVu: 'Be', TaiXe: 'Hydrogen', time: '9:30AM', IdBus: 15, timeStart: '2018-08-28' },
      { Id: '5', TuyenXe: 5, MaXe: 5, SoLuongHS: 10, GiaoVu: 'B', TaiXe: 'Hydrogen', time: '2:30PM', IdBus: 17, timeStart: '2018-08-28' },
      { Id: '2', TuyenXe: 6, MaXe: 6, SoLuongHS: 12, GiaoVu: 'C', TaiXe: 'Hydrogen', time: '2:30AM', IdBus: 16, timeStart: '2018-08-28' },
      { Id: '3', TuyenXe: 7, MaXe: 7, SoLuongHS: 14, GiaoVu: 'N', TaiXe: 'Hydrogen', time: '5:30PM', IdBus: 19, timeStart: '2018-08-28' },
      { Id: '1', TuyenXe: 8, MaXe: 8, SoLuongHS: 15, GiaoVu: 'O', TaiXe: 'Hydrogen', time: '2:30PM', IdBus: 11, timeStart: '2018-08-28' },
      { Id: '1', TuyenXe: 9, MaXe: 9, SoLuongHS: 18, GiaoVu: 'F', TaiXe: 'Hydrogen', time: '4:30AM', IdBus: 12, timeStart: '2018-08-28' },
      { Id: '3', TuyenXe: 10, MaXe: 10, SoLuongHS: 20, GiaoVu: 'Ne', TaiXe: 'Hydrogen', time: '8:30AM', IdBus: 13, timeStart: '2018-08-28' },
      { Id: '5', TuyenXe: 1, MaXe: 1, SoLuongHS: 1, GiaoVu: 'H', TaiXe: 'Hydrogen', time: '09:30AM', IdBus: 11, timeStart: '2018-08-28' },
      { Id: '16', TuyenXe: 2, MaXe: 2, SoLuongHS: 4, GiaoVu: 'He', TaiXe: 'Hydrogen', time: '07:30AM', IdBus: 112, timeStart: '2018-08-28' },
      { Id: '11', TuyenXe: 3, MaXe: 3, SoLuongHS: 6, GiaoVu: 'Li', TaiXe: 'Hydrogen', time: '07:30AM', IdBus: 11, timeStart: '2018-08-28' },
      { Id: '12', TuyenXe: 4, MaXe: 4, SoLuongHS: 9, GiaoVu: 'Be', TaiXe: 'Hydrogen', time: '07:30AM', IdBus: 112, timeStart: '2018-08-28' }
    ];
    this.data2 = [
      { TuyenXe: 1, MaXe: 1, SoLuongHS: 1, GiaoVu: 'H', TaiXe: 'Hydrogen' },
      { TuyenXe: 2, MaXe: 2, SoLuongHS: 4, GiaoVu: 'He', TaiXe: 'Hydrogen' },
      { TuyenXe: 3, MaXe: 3, SoLuongHS: 6, GiaoVu: 'Li', TaiXe: 'Hydrogen' },
      { TuyenXe: 4, MaXe: 4, SoLuongHS: 9, GiaoVu: 'Be', TaiXe: 'Hydrogen' },
      { TuyenXe: 5, MaXe: 5, SoLuongHS: 10, GiaoVu: 'B', TaiXe: 'Hydrogen' },
      { TuyenXe: 6, MaXe: 6, SoLuongHS: 12, GiaoVu: 'C', TaiXe: 'Hydrogen' },
      { TuyenXe: 7, MaXe: 7, SoLuongHS: 14, GiaoVu: 'N', TaiXe: 'Hydrogen' },
      { TuyenXe: 8, MaXe: 8, SoLuongHS: 15, GiaoVu: 'O', TaiXe: 'Hydrogen' },
      { TuyenXe: 9, MaXe: 9, SoLuongHS: 18, GiaoVu: 'F', TaiXe: 'Hydrogen' },
      { TuyenXe: 10, MaXe: 10, SoLuongHS: 20, GiaoVu: 'Ne', TaiXe: 'Hydrogen' },
      { TuyenXe: 1, MaXe: 1, SoLuongHS: 1, GiaoVu: 'H', TaiXe: 'Hydrogen' },
      { TuyenXe: 2, MaXe: 2, SoLuongHS: 4, GiaoVu: 'He', TaiXe: 'Hydrogen' },
      { TuyenXe: 3, MaXe: 3, SoLuongHS: 6, GiaoVu: 'Li', TaiXe: 'Hydrogen' },
      { TuyenXe: 4, MaXe: 4, SoLuongHS: 9, GiaoVu: 'Be', TaiXe: 'Hydrogen' },
      { TuyenXe: 5, MaXe: 5, SoLuongHS: 10, GiaoVu: 'B', TaiXe: 'Hydrogen' },
      { TuyenXe: 6, MaXe: 6, SoLuongHS: 12, GiaoVu: 'C', TaiXe: 'Hydrogen' },
      { TuyenXe: 7, MaXe: 7, SoLuongHS: 14, GiaoVu: 'N', TaiXe: 'Hydrogen' },
      { TuyenXe: 8, MaXe: 8, SoLuongHS: 15, GiaoVu: 'O', TaiXe: 'Hydrogen' },
      { TuyenXe: 9, MaXe: 9, SoLuongHS: 18, GiaoVu: 'F', TaiXe: 'Hydrogen' },
      { TuyenXe: 10, MaXe: 10, SoLuongHS: 20, GiaoVu: 'Ne', TaiXe: 'Hydrogen' },
      { TuyenXe: 1, MaXe: 1, SoLuongHS: 1, GiaoVu: 'H', TaiXe: 'Hydrogen' },
      { TuyenXe: 2, MaXe: 2, SoLuongHS: 4, GiaoVu: 'He', TaiXe: 'Hydrogen' },
      { TuyenXe: 5, MaXe: 5, SoLuongHS: 10, GiaoVu: 'B', TaiXe: 'Hydrogen' },
      { TuyenXe: 6, MaXe: 6, SoLuongHS: 12, GiaoVu: 'C', TaiXe: 'Hydrogen' },
      { TuyenXe: 7, MaXe: 7, SoLuongHS: 14, GiaoVu: 'N', TaiXe: 'Hydrogen' },
      { TuyenXe: 8, MaXe: 8, SoLuongHS: 15, GiaoVu: 'O', TaiXe: 'Hydrogen' },
      { TuyenXe: 9, MaXe: 9, SoLuongHS: 18, GiaoVu: 'F', TaiXe: 'Hydrogen' },
      { TuyenXe: 10, MaXe: 10, SoLuongHS: 20, GiaoVu: 'Ne', TaiXe: 'Hydrogen' },
      { TuyenXe: 1, MaXe: 1, SoLuongHS: 1, GiaoVu: 'H', TaiXe: 'Hydrogen' },
      { TuyenXe: 2, MaXe: 2, SoLuongHS: 4, GiaoVu: 'He', TaiXe: 'Hydrogen' },
      { TuyenXe: 5, MaXe: 5, SoLuongHS: 10, GiaoVu: 'B', TaiXe: 'Hydrogen' },
      { TuyenXe: 6, MaXe: 6, SoLuongHS: 12, GiaoVu: 'C', TaiXe: 'Hydrogen' },
      { TuyenXe: 7, MaXe: 7, SoLuongHS: 14, GiaoVu: 'N', TaiXe: 'Hydrogen' },
      { TuyenXe: 8, MaXe: 8, SoLuongHS: 15, GiaoVu: 'O', TaiXe: 'Hydrogen' },
      { TuyenXe: 9, MaXe: 9, SoLuongHS: 18, GiaoVu: 'F', TaiXe: 'Hydrogen' },
      { TuyenXe: 10, MaXe: 10, SoLuongHS: 20, GiaoVu: 'Ne', TaiXe: 'Hydrogen' },
      { TuyenXe: 1, MaXe: 1, SoLuongHS: 1, GiaoVu: 'H', TaiXe: 'Hydrogen' },
      { TuyenXe: 2, MaXe: 2, SoLuongHS: 4, GiaoVu: 'He', TaiXe: 'Hydrogen' },
      { TuyenXe: 3, MaXe: 3, SoLuongHS: 6, GiaoVu: 'Li', TaiXe: 'Hydrogen' },
      { TuyenXe: 4, MaXe: 4, SoLuongHS: 9, GiaoVu: 'Be', TaiXe: 'Hydrogen' }
    ];
    this.dataHS = [
      { TuyenXe: 1, MaXe: 4, TenHS: 'Hydrogen', TrangThai: 0 },
      { TuyenXe: 2, MaXe: 3, TenHS: 'Kim', TrangThai: 1 },
      { TuyenXe: 3, MaXe: 5, TenHS: 'Hydrogen', TrangThai: 2 },
      { TuyenXe: 4, MaXe: 1, TenHS: 'Jerry', TrangThai: 3 },
      { TuyenXe: 5, MaXe: 2, TenHS: 'Hydrogen', TrangThai: 4 },
      { TuyenXe: 6, MaXe: 6, TenHS: 'Ran', TrangThai: 5 },
      { TuyenXe: 7, MaXe: 7, TenHS: 'Hydrogen', TrangThai: 2 },
      { TuyenXe: 8, MaXe: 5, TenHS: 'Edokawa', TrangThai: 5 },
      { TuyenXe: 9, MaXe: 3, TenHS: 'Hasha', TrangThai: 2 },
      { TuyenXe: 10, MaXe: 4, TenHS: 'Kevin', TrangThai: 3 },
      { TuyenXe: 11, MaXe: 1, TenHS: 'Edwin', TrangThai: 1 },
      { TuyenXe: 12, MaXe: 2, TenHS: 'Robin', TrangThai: 2 }
    ];


  }

  changeTabDetailList() {
    this.router.navigate(['/tranport/detail-list']);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    // this.dtTrigger.unsubscribe();
  }
}
