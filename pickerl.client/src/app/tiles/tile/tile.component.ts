import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
})
export class TileComponent {
  @Input({ required: true })
  icon: string;

  @Input({ required: true })
  title: string;
}
