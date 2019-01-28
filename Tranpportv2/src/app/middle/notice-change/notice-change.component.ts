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

  model = new Tranport();
  // model = new CustomerConfirm();
  submitted = false;
  noticeChangeForm: FormGroup;

  rules: any[] = ['R0', 'R1'];
  tansuat: any[] = ['F0', 'F1', 'F2', 'F3'];
  tacdong: any[] = ['EF0', 'EF1', 'EF2', 'EF3', 'EF4'];
  activitiestacdong: any[] = ['ASA', 'Ngoại khóa', 'Game', 'Practice', 'Học chính quy'];

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

  }

  setToday() {
    this.modelDate = this.calendar.getToday();
    this.modelDate2 = this.calendar.getToday();
  }

  getTime() {
    console.log(this.modelTime);
  }

}
