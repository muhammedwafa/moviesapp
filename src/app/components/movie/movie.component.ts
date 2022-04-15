import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  type = '';
  movieId = '';
  url = '';
  movies: any;
  movie: any;

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.type = this.activatedRoute.snapshot.params['type'];
    this.movieId = this.activatedRoute.snapshot.params['movieId'];
    if (this.type === 'trending') {
      this.url = "http://localhost:4200/assets/data/trending-movies.json";
    } else if (this.type === 'popular') {
      this.url = "http://localhost:4200/assets/data/popular-movies.json";
    } else {
      this.url = "http://localhost:4200/assets/data/theatre-movies.json";
    }

    this.getMovieDetails();
  }

  getMovieDetails() {
    this.httpClient.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.movieId
      );
      if (index > -1) {
        this.movie = this.movies[index];
      }
    })
  }

}
