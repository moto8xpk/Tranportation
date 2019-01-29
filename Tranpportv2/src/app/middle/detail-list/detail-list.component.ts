import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { detail } from './../../../model/detail.model';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dataHS: any[];
  model: detail;
  submitted = false;
  DetailForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      ordering: true,
      retrieve: true,
      autoWidth: true
    };
    this.model = {
      tuyenXe: 1, maXe: 4, taiXe: 'Hydrogen', giaoVu: 'Kim', gio: '07:30AM'
    };
    this.dataHS = [
      { TuyenXe: 1, MaXe: 4, TenHS: 'Hydrogen', nickname: 'Peter', TrangThai: 0 },
      { TuyenXe: 2, MaXe: 3, TenHS: 'Kim', nickname: 'Peter', TrangThai: 1 },
      { TuyenXe: 3, MaXe: 5, TenHS: 'Hydrogen', nickname: 'Peter', TrangThai: 2 },
      { TuyenXe: 4, MaXe: 1, TenHS: 'Jerry', nickname: 'Peter', TrangThai: 3 },
      { TuyenXe: 5, MaXe: 2, TenHS: 'Hydrogen', nickname: 'Peter', TrangThai: 4 },
      { TuyenXe: 6, MaXe: 6, TenHS: 'Ran', nickname: 'Peter', TrangThai: 5 },
      { TuyenXe: 7, MaXe: 7, TenHS: 'Hydrogen', nickname: 'Peter', TrangThai: 2 },
      { TuyenXe: 8, MaXe: 5, TenHS: 'Edokawa', nickname: 'Peter', TrangThai: 5 },
      { TuyenXe: 9, MaXe: 3, TenHS: 'Hasha', nickname: 'Peter', TrangThai: 2 },
      { TuyenXe: 10, MaXe: 4, TenHS: 'Kevin', nickname: 'Peter', TrangThai: 3 },
      { TuyenXe: 11, MaXe: 1, TenHS: 'Edwin', nickname: 'Peter', TrangThai: 1 },
      { TuyenXe: 12, MaXe: 2, TenHS: 'Robin', nickname: 'Peter', TrangThai: 2 }
    ];
  }

}
