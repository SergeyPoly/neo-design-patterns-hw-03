import { PaymentProviderFactory } from './PaymentProviderFactory';
import { StripeFactory } from '../providers/stripe/StripeFactory';
import { PaypalFactory } from '../providers/paypal/PaypalFactory';
import { AppleFactory } from '../providers/apple/AppleFactory';
import { ProviderType } from './ProviderType';

export class ConfigurablePaymentFactory {
  static createFactory(type: ProviderType): PaymentProviderFactory {
    switch (type) {
      case ProviderType.STRIPE:
        return new StripeFactory();
      case ProviderType.PAYPAL:
        return new PaypalFactory();
      case ProviderType.APPLE:
        return new AppleFactory();
      default:
        const exhaustiveCheck: never = type;
        throw new Error(`Unknown provider: ${exhaustiveCheck}`);
    }
  }
}
