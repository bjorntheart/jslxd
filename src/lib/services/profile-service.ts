import { Profile } from '../models/profile';
import { axios } from '../axios-instance';

export class ProfileService {
  constructor() {}

  /**
   * [ endpoint: '/<version>/profiles', api: client.profile.getProfileNames() ]
   * [ endpoint: '/<version>/profiles', api: client.profile.getProfiles() ]
   * [ endpoint: '/<version>/profiles/<name>', api: client.profile.getProfile(<name>) ]
   * [ endpoint: '/<version>/profiles', api: client.profile.createProfile(...profilePostArgs) ]
   * [ endpoint: '/<version>/profiles/<name>', api: client.profile.UpdateProfile(<name>, partial?=true|false, ...profilePutArgs|profilePatchArgs) ]
   * * partial=true for PATCH requests
   * [ endpoint: '/<version>/profiles/<name>', api: client.profile.RenameProfile(<name>,...profilePostArgs) ]
   * [ endpoint: '/<version>/profiles/<name>', api: client.profile.DeleteProfile(<name>) ]
   */

  /**
   * GetProfileNames returns a list of available profile names
   *
   * ### Example
   * ```js
   * import { Client } from 'jslxd';
   *
   * const client = new Client();
   * const profileNames = await client.profile.getProfileNames();
   * ```
   *
   * #### Response
   * ```json
   * [
   *     "/1.0/profiles/default",
   *     "/1.0/profiles/web"
   * ]
   * ```
   */
  public getProfileNames(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/1.0/profiles`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * **GetProfiles** returns a list of available [[Profile]] types
   *
   * ### Example
   * ```js
   * import { Client } from 'jslxd';
   *
   * const client = new Client();
   * const profileNames = await client.profile.getProfiles();
   * ```
   *
   * #### Response
   * ```json
   * ```
   */
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
