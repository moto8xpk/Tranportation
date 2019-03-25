import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-nactivity',
  templateUrl: './club-nactivity.component.html',
  styleUrls: ['./club-nactivity.component.css']
})
export class ClubNActivityComponent implements OnInit {

  dtOptions: DataTables.Settings = {};


  data = [
    { index: 1, clubCode: 'Basket', clubName: 'Hydrogen', clubType: 0 },
    { index: 2, clubCode: 'Soccer', clubName: 'Kim', clubType: 1 },
    { index: 3, clubCode: 'Badminton', clubName: 'Hydrogen', clubType: 2 },
    { index: 4, clubCode: 'Volleyball', clubName: 'Jerry', clubType: 3 },
    { index: 5, clubCode: 'Dance', clubName: 'Hydrogen', clubType: 4 },
    { index: 6, clubCode: 'Sumo', clubName: 'Ran', clubType: 5 },
    { index: 7, clubCode: 'Swimming', clubName: 'Hydrogen', clubType: 2 },
    { index: 8, clubCode: 'Technology', clubName: 'Edokawa', clubType: 5 },
    { index: 9, clubCode: 'Fly', clubName: 'Hasha', clubType: 2 },
    { index: 10, clubCode: 'Costplay', clubName: 'Kevin', clubType: 3 },
    { index: 11, clubCode: 'Cooking', clubName: 'Edwin', clubType: 1 },
    { index: 12, clubCode: 'Philosophy', clubName: 'Robin', clubType: 2 }
  ];

  data2=[
    { index: 1, studentCode: 'Basket', studentName: 'Hydrogen',nickName:'chichi', class: '1/1' },
      { index: 2, studentCode: 'Soccer', studentName: 'Kim',nickName:'chichi', class: '1/2' },
      { index: 3, studentCode: 'Badminton', studentName: 'Hydrogen',nickName:'chichi', class: '1/2' },
      { index: 4, studentCode: 'Volleyball', studentName: 'Jerry',nickName:'chichi', class: '1/3' },
      { index: 5, studentCode: 'Dance', studentName: 'Hydrogen',nickName:'chichi', class: '1/4' },
      { index: 6, studentCode: 'Sumo', studentName: 'Ran',nickName:'chichi', class: '1/5' },
      { index: 7, studentCode: 'Swimming', studentName: 'Hydrogen',nickName:'chichi', class: '1/2' },
      { index: 8, studentCode: 'Technology', studentName: 'Edokawa',nickName:'chichi', class: '1/5' },
      { index: 9, studentCode: 'Fly', studentName: 'Hasha',nickName:'chichi', class: '1/2' },
      { index: 10, studentCode: 'Costplay', studentName: 'Kevin',nickName:'chichi', class: '1/3' },
      { index: 11, studentCode: 'Cooking', studentName: 'Edwin',nickName:'chichi', class: '1/1' },
      { index: 12, studentCode: 'Philosophy', studentName: 'Robin',nickName:'chichi', class: '1/2' }
  ];

  constructor() { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      ordering: true,
      retrieve: true,
      autoWidth: true
    };
  }

}
