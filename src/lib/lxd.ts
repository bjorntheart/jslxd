import { API_BASE_URL } from './conf/environment';

export class Lxd {
  public url: string;

  constructor(url = API_BASE_URL) {
    this.url = url;
  }
}
