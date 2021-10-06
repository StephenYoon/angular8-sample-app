export class ProductDto {
  productId: number;
  productName: string;
  productDescription: string;
  productOriginalPrice: number;
  duration: number;
  isSelected: boolean;
}

export interface OfferProductDto {
  product: ProductDto;
  addOns: ProductDto[];
  showAddOns?: boolean;
}

export class OfferDayOfWeekDto {
  codeDayOfWeekId: number;
  dayCode: string;
  dayName: string;
  csvTimeRanges: string;
  daySelected: boolean;
  warningMessages: string;
}

export interface WorkforceDto {
  workforceId: number;
  firstName: string;
  lastName: string;
  email?: string | null;
  genderCode: string;
  genderName: string;
  isSelected: boolean;
}

export interface OfferStartEndDateDto {
  startDate: Date,
  endDate: Date
}