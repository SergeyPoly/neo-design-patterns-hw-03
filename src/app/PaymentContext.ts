import { PaymentProviderFactory } from '../core/PaymentProviderFactory';
import { v4 as uuidv4 } from 'uuid';

export class PaymentContext {
  constructor(private factory: PaymentProviderFactory) {}

  processPayment(amount: number): void {
    const provider = this.factory.createPaymentProvider();
    const transactionId = uuidv4();

    provider.authorize(amount);
    provider.capture(transactionId);
    provider.refund(transactionId);
  }
}
