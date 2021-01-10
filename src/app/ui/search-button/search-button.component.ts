import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-search-button',
    templateUrl: './search-button.component.html',
    styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent {
    constructor() {}

    @Output() search: EventEmitter<any> = new EventEmitter();

    public doSearch(): void {
        this.search.emit();
    }
}
