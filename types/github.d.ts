export interface IRepo {
  id: number;
  name: string;
  repo_url: string;
  description?: string;
  language: string[];
  directory: string[];
  owner_id: number;
}

export interface ICreateRepo {
  name: string;
  repo_url: string;
  description?: string;
  language: string[];
  directory?: string[];
}
