export interface Location {
  city: string;
  region: string;
  timezone: string;
  lat: number;
  lng: number;
}


export interface IPData {
  ip: string;
  isp: string;
  location: Location;
}
