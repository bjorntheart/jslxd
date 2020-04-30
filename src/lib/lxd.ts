import { axios } from './axios-instance';
import { API_BASE_URL } from './conf/environment';
import { ProfileService } from './services/profile-service';

export class Lxd {
  public profile: ProfileService;

  constructor(url = API_BASE_URL) {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.baseURL = url;

    this.profile = new ProfileService();
  }
}
