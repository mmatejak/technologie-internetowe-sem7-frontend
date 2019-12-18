export interface NotificationDto {
  id: number;
  customerNumber: string;
  raiffeisenCustomerNumber: string;
  raiffeisenFeePackage: string;
  assignedBnpBundle: string;
  assignedRaiffeisenBundle: string;
  assignedFeeTypes: Set<string>;
  fullName: string;
  nip: string;
  regon: string;
  type: string;
  branchMnemonic: string;
  businessLineKey: string;
  sectorName: string;
  active: boolean;
}
