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

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './ui/button/button.component';

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
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
