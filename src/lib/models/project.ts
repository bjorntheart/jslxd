export interface Project {
    name: string;
    description: string;
    config: {
        [key: string]: string,
    };
    used_by: string[];
}