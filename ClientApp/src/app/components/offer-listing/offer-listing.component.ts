import { Component, OnInit, Input } from '@angular/core';
import { faSave, faEdit } from '@fortawesome/free-solid-svg-icons';

import * as foo from '../../models/offer-model-interfaces';
import * as bar from '../../models/product-model-interface';
import { DiscountType } from '../../models/discount-type';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-offer-listing',
  templateUrl: './offer-listing.component.html',
  styleUrls: ['./offer-listing.component.scss']
})
export class OfferListingComponent implements OnInit {
  @Input() locationId: number = 1089687;

  offers: foo.Offer[];
  isGetOfferLoading: boolean = false;

  constructor(private offerService: OffersService) { }

  ngOnInit() {
    this.getOffers(this.locationId);
  }

  getOffers(id: number): void {
    this.isGetOfferLoading = true;
    setTimeout(() => {
      this.offerService.getOffersByLocationId(id).subscribe(data => {
        this.offers = data;
        this.isGetOfferLoading = false;
      });
    }, 100);
  }
  
  isPageLoading(): boolean {
    return this.isGetOfferLoading;
  }
}
