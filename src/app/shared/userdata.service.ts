import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  loadUsers(): string[] {
    return ['hr', 'finance'];
  }
}
