export interface ProductView {
    productItem: ProductItem;
    accountAppVendorViewItem: AccountAppVendorViewItem;
    appVendorExternalMappingItem: AppVendorExternalMappingItem;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeProductTypeItem {
    codeProductTypeId: number;
    productTypeCode: string;
    productTypeName: string;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeProductGroupItem {
    codeProductGroupId: number;
    productGroupCode: string;
    productGroupName: string;
    isAllowMultipleProductGrouping: number;
    colorCode: string;
    sequence: number;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeProductUomItem {
    codeProductUomId: number;
    productUomCode: string;
    productUomName: string;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeNoteExtendedTypeItem {
    codeNoteExtendedTypeId: number;
    noteExtendedTypeCode?: any;
    noteExtendedTypeName?: any;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeObjectTypeItem {
    codeObjectTypeId: number;
    objectTypeCode?: any;
    objectTypeName?: any;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface NoteExtendedProductDescription {
    noteExtendedId: number;
    codeNoteExtendedTypeId: number;
    codeObjectTypeId: number;
    objectInstanceId: number;
    notes?: any;
    rowVersion: string;
    codeNoteExtendedTypeItem: CodeNoteExtendedTypeItem;
    codeObjectTypeItem: CodeObjectTypeItem;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeNoteExtendedTypeItem2 {
    codeNoteExtendedTypeId: number;
    noteExtendedTypeCode?: any;
    noteExtendedTypeName?: any;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeObjectTypeItem2 {
    codeObjectTypeId: number;
    objectTypeCode?: any;
    objectTypeName?: any;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface NoteExtendedProductSuggestion {
    noteExtendedId: number;
    codeNoteExtendedTypeId: number;
    codeObjectTypeId: number;
    objectInstanceId: number;
    notes?: any;
    rowVersion: string;
    codeNoteExtendedTypeItem: CodeNoteExtendedTypeItem2;
    codeObjectTypeItem: CodeObjectTypeItem2;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeNoteExtendedTypeItem3 {
    codeNoteExtendedTypeId: number;
    noteExtendedTypeCode?: any;
    noteExtendedTypeName?: any;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeObjectTypeItem3 {
    codeObjectTypeId: number;
    objectTypeCode?: any;
    objectTypeName?: any;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface NoteExtendedProductWarning {
    noteExtendedId: number;
    codeNoteExtendedTypeId: number;
    codeObjectTypeId: number;
    objectInstanceId: number;
    notes?: any;
    rowVersion: string;
    codeNoteExtendedTypeItem: CodeNoteExtendedTypeItem3;
    codeObjectTypeItem: CodeObjectTypeItem3;
    entityState: number;
    propertyChangedList: any[];
}

export interface ProductItem {
    productId: number;
    accountAppVendorId: number;
    codeProductTypeId: number;
    codeProductGroupId: number;
    codeProductUomId: number;
    productCode: string;
    productName: string;
    productOriginalPrice: number;
    isActive: boolean;
    codeProductTypeItem: CodeProductTypeItem;
    codeProductGroupItem: CodeProductGroupItem;
    codeProductUomItem: CodeProductUomItem;
    noteExtendedProductDescription: NoteExtendedProductDescription;
    productDescription?: any;
    noteExtendedProductSuggestion: NoteExtendedProductSuggestion;
    productSuggestion?: any;
    noteExtendedProductWarning: NoteExtendedProductWarning;
    productWarning?: any;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface AccountAppVendorItem {
    accountAppVendorId: number;
    accountId: number;
    appVendorId: number;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeLocaleItem {
    codeLocaleId: number;
    localeCode: string;
    localeName: string;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeImageTypeItem {
    codeImageTypeId: number;
    imageTypeCode: string;
    imageTypeName: string;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeObjectTypeItem4 {
    codeObjectTypeId: number;
    objectTypeCode: string;
    objectTypeName: string;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
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
    uploadedDateTime: Date;
    rowVersion: string;
    codeImageTypeItem: CodeImageTypeItem;
    codeObjectTypeItem: CodeObjectTypeItem4;
    fileUrl: string;
    entityState: number;
    propertyChangedList: any[];
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
    propertyChangedList: any[];
}

export interface AppVendorItem {
    appVendorId: number;
    appVendorCode: string;
    appVendorName: string;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface AccountAppVendorViewItem {
    accountAppVendorItem: AccountAppVendorItem;
    accountItem: AccountItem;
    appVendorItem: AppVendorItem;
    entityState: number;
    propertyChangedList: any[];
}

export interface CodeObjectTypeItem5 {
    codeObjectTypeId: number;
    objectTypeCode: string;
    objectTypeName: string;
    sequence?: any;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList: any[];
}

export interface AppVendorExternalMappingItem {
    appVendorExternalMappingId: number;
    accountAppVendorId: number;
    codeObjectTypeId: number;
    objectInstanceId: number;
    externalReferenceId: string;
    externalReferenceData?: any;
    isGeneratedExternalReferenceId: boolean;
    createdDateTime: Date;
    isActive: boolean;
    rowVersion: string;
    codeObjectTypeItem: CodeObjectTypeItem5;
    entityState: number;
    propertyChangedList: any[];
}

export interface RootObject {
    productItem: ProductItem;
    accountAppVendorViewItem: AccountAppVendorViewItem;
    appVendorExternalMappingItem: AppVendorExternalMappingItem;
    entityState: number;
    propertyChangedList: any[];
}
