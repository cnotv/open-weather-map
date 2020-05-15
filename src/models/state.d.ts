interface MapLocation {
  city: string;
  country: string;
}

interface MapData {
  [key: string]: Owm
}

interface State {
  apiKey?: string;
  coords?: OwmCoord;
  data: MapData;
  location?: MapLocation,
  stats?: Owm
}

