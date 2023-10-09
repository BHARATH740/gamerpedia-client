import { Component, Input } from '@angular/core';
import { Game } from '../home/gameData';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss'],
})
export class GameTabsComponent {
  @Input() game: Game = {
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

  constructor() {}
}
