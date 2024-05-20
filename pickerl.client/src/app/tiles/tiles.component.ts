import { Component, Input } from '@angular/core';
import { Tile } from '../types/tile';
import { RouterLink } from '@angular/router';
import { TileComponent } from './tile/tile.component';

@Component({
  selector: 'app-tiles',
  standalone: true,
  imports: [TileComponent, RouterLink],
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.scss',
})
export class TilesComponent {
  @Input({ required: true })
  tiles: Tile[];
}
