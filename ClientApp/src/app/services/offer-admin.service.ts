import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferAdminService {
  public productDropdownToggled$: EventEmitter<boolean>;

  constructor() {
    this.productDropdownToggled$ = new EventEmitter();
  }

  public addProductToggled(toggleState: boolean): void {
    this.productDropdownToggled$.emit(toggleState);
  }
}
