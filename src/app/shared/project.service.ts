import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
  loadProject(): string[] {
    return ['project1', 'project2'];
  }

  constructor() {}
}
