import { NgModule } from '@angular/core';

import {
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { CommonModule, CurrencyPipe } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [NgxMatDatetimePickerModule, NgxMatTimepickerModule, CommonModule],
    providers: [CurrencyPipe],
    bootstrap: [],
})
export class DatePickerModule {}
