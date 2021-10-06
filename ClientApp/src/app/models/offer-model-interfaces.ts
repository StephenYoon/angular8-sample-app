export interface Offer {
  offerItem: OfferItem;
  accountViewItem: AccountViewItem;
  offerMarketplaceViewItem: OfferMarketplaceViewItem;
  offerLocationViewItem: OfferLocationViewItem;
  productIds?: (number)[] | null;
  addonIds?: (null)[] | null;
  workforceIds?: (null)[] | null;
  offerDayOfWeekViewItems?: (OfferDayOfWeekViewItemsEntity)[] | null;
  offerFilterItems?: (OfferFilterItemsEntity)[] | null;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface OfferItem {
  offerId: number;
  accountId: number;
  codeOfferStatusId: number;
  codeOfferFulfillmentTypeId: number;
  codeDiscountTypeId: number;
  offerStartDateTime: string;
  offerEndDateTime: string;
  offerFullAmount: number;
  offerDiscountAmount: number;
  offerLastMinuteDiscountAmount: number;
  isAllowLastMinuteOffers: boolean;
  lastMinuteWindowTimeframe?: null;
  couponCode?: null;
  codeOfferStatusItem: CodeOfferStatusItem;
  codeOfferFulfillmentTypeItem: CodeOfferFulfillmentTypeItem;
  codeDiscountTypeItem: CodeDiscountTypeItem;
  noteExtendedOfferTitle: NoteExtendedOfferTitleOrNoteExtendedOfferSummary;
  offerTitle: string;
  noteExtendedOfferPitch: NoteExtendedOfferPitchOrNoteExtendedOfferRedemptionInstructionOrNoteExtendedOfferWarning;
  offerPitch?: null;
  noteExtendedOfferSummary: NoteExtendedOfferTitleOrNoteExtendedOfferSummary;
  offerSummary: string;
  noteExtendedOfferRedemptionInstruction: NoteExtendedOfferPitchOrNoteExtendedOfferRedemptionInstructionOrNoteExtendedOfferWarning;
  offerRedemptionInstruction?: null;
  noteExtendedOfferWarning: NoteExtendedOfferPitchOrNoteExtendedOfferRedemptionInstructionOrNoteExtendedOfferWarning;
  offerWarning?: null;
  imageOfferHeader: ImageOfferHeaderOrImageAccountLogo;
  isEnded: boolean;
  isStarted: boolean;
  isValidForRedemption: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeOfferStatusItem {
  codeOfferStatusId: number;
  offerStatusCode: string;
  offerStatusName: string;
  sequence: number;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeOfferFulfillmentTypeItem {
  codeOfferFulfillmentTypeId: number;
  offerFulfillmentTypeCode: string;
  offerFulfillmentTypeName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeDiscountTypeItem {
  codeDiscountTypeId: number;
  discountTypeCode: string;
  discountTypeName: string;
  discountTypeCharacterCode: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface NoteExtendedOfferTitleOrNoteExtendedOfferSummary {
  noteExtendedId: number;
  codeNoteExtendedTypeId: number;
  codeObjectTypeId: number;
  objectInstanceId: number;
  notes: string;
  rowVersion: string;
  codeNoteExtendedTypeItem: CodeNoteExtendedTypeItem;
  codeObjectTypeItem: CodeObjectTypeItem;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeNoteExtendedTypeItem {
  codeNoteExtendedTypeId: number;
  noteExtendedTypeCode: string;
  noteExtendedTypeName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeObjectTypeItem {
  codeObjectTypeId: number;
  objectTypeCode: string;
  objectTypeName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface NoteExtendedOfferPitchOrNoteExtendedOfferRedemptionInstructionOrNoteExtendedOfferWarning {
  noteExtendedId: number;
  codeNoteExtendedTypeId: number;
  codeObjectTypeId: number;
  objectInstanceId: number;
  notes?: null;
  rowVersion: string;
  codeNoteExtendedTypeItem: CodeNoteExtendedTypeItem1;
  codeObjectTypeItem: CodeObjectTypeItem1;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeNoteExtendedTypeItem1 {
  codeNoteExtendedTypeId: number;
  noteExtendedTypeCode?: null;
  noteExtendedTypeName?: null;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeObjectTypeItem1 {
  codeObjectTypeId: number;
  objectTypeCode?: null;
  objectTypeName?: null;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface ImageOfferHeaderOrImageAccountLogo {
  imageId: number;
  accountId: number;
  codeImageTypeId: number;
  codeObjectTypeId: number;
  objectInstanceId: number;
  originalFileName: string;
  fileName: string;
  filePath: string;
  size: number;
  height: number;
  width: number;
  uploadedByUserId: number;
  uploadedDateTime: string;
  rowVersion: string;
  codeImageTypeItem: CodeImageTypeItem;
  codeObjectTypeItem: CodeObjectTypeItem;
  fileUrl: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeImageTypeItem {
  codeImageTypeId: number;
  imageTypeCode: string;
  imageTypeName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface AccountViewItem {
  accountItem: AccountItem;
  addressItem: AddressItem;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface AccountItem {
  accountId: number;
  codeLocaleId: number;
  accountName: string;
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  rowVersion: string;
  codeLocaleItem: CodeLocaleItem;
  imageAccountLogo: ImageOfferHeaderOrImageAccountLogo;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeLocaleItem {
  codeLocaleId: number;
  localeCode: string;
  localeName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface AddressItem {
  addressId: number;
  codeCountryAdminDivisionId: number;
  codeObjectTypeId: number;
  objectInstanceId: number;
  addressLine1: string;
  addressLine2?: null;
  city: string;
  postalCode: string;
  timeZone?: null;
  latitude?: null;
  longitude?: null;
  rowVersion: string;
  codeCountryAdminDivisionItem: CodeCountryAdminDivisionItem;
  codeObjectTypeItem: CodeObjectTypeItem;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeCountryAdminDivisionItem {
  codeCountryAdminDivisionId: number;
  codeCountryId: number;
  countryAdminDivisionCode: string;
  countryAdminDivisionName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  codeCountryItem: CodeCountryItem;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeCountryItem {
  codeCountryId: number;
  codeContinentId: number;
  codeCurrencyId: number;
  countryIso2Code: string;
  countryIso3Code: string;
  countryIsoNumericCode: string;
  countryFipsCode: string;
  countryName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  codeContinentItem: CodeContinentItem;
  codeCurrencyItem: CodeCurrencyItem;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeContinentItem {
  codeContinentId: number;
  continentCode: string;
  continentName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeCurrencyItem {
  codeCurrencyId: number;
  currencyCode: string;
  currencyName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface OfferMarketplaceViewItem {
  offerMarketplaceItem: OfferMarketplaceItem;
  marketplaceItem: MarketplaceItem;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface OfferMarketplaceItem {
  offerMarketplaceId: number;
  offerId: number;
  marketplaceId: number;
  offerMarketplaceStartDateTime: string;
  offerQuantity: number;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface MarketplaceItem {
  marketplaceId: number;
  marketplaceCode: string;
  marketplaceName: string;
  imageMarketplaceLogo: ImageMarketplaceLogo;
  isDirect: boolean;
  sequence: number;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface ImageMarketplaceLogo {
  imageId: number;
  accountId?: null;
  codeImageTypeId: number;
  codeObjectTypeId: number;
  objectInstanceId: number;
  originalFileName: string;
  fileName: string;
  filePath: string;
  size: number;
  height: number;
  width: number;
  uploadedByUserId: number;
  uploadedDateTime: string;
  rowVersion: string;
  codeImageTypeItem: CodeImageTypeItem;
  codeObjectTypeItem: CodeObjectTypeItem;
  fileUrl: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface OfferLocationViewItem {
  offerLocationItem: OfferLocationItem;
  locationViewItem: LocationViewItem;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface OfferLocationItem {
  offerLocationId: number;
  offerId: number;
  locationId: number;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface LocationViewItem {
  locationItem: LocationItem;
  addressItem: AddressItem;
  accountAppVendorViewItem: AccountAppVendorViewItem;
  appVendorExternalMappingItem: AppVendorExternalMappingItem;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface LocationItem {
  locationId: number;
  accountAppVendorId: number;
  codeLocaleId: number;
  codeCurrencyId: number;
  codeDiscountTypeId: number;
  codeTaxGroupId?: null;
  locationName: string;
  websiteUrl?: null;
  phone: string;
  fax?: null;
  defaultProductDiscountAmount: number;
  isActive: boolean;
  codeLocaleItem: CodeLocaleItem;
  codeCurrencyItem: CodeCurrencyItem;
  codeDiscountTypeItem: CodeDiscountTypeItem;
  codeTaxGroupItem: CodeTaxGroupItem;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeTaxGroupItem {
  codeTaxGroupId: number;
  accountId: number;
  taxGroupCode?: null;
  taxGroupName?: null;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface AccountAppVendorViewItem {
  accountAppVendorItem: AccountAppVendorItem;
  accountItem: AccountItem;
  appVendorItem: AppVendorItem;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface AccountAppVendorItem {
  accountAppVendorId: number;
  accountId: number;
  appVendorId: number;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface AppVendorItem {
  appVendorId: number;
  appVendorCode: string;
  appVendorName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface AppVendorExternalMappingItem {
  appVendorExternalMappingId: number;
  accountAppVendorId: number;
  codeObjectTypeId: number;
  objectInstanceId: number;
  externalReferenceId: string;
  externalReferenceData: string;
  isGeneratedExternalReferenceId: boolean;
  createdDateTime: string;
  isActive: boolean;
  rowVersion: string;
  codeObjectTypeItem: CodeObjectTypeItem;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface OfferDayOfWeekViewItemsEntity {
  offerDayOfWeekItem: OfferDayOfWeekItem;
  offerDayOfWeekTimeItems?: (OfferDayOfWeekTimeItemsEntity)[] | null;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface OfferDayOfWeekItem {
  offerDayOfWeekId: number;
  offerId: number;
  codeDayOfWeekId: number;
  maxQuantity: number;
  codeDayOfWeekItem: CodeDayOfWeekItem;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeDayOfWeekItem {
  codeDayOfWeekId: number;
  dayOfWeekCode: string;
  dayOfWeekLongName: string;
  dayOfWeekShortName: string;
  dayOfWeekCharacterCode: string;
  sequence: number;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface OfferDayOfWeekTimeItemsEntity {
  offerDayOfWeekTimeId: number;
  offerDayOfWeekId: number;
  startTime: string;
  endTime: string;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface OfferFilterItemsEntity {
  offerFilterId: number;
  offerId: number;
  codeFilterTypeId: number;
  codeFilterOperatorId: number;
  filterValues: string;
  codeFilterTypeItem: CodeFilterTypeItem;
  codeFilterOperatorItem: CodeFilterOperatorItem;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeFilterTypeItem {
  codeFilterTypeId: number;
  filterTypeCode: string;
  filterTypeName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
export interface CodeFilterOperatorItem {
  codeFilterOperatorId: number;
  filterOperatorCode: string;
  filterOperatorName: string;
  sequence?: null;
  isActive: boolean;
  rowVersion: string;
  entityState: number;
  propertyChangedList?: (null)[] | null;
}
