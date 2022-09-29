import { Input, Pipe, PipeTransform } from '@angular/core';

import { DatePipe } from '@angular/common';

export class DateFormatConstants {
  static readonly dateLocalFr = 'fr-FR';
  static readonly dateLocalEn = 'en-EN';

  static readonly timezone = 'GMT+2';

  static readonly DATE_FMT_FR = 'dd/MM/y';
  static readonly DATE_TIME_FMT_FR = `${DateFormatConstants.DATE_FMT_FR} - hh:mm`;

  static readonly DATE_FMT_EN = 'MM/dd/y';
  static readonly DATE_TIME_FMT_EN = `${DateFormatConstants.DATE_FMT_EN} - h:mm a`;
}
export enum AppLanguages {
  Fr = 'fr',
  En = 'en'
}
@Pipe({
  name: 'appDate'
})
export class AppDatePipe extends DatePipe implements PipeTransform {
  transform(value: any, lang?: any): any {
    if (lang && lang == AppLanguages.Fr) {
      return super.transform(value, DateFormatConstants.DATE_FMT_FR, DateFormatConstants.timezone, DateFormatConstants.dateLocalFr);
    } else {
      return super.transform(value, DateFormatConstants.DATE_FMT_EN, DateFormatConstants.timezone, DateFormatConstants.dateLocalEn);
    }
  }
}

