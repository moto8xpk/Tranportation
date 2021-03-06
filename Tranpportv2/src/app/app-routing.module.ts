import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranportPageComponent } from './middle/tranport-page/tranport-page.component';
import { BusesManagementComponent } from './middle/buses-management/buses-management.component';
import { AutoSetupComponent } from './middle/auto-setup/auto-setup.component';
import { DetailListComponent } from './middle/detail-list/detail-list.component';
import { NoticeChangeComponent } from './middle/notice-change/notice-change.component';
import { ImportComponent } from './middle/import/import.component';
import { ReportComponent } from './middle/report/report.component';

const routes: Routes = [
  {
    path: 'tranport', component: TranportPageComponent, children: [
      { path: 'buses-management', component: BusesManagementComponent },
      { path: 'auto-setup', component: AutoSetupComponent },
      { path: 'detail-list', component: DetailListComponent },
      { path: 'notice-change', component: NoticeChangeComponent },
      { path: 'import', component: ImportComponent },
      { path: 'report', component: ReportComponent },
    ]
  },
  { path: '', redirectTo: '/tranport/buses-management', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
