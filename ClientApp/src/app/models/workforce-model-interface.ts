export interface WorkforceView {
    workforceItem: WorkforceItem;
    accountAppVendorViewItem: AccountAppVendorViewItem;
    appVendorExternalMappingItem: AppVendorExternalMappingItem;
    entityState: number;
    propertyChangedList?: (null)[] | null;
  }
  export interface WorkforceItem {
    workforceId: number;
    accountAppVendorId: number;
    codeGenderId: number;
    codeSalutationId?: null;
    firstName: string;
    lastName: string;
    email?: string | null;
    isActive: boolean;
    codeGenderItem: CodeGenderItem;
    codeSalutationItem: CodeSalutationItem;
    rowVersion: string;
    entityState: number;
    propertyChangedList?: (null)[] | null;
  }
  export interface CodeGenderItem {
    codeGenderId: number;
    genderCode: string;
    genderName: string;
    sequence: number;
    isActive: boolean;
    rowVersion: string;
    entityState: number;
    propertyChangedList?: (null)[] | null;
  }
  export interface CodeSalutationItem {
    codeSalutationId: number;
    salutationCode?: null;
    salutationName?: null;
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
  