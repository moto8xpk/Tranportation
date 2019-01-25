import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranportPageComponent } from './middle/tranport-page/tranport-page.component';

const routes: Routes = [
  { path: 'tranport', component: TranportPageComponent },
  { path: '**', redirectTo: '/tranport', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
