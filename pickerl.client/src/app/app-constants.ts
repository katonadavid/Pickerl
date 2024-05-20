import { Tile } from './types/tile';

export class AppConstants {
  public static Tiles: Tile[] = [
    {
      title: 'Fahrzeug abfragen',
      icon: 'directions_car',
      link: 'query',
    },
    {
      title: 'Plakette abfragen',
      icon: 'action_key',
      link: 'query',
    },
    {
      title: 'Prüfstellen',
      icon: 'garage_door',
      link: 'query',
    },
  ];
}
