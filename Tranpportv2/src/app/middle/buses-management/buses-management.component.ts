import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tranport } from './../../../model/Trainport.model';
import { from } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-buses-management',
  templateUrl: './buses-management.component.html',
  styleUrls: ['./buses-management.component.css']
})
export class BusesManagementComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  tranport: Tranport[] = [];
  // dtTrigger: Subject<Tranport> = new Subject();
  data: any;
  constructor(private translate: TranslateService) {
    
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      ordering: true,
      retrieve: true,
      autoWidth: true
    };
    this.data = [
      { Chieu: 1, sttChieuDi: 1, sttChieuVe: 1},
      { Chieu: 2, sttChieuDi: 2, sttChieuVe: 4},
      { Chieu: 3, sttChieuDi: 3, sttChieuVe: 6},
      { Chieu: 1, sttChieuDi: 4, sttChieuVe: 9},
      { Chieu: 2, sttChieuDi: 5, sttChieuVe: 10},
      { Chieu: 2, sttChieuDi: 6, sttChieuVe: 12},
      { Chieu: 3, sttChieuDi: 7, sttChieuVe: 14},
      { Chieu: 1, sttChieuDi: 8, sttChieuVe: 15},
      { Chieu: 1, sttChieuDi: 9, sttChieuVe: 18},
      { Chieu: 1, sttChieuDi: 10, sttChieuVe: 20},
      { Chieu: 1, sttChieuDi: 1, sttChieuVe: 1},
      { Chieu: 2, sttChieuDi: 2, sttChieuVe: 4},
      { Chieu: 3, sttChieuDi: 3, sttChieuVe: 6},
      { Chieu: 2, sttChieuDi: 4, sttChieuVe: 9},
      { Chieu: 2, sttChieuDi: 5, sttChieuVe: 10},
      { Chieu: 2, sttChieuDi: 6, sttChieuVe: 12},
      { Chieu: 2, sttChieuDi: 7, sttChieuVe: 14},
      { Chieu: 3, sttChieuDi: 8, sttChieuVe: 15},
      { Chieu: 3, sttChieuDi: 9, sttChieuVe: 18},
      { Chieu: 3, sttChieuDi: 10, sttChieuVe: 20},
    ];
    // this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    // this.dtTrigger.unsubscribe();
  }

}
