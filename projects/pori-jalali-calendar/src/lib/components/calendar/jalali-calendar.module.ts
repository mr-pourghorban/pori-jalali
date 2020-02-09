import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoriJalaliCalendarComponent } from './jalali-calendar';
import { toPersianPipe } from '../../utils';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PoriJalaliCalendarComponent, toPersianPipe],
  exports: [PoriJalaliCalendarComponent]
})
export class NgJalaliCalendarModule { }
