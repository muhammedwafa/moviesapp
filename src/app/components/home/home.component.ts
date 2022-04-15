import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  popularInTheater: any;
  popularMovies: any;

  constructor(private authService: AuthService, private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getPopularInTheater();
    this.getPopularMovies();
  }


  private getTrendingMovies() {
    this.httpClient.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
        this.trendingMovies = movies;
        console.log(this.trendingMovies);
      }
    )
  }

  private getPopularInTheater() {
    this.httpClient.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies) => {
      this.popularInTheater = movies;
    })
  }

  private getPopularMovies() {
    this.httpClient.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
        this.popularMovies = movies;
        console.log(this.popularMovies);
      }
    )
  }

  gotoMovie(type: string, movieId: string) {
    this.router.navigate((['movie', type, movieId]));
  }
}
