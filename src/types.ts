export type Party = {
  id: string;
  version: string;
  addresses: [];
  allowPurchaseOrderCreation: boolean;
  bankAccounts: [];
  comissionBlock: boolean;
  comissionSalesPartners: [];
  company: string;
  competitor: boolean;
  contacts: [];
  createdDate: number;
  currencyId: string;
  currencyName: string;
  customAttributes: [];
  customer: boolean;
  customerAllowDropshippingOrderCreation: boolean;
  customerBlocked: boolean;
  customerBusinessType: string;
  customerDeliveryBlock: boolean;
  customerInsolvent: boolean;
  customerInsured: boolean;
  customerNumber: string;
  customerSalesChannel: string;
  customerSalesStageHistory: [];
  customerUseCustomsTariffNumber: boolean;
  enableDropshippingInNewSupplySources: boolean;
  factoring: boolean;
  fixedResponsibleUser: boolean;
  formerSalesPartner: boolean;
  habitualExporter: boolean;
  invoiceBlock: boolean;
  lastModifiedDate: number;
  onlineAccounts: [];
  optInEmail: boolean;
  optInLetter: boolean;
  optInPhone: boolean;
  optInSms: boolean;
  partyEmailAddresses: [];
  partyHabitualExporterLettersOfIntent: [];
  partyType: string;
  primaryContactId: string;
  purchaseViaPlafond: boolean;
  salesPartner: boolean;
  supplier: boolean;
  supplierOrderBlock: boolean;
  tags: [];
  topics: [];
};

export type User = {
  id: string;
  version: string;
  createdDate: number;
  customAttributes: [];
  email: string;
  firstName: string;
  imageId: string;
  lastModifiedDate: number;
  lastName: string;
  licenses: string[];
  mobilePhoneNumber: string;
  status: string;
  userRoles: [];
  username: string;
  phoneNumber: string;
};

export type Customer = {
  id: string;
  version: string;
  addresses: [];
  bankAccounts: [];
  blocked: boolean;
  commercialLanguageId: string;
  commissionSalesPartners: [];
  company: string;
  contacts: [];
  createdDate: number;
  currencyId: string;
  currencyName: string;
  customAttributes: [];
  customerNumber: string;
  customerTopics: [];
  deliveryBlock: boolean;
  email: string;
  fax: string;
  insolvent: boolean;
  insured: boolean;
  invoiceBlock: boolean;
  lastModifiedDate: number;
  oldCustomerNumber: string;
  onlineAccounts: [];
  optIn: boolean;
  optInLetter: boolean;
  optInPhone: boolean;
  optInSms: boolean;
  partyType: string;
  paymentMethodId: string;
  paymentMethodName: string;
  phone: string;
  primaryAddressId: string;
  responsibleUserFixed: boolean;
  responsibleUserId: string;
  responsibleUserUsername: string;
  salesChannel: string;
  tags: [];
  termOfPaymentId: string;
  termOfPaymentName: string;
  useCustomsTariffNumber: boolean;
  vatRegistrationNumber: string;
  website: string;
};

export type Article = {
  id: string;
  version: string;
  active: boolean;
  applyCashDiscount: boolean;
  articleAlternativeQuantities: [];
  articleCalculationPrices: [];
  articleImages: [];
  articleNumber: string;
  articlePrices: [];
  articleType: string;
  availableForSalesChannels: [];
  availableInSale: boolean;
  batchNumberRequired: boolean;
  billOfMaterialPartDeliveryPossible: boolean;
  commissionRate: string;
  createdDate: number;
  customAttributes: [];
  customerArticleNumbers: [];
  defaultPriceCalculationType: string;
  defaultStoragePlaces: [];
  defineIndividualTaskTemplates: boolean;
  lastModifiedDate: number;
  lowLevelCode: number;
  marginCalculationPriceType: string;
  name: string;
  packagingUnitBaseArticleId: string;
  priceCalculationParameters: [];
  procurementLeadDays: number;
  productionArticle: boolean;
  productionBillOfMaterialItems: [];
  quantityConversions: [];
  salesBillOfMaterialItems: [];
  serialNumberRequired: boolean;
  supplySources: [];
  tags: [];
  taxRateType: string;
  unitId: string;
  unitName: string;
  useAvailableForSalesChannels: boolean;
  useSalesBillOfMaterialItemPrices: boolean;
  useSalesBillOfMaterialItemPricesForPurchase: boolean;
  useSalesBillOfMaterialSubitemCosts: boolean;
};

export type Task = {
  id: string;
  version: string;
  allowOverBooking: boolean;
  allowTimeBooking: boolean;
  articleId: string;
  assignees: [
    {
      id: string;
      version: string;
      createdDate: number;
      lastModifiedDate: number;
      plannedEffort: number;
      userId: string;
    }
  ];
  billableStatus: boolean;
  createdDate: number;
  creatorUserId: string;
  customAttributes: [];
  customerId: string;
  dateFrom: number;
  dateTo: number;
  entityReferences: [];
  lastModifiedDate: number;
  performanceRecordedStatus: "UNDEFINED";
  plannedEffort: number;
  subject: string;
  taskLists: [];
  taskPriority: "MEDIUM";
  taskStatus: "IN_PROGRESS";
  taskTopics: [];
  taskTypes: [];
  taskVisibilityType: "ORGANIZATION";
  userOfLastStatusChangeId: string;
  watchers: [];
};

export type TimeRecord = {
  id: string;
  version: string;
  billable: boolean;
  billableDurationSeconds: number;
  billableInvoiceStatus: "NOT_INVOICED";
  createdDate: number;
  customAttributes: [{ attributeDefinitionId: string; entityReferences: [] }];
  description: string;
  durationSeconds: number;
  lastModifiedDate: number;
  performanceRecordedStatus: "NOT_PERFORMANCE_RECORDED";
  printOnPerformanceRecord: boolean;
  startDate: number;
  taskId: string;
  userId: string;
  userUsername: string;
};

export type CreateTaskPayload = {
  ticketId?: string;
  dateFrom: number;
  dateTo: number;
  taskPriority: "MEDIUM";
  taskVisibilityType: "ORGANIZATION";
  taskStatus: "IN_PROGRESS";
  subject: string;
  customerId: string;
  assignees: [{ userId: string; plannedEffort: number }];
  articleId: string;
  plannedEffort: number;
};

export type CreateTaskResponse = Task;

export type CreateTimeRecordPayload = {
  taskId: string;
  startDate: number;
  durationSeconds: number;
  userId: string;
  billableDurationSeconds: number;
  description: string;
};

export type CreateTimeRecordResponse = TimeRecord;

export type FindPartiesQuery = {
  "company-eq"?: string;
  "customerNumber-eq"?: string;
  page?: number;
  pageSize?: number;
};

export type FindUsersQuery = {
  "email-eq"?: string;
  page?: number;
  pageSize?: number;
};

export type FindArticlesQuery = {
  page?: number;
  pageSize?: number;
  "name-eq"?: string;
};

export type FindPartiesResponse = {
  result: Party[];
};

export type FindUsersResponse = {
  result: User[];
};

export type FindArticlesResponse = {
  result: Article[];
};

export type FindCustomersQuery = {
  pageSize?: number;
  page?: number;
};

export type FindContactsQuery = {
  pageSize?: number;
  page?: number;
};

export type Contact = {
  id: string;
  email: string;
  lastName: string;
  partyType: "PERSON";
  phone?: string;
  mobilePhone1?: string;
};
