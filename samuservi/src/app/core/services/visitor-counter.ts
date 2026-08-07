import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorCounterService {
  private readonly startDate = new Date('2024-08-01');

  getCount(): number {
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - this.startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays * 10 + 1090;
  }
}
