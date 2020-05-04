import { axios } from './axios-instance';
import { ProfileService } from './services/profile-service';

export class Lxd {
  public profile: ProfileService;

  constructor() {
    axios.defaults.socketPath = '/var/snap/lxd/common/lxd/unix.socket';
    axios.defaults.headers.common['Content-Type'] = 'application/json';

    this.profile = new ProfileService();
  }
}
