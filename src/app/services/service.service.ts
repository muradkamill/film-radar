import { Injectable } from '@angular/core';

@Injectable({  providedIn: 'root',})
export class ServiceService {
  arr: any[] = [];
  onWatch(arr: any) {
    if (this.arr.length === 0 || this.arr[this.arr.length - 1] !== arr) {
      this.arr.push(arr);
      console.log(this.arr)
    }
  }}
