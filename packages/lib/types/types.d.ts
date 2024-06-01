 
export type Invoice = {
    id: number;
    amount: number;
    transctions: Transaction[];
    service: PaymentOption;
}

export type Transaction = {
    id: number;
    amount: number;
    date: Date;
}

export const PaymentOptions = ["physical", "digital"] as const;
export type PaymentOption = typeof PaymentOptions[number];

export as namespace Types;