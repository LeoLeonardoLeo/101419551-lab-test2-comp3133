import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Details {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  launch_site: {
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean;
  details: string;
  links: {
    mission_patch: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  };
}

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  details: Details | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Details>('https://api.spacexdata.com/v3/launches/1')
      .subscribe({
        next: (data) => {
          this.details = data;
        },
        error: (err) => {
          console.error('Error fetching mission details:', err);
        }
      });
  }
}