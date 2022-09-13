import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_resultats: number;
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { }
  
  getTopRatedMovies(page = 1): Observable<any> {
    return this.http.get(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);

  }

  getMoviesDetails(id: String){
    return this.http.get(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
      ); 

  }
}

