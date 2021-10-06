import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faDollarSign, faPercent } from '@fortawesome/free-solid-svg-icons';
import { DiscountType } from '../../../models/discount-type';
import { NumericDirective } from '../../../directives/numeric.directive';

@Component({
  selector: 'app-offer-admin-pricing',
  templateUrl: './offer-admin-pricing.component.html',
  styleUrls: ['./offer-admin-pricing.component.scss']
})
export class OfferAdminPricingComponent implements OnInit {
  @Input() offerFullAmount: number;
  @Input() offerDiscountType: DiscountType;
  @Input() offerDiscountAmount: number;
  @Output() updatedDiscountAmount = new EventEmitter<number>();

  faDollarSign = faDollarSign;
  faPercent = faPercent;
  discountTypeEnum = DiscountType;
  currentDiscountAmount: number;
  currentDiscountPrice: number;

  constructor() { }

  ngOnInit() {
    this.currentDiscountAmount = this.offerDiscountAmount;
    this.updateDiscountedPrice();
  }

  setDiscountType(discountTypeValue: number): void {
    this.offerDiscountType = discountTypeValue;
    this.updateDiscountedPrice();
  }

  updateDiscountedPrice(): void {
    if (this.offerDiscountType == this.discountTypeEnum.DollarAmount) {
      this.currentDiscountAmount = this.currentDiscountAmount > this.offerFullAmount
        ? this.offerFullAmount
        : this.currentDiscountAmount;
    } else {
      this.currentDiscountAmount = this.currentDiscountAmount > 100
        ? 100
        : this.currentDiscountAmount
    }

    this.currentDiscountPrice = this.offerDiscountType == 1
      ? this.offerFullAmount - this.currentDiscountAmount
      : this.offerFullAmount - (this.offerFullAmount * (this.currentDiscountAmount/100));

    this.updatedDiscountAmount.emit(this.currentDiscountPrice);
  }
}
