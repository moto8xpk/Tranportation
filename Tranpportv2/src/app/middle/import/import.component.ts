import { Component, OnInit } from '@angular/core';
import { NgSelectConfig, NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  eventOnselectImage: any;
  list:string[]=['csv','xstl','text','xml','json'];
  constructor(private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
  }

  ngOnInit() {
  }

  onSelectFile(event) {
    this.eventOnselectImage = event;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        // console.log(event)
        // this.url = event.target.result;
        // this.url = String(reader.result);
      }
    }
  }
}
