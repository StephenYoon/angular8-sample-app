import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { faSave, faEdit } from '@fortawesome/free-solid-svg-icons';
 
import * as foo from '@app/models/offer-model-interfaces';
import * as bar from '@app/models/product-model-interface';
import { DiscountType } from '@app/models/discount-type';
import { OffersService } from '@app/services/offers.service';
import { ProductDto, OfferProductDto, WorkforceDto, OfferStartEndDateDto, OfferDayOfWeekDto } from '@app/models/dto-models';

@Component({
  selector: 'app-offer-admin',
  templateUrl: './offer-admin.component.html',
  styleUrls: ['./offer-admin.component.scss']
})
export class OfferAdminComponent implements OnInit {
    @Input() offerId: number = 0;
    @Input() locationId: number = 1089687; // TODO: add this to route and extract
    
    faSave = faSave;
    faEdit = faEdit;

    isGetOfferLoading: boolean;
    isGetServicesAddOnsLoading: boolean;

    // Helpful data
    products: ProductDto[];
    selectedTechnicianDtos: WorkforceDto[];
    selectedProducts: OfferProductDto[];
    
    // Offer details
    offer: foo.Offer;    
    offerFullAmount: number;
    offerDiscountAmount: number;
    offerDiscountType: DiscountType = DiscountType.DollarAmount;
    
    // Offer period
    offerStartDate: Date; // Note: months are zero-based
    offerEndDate: Date; // Note: months are zero-based    
    offerPeriodAllBusinessHours: boolean;
    offerDayOfWeekItems: OfferDayOfWeekDto[]

    // Offer product(s)
    selectedProductIds: number[];
    selectedAddOnIds: number[];

    // Offer exclude dates
    offerExcludeDatesSelection: Date[];
    
    // Offer technicians
    offerAnyTechnician: boolean;
    selectedTechnicianIds: number[];

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private offerService: OffersService) { }

    ngOnInit() {      
      const offerId = +this.route.snapshot.paramMap.get('offerId');
      const locationId = +this.route.snapshot.paramMap.get('locationId');
      
      this.isGetOfferLoading = false;
      this.isGetServicesAddOnsLoading = false;
      this.selectedTechnicianDtos = [];
      this.offerAnyTechnician = false;

      this.getOffer(offerId);
    }
      
    getOffer(id: number): void {
      this.isGetOfferLoading = true;
      this.offerService.getOfferById(id).subscribe(data => {
        this.offer = data;
        this.offerStartDate = new Date(this.offer.offerItem.offerStartDateTime);
        this.offerEndDate = new Date(this.offer.offerItem.offerEndDateTime);
        this.offerFullAmount = this.offer.offerItem.offerFullAmount;
        this.offerDiscountAmount = this.offer.offerItem.offerDiscountAmount;
        this.selectedProductIds = this.offer.productIds;
        this.selectedAddOnIds = this.offer.addonIds;
        this.offerExcludeDatesSelection = this.offer.offerFilterItems.map(x => new Date(x.filterValues));
        this.selectedTechnicianIds = this.offer.workforceIds; //[1089898, 1089899, 1089900, 1089901, 1089903];
        this.offerAnyTechnician = this.selectedTechnicianIds && this.selectedTechnicianIds.length ? false : true
        
        this.getOfferServices(this.locationId);
      });
    }

    getOfferServices(id: number): void {
      this.offerService.getProductsByLocationId(id).subscribe(data => {
        let productViewItems: bar.ProductView[] = data;
        this.products = productViewItems.map(productView => {          
          return {
            productId: productView.productItem.productId,
            productName: productView.productItem.productName,
            productDescription: productView.productItem.productDescription,
            productOriginalPrice: productView.productItem.productOriginalPrice,
            duration: 0,
            isSelected: this.selectedProductIds.indexOf(productView.productItem.productId) >= 0
          }
        });
        this.isGetOfferLoading = false;
      });    
    }

    getFormattedDate(dateInput: string): string {
      var date = new Date(dateInput);
      var year = date.getFullYear();

      var month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;
    
      var day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;
      
      return month + '/' + day + '/' + year;
    }

    getSelectedTechniciansSummary(): string {
      let summary = this.selectedTechnicianDtos.map(s => `${s.firstName} ${s.lastName} (${s.genderCode})`).join(', ');
      return summary;
    }

    isPageLoading(): boolean {
      return this.isGetOfferLoading || this.isGetServicesAddOnsLoading;
    }

    onUpdateOfferStartEndDate(offerDates: OfferStartEndDateDto): void {
      this.offerStartDate = offerDates.startDate;
      this.offerEndDate = offerDates.endDate;
    }

    onToggleAllBusinessHoursChange(offerPeriodAllBusinessHours: boolean): void {
      this.offerPeriodAllBusinessHours = offerPeriodAllBusinessHours;
    }

    onUpdateOfferDayAndTimeRanges(offerDays: OfferDayOfWeekDto[]): void {
      this.offerDayOfWeekItems = offerDays;
    }

    onSelectedProductsUpdate(products: OfferProductDto[]): void {
      this.selectedProducts = products;
      this.selectedProductIds = products.map(p => p.product.productId);
      this.selectedAddOnIds = []; // TODO: extract this from above
    }

    onSelectedAddOnsUpdate(productWithAddOns: OfferProductDto): void {
      // TODO: maintain this list of products and corresponding add-ons
    }

    onUpdatedDiscountAmount(discountedAmount: number): void {
      this.offerDiscountAmount = discountedAmount;
    }

    onUpdatedOfferExcludeDatesSelection(excludeDates: Date[]): void {
      this.offerExcludeDatesSelection = excludeDates;
    }

    onSelectedTechniciansUpdate(selectedTechnicians: WorkforceDto[]): void {
      this.selectedTechnicianDtos = selectedTechnicians;
      this.selectedTechnicianIds = selectedTechnicians.map(t => t.workforceId);
    }

    onSelectedTechnicianToggleUpdate(anyTechnician: boolean): void {
      this.offerAnyTechnician = anyTechnician;
    }
}
