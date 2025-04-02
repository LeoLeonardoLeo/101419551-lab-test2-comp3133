import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'missions', component: MissionlistComponent },
  { path: 'details', component: MissiondetailsComponent } 
];