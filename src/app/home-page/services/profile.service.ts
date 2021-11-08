import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  public CLIENT_ID: string = '549d7ad1b31342459c2ef91ddd50490c';
  public SP_AUTH_EP: string = 'https://accounts.spotify.com/authorize';
  public RER_AFTER_LOG: string = 'http://localhost:4200/profile';

  public SCOPES: Array<any> = ["playlist-read-private"];
  public SC_URL_PARAM = this.SCOPES.join("");

  constructor() { }
}

// https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}
// https://accounts.spotify.com/authorize?client_id=549d7ad1b31342459c2ef91ddd50490c&scope=playlist-read-private&response_type=token&show_dialog=true&redirect_uri=http://localhost:4200
