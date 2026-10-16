# FinTech product decisions and current status

- Initial provider preference: Monime.
- Wallet display currency preference: Sierra Leonean leone (SLE).
- Merchant/API credentials: not yet available.
- Initial integration mode: sandbox only after a merchant sandbox account and approved product scope are provided.
- Real-money customer balances, stored value, peer-to-peer transfers, and investment features: NOT enabled.
- Android artifact: debug-only wrapper for testing; not a production financial app.

## Required next input from the business owner

Obtain Monime merchant onboarding and sandbox access, then provide only non-secret information about the approved products and integration documentation. Add tokens to the server-side secrets manager yourself. Do not paste API keys, passwords, customer details, or webhook secrets into ChatGPT or source control.

Before live use, confirm the operating company's legal status, licensing/regulated-partner arrangement, KYC/AML requirements, data protection obligations, transaction limits, customer terms, complaints and refunds, settlement account, reconciliation ownership, and production approval.
