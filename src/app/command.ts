export interface Command {
    name?: string,
    address?: string,
    creditCard?: string,
}

export interface OrderConfirm {
    orderNumber: number,
}