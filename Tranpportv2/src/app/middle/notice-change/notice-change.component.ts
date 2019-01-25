import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Tranport} from './../../../model/BusOject.model';
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

  constructor() { }

  ngOnInit() {
  }

}
