export interface LocationView {
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
    imageAccountLogo: ImageAccountLogo;
    entityState: number;
    propertyChangedList?: (null)[] | null;
  }
  export interface ImageAccountLogo {
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
  