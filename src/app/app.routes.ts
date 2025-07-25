// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Career } from './career/career';
import { About } from './about/about';
import { Project } from './project/project';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'career', component: Career},
  { path: 'about', component: About },
  { path: 'project', component: Project },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Optional default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}