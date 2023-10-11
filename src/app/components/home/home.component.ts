import { Component, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse, Game, ListGamesResponse } from './gameData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public search: string = '';
  public sort: string;
  public gamesData: Array<Game> | undefined;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sort = '';
    // this.getGameData(this.sort, this.search);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.search = params['search'];
      this.getGameData(this.sort, this.search);
    });
  }

  getGameData(sort?: string, search?: string, page?: Number): void {
    console.log(sort, search, '............................knk');

    page = page || 1;
    let params = new HttpParams().set('page', page.toString());
    if (search) {
      params = params.set('search', search);
    }
    if (sort) {
      params = params.set('sortBy', sort);
    }
    this.http
      // .get<APIResponse<Game>>(`${environment.backEndURL}/ListGames`, { params })
      .get<APIResponse<Game>>(`${environment.backEndURL}/ListGames`, {
        params,
      })
      .subscribe(
        (response: APIResponse<Game>) => {
          this.gamesData = response.data;
          console.log(this.gamesData);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  openGameDetails(id: string): void {
    console.log('clicked');

    this.router.navigate(['details', id]);
  }
}
