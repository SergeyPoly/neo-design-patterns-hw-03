import { ConfigurablePaymentFactory } from './core/ConfigurablePaymentFactory';
import { ProviderType } from './core/ProviderType';
import { PaymentContext } from './app/PaymentContext';

// Отримуємо провайдера і суму з командного рядка
const provider = process.argv[2]?.toLowerCase() || 'stripe';
const amount = +process.argv[3]?.toLowerCase() || 100;

try {
  // Створюємо відповідну фабрику
  const factory = ConfigurablePaymentFactory.createFactory(
    provider as ProviderType
  );

  // Створюємо контекст та обробляємо платіж
  const context = new PaymentContext(factory);
  context.processPayment(amount);
} catch (e: unknown) {
  if (e instanceof Error) {
    console.error(e.message);
  } else {
    console.error('Unknown error:', e);
  }
}
