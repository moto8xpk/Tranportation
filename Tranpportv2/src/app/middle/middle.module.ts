import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranportPageComponent } from './tranport-page/tranport-page.component';
import { UiModule } from '../ui/ui.module';
import { BusesManagementComponent } from './buses-management/buses-management.component';
import { AutoSetupComponent } from './auto-setup/auto-setup.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import { NoticeChangeComponent } from './notice-change/notice-change.component';
import { ImportComponent } from './import/import.component';
import { ReportComponent } from './report/report.component';
import { MaterialLibraryModule } from '../material-library/material-library.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { TabsModule } from 'ngx-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [TranportPageComponent, BusesManagementComponent, AutoSetupComponent, DetailListComponent, NoticeChangeComponent, ImportComponent, ReportComponent],
  imports: [
    TabsModule.forRoot(),
    CommonModule,
    UiModule,
    MaterialLibraryModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    DataTablesModule,
    AppRoutingModule,
    NgbModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  exports: [
    TranportPageComponent
  ]
})
export class MiddleModule { }
