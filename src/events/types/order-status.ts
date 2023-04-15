export enum OrderStatus {
  //When order is created, but ticket is not yet reserved
  Created = "created",

  //When order tries to reserve an existing reserved ticket, or when user has cancelled the order, or if order expires before payment
  Cancelled = "cancelled",

  //When order has successfully reserved the ticket
  AwaitingPayment = "awaiting:payment",

  //When order has reserved and payment is successful
  Complete = "complete",
}
