import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List } from '../network/missionapi'; 
import { MissionApi } from '../network/missionapi';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  lists: List[] = []; // Initialize empty array

  constructor(private missionApi: MissionApi) {} 

  ngOnInit() {
    this.missionApi.getMissions().subscribe(data => {
      this.lists = data; // Just assign the data
    });
  }
}