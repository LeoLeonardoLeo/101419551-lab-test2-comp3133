import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface List {
  flight_number: number
  mission_name: string
  launch_year: string
  details: string
  links: {
    mission_patch_small: string
    article_link: string
    wikipedia: string
    video_link: string  
  };
  rocket: {
    rocket_name: string
    rocket_type: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class MissionApi {  
  private api = 'https://api.spacexdata.com/v3/launches'

  constructor(private http: HttpClient) { }

  //gets all missions from api
  getMissions(): Observable<List[]> {
    return this.http.get<List[]>(this.api);
  }
}