import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-duplicated-acitivity',
  templateUrl: './edit-duplicated-acitivity.component.html',
  styleUrls: ['./edit-duplicated-acitivity.component.css']
})
export class EditDuplicatedAcitivityComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  checked = false;
  data2=[
    { index: 1, studentCode: 'Basket', studentName: 'Hydrogen',nickName:'chichi', class: '1/1',act1:false,act2:false,time1:false,time2:false,time3:true },
      { index: 2, studentCode: 'Soccer', studentName: 'Kim',nickName:'chichi', class: '1/2',act1:false,act2:false,time1:false,time2:false,time3:true },
      { index: 3, studentCode: 'Badminton', studentName: 'Hydrogen',nickName:'chichi', class: '1/2',act1:false,act2:false,time1:false,time2:false,time3:true },
      { index: 4, studentCode: 'Volleyball', studentName: 'Jerry',nickName:'chichi', class: '1/3',act1:false,act2:false,time1:false,time2:false,time3:true },
      { index: 5, studentCode: 'Dance', studentName: 'Hydrogen',nickName:'chichi', class: '1/4',act1:false,act2:false,time1:false,time2:false,time3:true },
      { index: 6, studentCode: 'Sumo', studentName: 'Ran',nickName:'chichi', class: '1/5',act1:false,act2:false,time1:false,time2:false,time3:true },
      { index: 7, studentCode: 'Swimming', studentName: 'Hydrogen',nickName:'chichi', class: '1/2',act1:false,act2:false,time1:false,time2:false,time3:true },
      { index: 8, studentCode: 'Technology', studentName: 'Edokawa',nickName:'chichi', class: '1/5',act1:false,act2:false,time1:false,time2:false,time3:true },
      { index: 9, studentCode: 'Fly', studentName: 'Hasha',nickName:'chichi', class: '1/2',act1:false,act2:false,time1:false,time2:false,time3:true },
      { index: 10, studentCode: 'Costplay', studentName: 'Kevin',nickName:'chichi', class: '1/3',act1:false,act2:false,time1:false,time2:false,time3:true },
      { index: 11, studentCode: 'Cooking', studentName: 'Edwin',nickName:'chichi', class: '1/1',act1:false,act2:false,time1:false,time2:false,time3:true },
      { index: 12, studentCode: 'Philosophy', studentName: 'Robin',nickName:'chichi', class: '1/2',act1:false,act2:false,time1:false,time2:false,time3:true }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      ordering: true,
      retrieve: true,
      autoWidth: true
    };
  }

}
