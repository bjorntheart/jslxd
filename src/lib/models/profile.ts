export interface Profile {
  name: string;
  description: string;
  config: {
    [key: string]: string;
  };
  devices: {
    [key: string]: {
      path: string;
      type: string;
    };
  };
  used_by: string[];
}
