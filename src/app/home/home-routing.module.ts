import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { HomeComponent } from './home.component';
import { TestViewComponent } from "@app/home/test-view/test-view.component";

const routes: Routes = [
  Route.withShell([
    { path: '', component: HomeComponent },
    { path: 'tests/:id/:type', component: TestViewComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
