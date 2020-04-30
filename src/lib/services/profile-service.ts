import { Profile } from '../models/profile';
import { axios } from '../axios-instance';

export class ProfileService {
  constructor() {}

  /**
   * Get all profile names on the default project
   *
   * ### Example
   * ```js
   * import { Lxd } from 'js-lxd-api';
   *
   * const client = new Lxd();
   * const profileNames = await client.profile.getProfileNames();
   * ```
   */
  public getProfileNames(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/profiles`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public getProfiles(): Promise<Profile[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/profiles?recursion=1`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
