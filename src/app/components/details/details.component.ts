import { Component, Input, OnInit } from '@angular/core';
import { APIResponse, Game } from '../home/gameData';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  gameId: string = '';
  game: Game = {
    id: '',
    background_image: '',
    name: '',
    released: '',
    image: '',
    metacritic_url: '',
    website: '',
    description: '',
    metacritic: 0,
    genres: [{ name: '' }],
    parent_platforms: [{ platform: { slug: '' } }],
    publishers: [{ name: '' }],
    ratings: [{ id: 0, title: '', count: 0 }],
    screenshots: [{ image: '' }],
    trailers: [{ data: { max: '' } }],
  };
  gameRating: number = 0;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // this.http.get(environment.backEndURL + `GameDetails?gameId=${}`)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }

  getGameDetails(gameId: string) {
    console.log('gameDetails called ' + gameId.length + '.....');

    this.http
      .get<Game>(`${environment.backEndURL}/GameDetails?gameId=${gameId}`)
      .subscribe(
        (data: Game) => {
          this.game = data;
          this.gameRating = this.game.metacritic;
          console.log('metacritic updated', this.gameRating);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }
}
