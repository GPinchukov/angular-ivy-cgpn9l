import { Injectable } from '@angular/core';
import {User} from "./interface";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public CLIENT_ID: string = '549d7ad1b31342459c2ef91ddd50490c';
  public SP_AUTH_EP: string = 'https://accounts.spotify.com/authorize';
  public RER_AFTER_LOG: string = 'http://localhost:4200/profile';

  public SCOPES: Array<string> = ["user-library-read"];
  public SC_URL_PARAM = this.SCOPES.join('');

  token: string = '';
  user: User = {
    explicit_content: {
      filter_enabled: false,
      filter_locked: false
    },
    external_urls: {
      spotify: ''
    },
    country: '',
    display_name: '',
    email: '',
    followers: {
      href: '',
      total: 0,
    },
    href: '',
    id: '',
    images: [{
      height: 0,
      url: '',
      width: 0
    }],
    product: '',
    type: '',
    uri: ''
  }

  constructor() { }
}

// https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}
// https://accounts.spotify.com/authorize?client_id=549d7ad1b31342459c2ef91ddd50490c&scope=playlist-read-private&response_type=token&show_dialog=true&redirect_uri=http://localhost:4200
