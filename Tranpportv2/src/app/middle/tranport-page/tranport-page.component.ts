import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
@Component({
  selector: 'app-tranport-page',
  templateUrl: './tranport-page.component.html',
  styleUrls: ['./tranport-page.component.css']
})
export class TranportPageComponent implements OnInit {

  public tabList: any[];
  public currRoute: number = 0;

  constructor() { }

  ngOnInit() {
    this.tabList = [
      { id:0,link:'/tranport/buses-management',title:"Buses Management",disable:true, hid:true},
      { id: 1, link: '/tranport/auto-setup', title: "Auto Setup", disable: false, hid:false },
      { id: 2, link: '/tranport/detail-list', title: "Detail List", disable: false, hid:false },
      { id: 3, link: '/tranport/notice-change', title: "Notice Change", disable: false, hid:false },
      { id: 4, link: '/tranport/import', title: "Import", disable: false, hid:false },
      { id: 5, link: '/tranport/report', title: "Report", disable: false, hid:false },
    ]
  }

  public selectBtn(id: number) {

    this.tabList[this.currRoute].disable = false;
    this.currRoute = id;
    this.tabList[id].disable = true;
  }

}
