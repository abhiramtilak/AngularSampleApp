import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  static validated:boolean = false;
  constructor() { }
}
