import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Tranport } from './../../../model/BusOject.model';
import { NgSelectConfig, NgOption } from '@ng-select/ng-select';
import { NgbCalendar, NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-notice-change',
  templateUrl: './notice-change.component.html',
  styleUrls: ['./notice-change.component.css']
})
export class NoticeChangeComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  model = new Tranport();
  // model = new CustomerConfirm();
  submitted = false;
  noticeChangeForm: FormGroup;

  rules: any[] = ['R0', 'R1'];
  tansuat: any[] = ['F0', 'F1', 'F2', 'F3'];
  tacdong: any[] = ['EF0', 'EF1', 'EF2', 'EF3', 'EF4'];
  activitiestacdong: any[] = ['ASA', 'Ngoại khóa', 'Game', 'Practice', 'Học chính quy'];
  loaiDoituong: any[] = ['Học sinh', 'Giáo viên', 'Tài xế', 'Giáo Vụ'];
  lopHoc: string = '12A14'
  idDoiTuong: string = 'HDH123'
  triggerOjectForShowWeek: string;
  daysOfWeek: any = [
    { date: 'Monday', checked: false },
    { date: 'Tuesday', checked: false },
    { date: 'Wednesday', checked: false },
    { date: 'Thusday', checked: false },
    { date: 'Friday', checked: false },
    { date: 'Satuday', checked: false },
    { date: 'Sunday', checked: false }];
  dataForTable: any[] = [
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, },
    { idDt: 'HDH01', loaidt: 'Học sinh', loaiRule: 'R0', loaiTanSuat: 'F1', tacDong: 'EF0', activitiesTD: 'ASA', dateStart: '2018/01/19', dateEnd: '2018/01/23', timeStart: '05:11 pm', timeEnd: '07:15 pm', date: 'Monday', checked: false, }
  ]

  modelDate: NgbDateStruct;
  modelDate2: NgbDateStruct;
  modelTime: any;

  labelPosition1 = 'R0';
  labelPosition2 = 'F0';
  labelPosition3 = 'EF0';
  labelPosition4 = 'ASA';
  item1: boolean = true;
  item2: boolean = false;


  constructor(private calendar: NgbCalendar, config: NgbDatepickerConfig, private config1: NgSelectConfig) {
    this.config1.notFoundText = 'Custom not found';

    this.setToday();
    const currentDate = new Date();
    config.outsideDays = "hidden";
    config.startDate = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 };
    config.minDate = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1, day: currentDate.getDate() };
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      ordering: true,
      retrieve: true,
      autoWidth: true
    };
  }

  setToday() {
    this.modelDate = this.calendar.getToday();
    this.modelDate2 = this.calendar.getToday();
  }

  getTime() {
    console.log(this.modelTime);
  }

}
