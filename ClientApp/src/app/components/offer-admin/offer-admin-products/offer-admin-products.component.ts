import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlusSquare, faPlus, faTrashAlt, faPlusCircle, faMinusCircle, faCheck, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { OffersService } from '@app/services/offers.service';
import { OfferAdminService } from 'src/app/services/offer-admin.service';
import { ProductDto, OfferProductDto } from '@app/models/dto-models';
import * as bar from '@app/models/product-model-interface';

@Component({
  selector: 'app-offer-admin-products',
  templateUrl: './offer-admin-products.component.html',
  styleUrls: ['./offer-admin-products.component.scss']
})
export class OfferAdminProductsComponent implements OnInit {
  @Input() products: ProductDto[];
  @Input() productAddOnIds: number[];
  @Output() selectedProductsUpdate = new EventEmitter<OfferProductDto[]>();
  
  faPlusSquare = faPlusSquare;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;
  faCheck = faCheck;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  isLoading: boolean;
  isAddProductDropdownHidden: boolean;
  isAddOnHidden: boolean;
  selectedProducts: OfferProductDto[];
  isServiceListVisible: boolean;
  
  constructor(
    private offerService: OffersService,
    private offerAdminService: OfferAdminService) {
      //this.offerAdminService.productDropdownToggled$.subscribe(toggleState => this.hideAddOnList(toggleState));
    }

  ngOnInit() {    
    this.selectedProducts = this.products.filter(p => p.isSelected).map(p => {
      return { product: p, addOns: [] }
    });
    this.isAddProductDropdownHidden = false;
    this.isAddOnHidden = true;
    this.isServiceListVisible = false;
  }

  handleAddOnList(offerProduct: OfferProductDto): void {
    offerProduct.showAddOns = offerProduct.showAddOns // <-- this is nullable, thus check truthy
      ? false
      : true;
  }

  getAddOnCount(productId: number): number {
    let addOnCount = this.selectedProducts.filter(s => s.product.productId == productId)[0].addOns.filter(a => a.isSelected).length; // TODO: this looks like a long chain
    return addOnCount;
  }

  isProductLoading(): boolean {
    return this.isLoading;
  }

  availableProducts(): ProductDto[] {
    var selectedProductIds = this.selectedProducts.map(x => x.product.productId);//data.map(x => x.productItem);
    var itemsWithoutCurrent = this.products.filter(x => selectedProductIds.indexOf(x.productId) < 0);
    return itemsWithoutCurrent;
  }

  addProduct(product: ProductDto): void {
    this.isLoading = true;
    this.isAddProductDropdownHidden = true;
    this.offerService.getProductAddOnsByProductId(product.productId).subscribe(data => {
      let productViewItems: bar.ProductView[] = data;
      let productAddOns = productViewItems.map(productView => {
        return {
          productId: productView.productItem.productId,
          productName: productView.productItem.productName,
          productDescription: productView.productItem.productDescription,
          productOriginalPrice: productView.productItem.productOriginalPrice,
          duration: 0,
          isSelected: false
        }
      });

      this.selectedProducts.push({ product: product, addOns: productAddOns, showAddOns: false });
      this.selectedProductsUpdate.emit(this.selectedProducts);
      this.isLoading = false;
    });    
  }

  selectAddOn(addOn: ProductDto): void {
    addOn.isSelected = !addOn.isSelected;
    this.selectedProductsUpdate.emit(this.selectedProducts);
  }

  removeProductClick(productId: number) {
    this.isAddProductDropdownHidden = false;
    var index = this.selectedProducts.map(x => x.product.productId).indexOf(productId);
    if (index >= 0) {
      this.selectedProducts.splice(index, 1);
    }
    this.selectedProductsUpdate.emit(this.selectedProducts);
  }

  hideAddProductDropdown(): boolean {
    return this.isAddProductDropdownHidden;
  } 

  toggleProductList(): void {
    this.isServiceListVisible = !this.isServiceListVisible;
  }
  
  closeProductList(): void {
    this.isServiceListVisible = false;
  }

  showRemoveProductIcon(): boolean {
    return this.selectedProducts.length > 0;
  }
}
