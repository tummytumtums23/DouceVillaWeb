import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AnalysisComponent } from './analysis/analysis.component';


const routes: Routes = [
 { path: 'home', component: HomepageComponent },
 { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'analysis', component: AnalysisComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
