import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TripSelectorComponent } from './trip-selector/trip-selector.component';
import { SelectorComponent } from './ui/selector/selector.component';
import { InputComponent } from './ui/input/input.component';
import { DatePickerComponent } from './ui/date-picker/date-picker.component';
import { RouteSelectorComponent } from './ui/route-selector/route-selector.component';
import { CostInputComponent } from './ui/cost-input/cost-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ButtonComponent } from './ui/button/button.component';

import { CommonModule, CurrencyPipe } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        TripSelectorComponent,
        SelectorComponent,
        InputComponent,
        DatePickerComponent,
        RouteSelectorComponent,
        CostInputComponent,
        ButtonComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        MatDatepickerModule,
        CommonModule,
    ],
    providers: [CurrencyPipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
