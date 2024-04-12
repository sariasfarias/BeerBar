export interface IOrderItem {
    name: String;
    quantity: Number;
}

export interface IRoundItem {
    created: String;
    items: IOrderItem[];
}

export interface IRoundItemInformation {
    created: String;
    items: IOrderItem[];
    index: Number
}

export interface IItem {
    name: String;
    price_per_unit: Number;
    total: Number;
}

export interface IOrder {
    created?: String;
    paid?: Boolean;
    subtotal?: String;
    taxes?: String;
    discounts?: String;
    items?: IItem[];
    rounds?: IRoundItem[];
}

export interface IOrderButton {
    title: String;
    orderId: Number;
}

export interface IOrderDetail {
    orderId: Number;
}

export interface IErrorNotification {
    isOpen: boolean;
}