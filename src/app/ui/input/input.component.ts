import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    formattedAmount: any;
    constructor(private currencyPipe: CurrencyPipe) {}

    transformAmount(element: any): void {
        this.formattedAmount = this.currencyPipe.transform(this.formattedAmount, '₴');

        element.target.value = this.formattedAmount;
    }
}
