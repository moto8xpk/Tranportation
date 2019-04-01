import { Component, OnInit, Input } from '@angular/core';
import { NgSelectConfig, NgOption } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  @Input()
  checked: Boolean 
  
  eventOnselectImage: any;
  list:string[]=['Hoạt động - Activity ','Game','Ngoại khóa','Danh Sách Tham Gia Hoạt Động','Danh sách Học Sinh '];
  listFile:string[]=['Text Data','File'];
  // data:any="";
  checkedData = 'Text Data';

  typeOfImportData:Boolean=true;

  constructor(private config: NgSelectConfig,private translate: TranslateService) {
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

  radioChange(event: MatRadioChange) {
    // this.filter['property'] = event.value;
    if (typeof(event.value)!=null) {
      if (event.value==this.listFile[0]) {
        this.typeOfImportData=true;
        console.log(1);
      }
      else{
        this.typeOfImportData=false;
        console.log(2);
      }
    } 
    console.log(event.value);
}
}
