# Monime-first payment integration onboarding

Selected direction: Monime first, SLE wallet display, merchant credentials not yet available.

## Stage 1 — merchant onboarding (no secrets in chat or Git)

1. Visit the official Monime website and use its business onboarding/contact flow to confirm eligibility for this use case.
2. Tell Monime that the product is a Sierra Leone fintech mobile app and describe the intended flow precisely: whether it is only collecting payments for the operator's own goods/services or whether it will hold customer balances, accept deposits, and make payouts/transfers between users.
3. Ask Monime to confirm in writing which of those use cases are supported for the business and which require separate licences, agreements, safeguards, or a bank/regulated partner.
4. Request a sandbox account and current API documentation for the exact products approved: checkout/collections, mobile-money methods, payouts/disbursements, refunds, status lookup, and webhooks.
5. Ask for sandbox API token(s), webhook signing/verification instructions, test identities/numbers, supported currency codes and minor-unit rules, transaction limits, fees, settlement timing, dispute/refund handling, idempotency requirements, and production activation criteria.
6. Put credentials only in the backend host's encrypted secret/environment manager. Never send them in chat, commit them to GitHub, put them in the Android app, or expose them to browser JavaScript.

Official resources:
- Monime website: https://monime.io/
- API documentation: https://docs.monime.io/
- API reference: https://docs.monime.io/apis/

## Important distinction: payment collection versus wallet custody

A merchant checkout integration that collects payment for the operator's own service is not automatically authorization to issue stored-value wallets, hold customer funds, transfer funds between users, or offer investments. Do not implement customer-fund custody or P2P money movement until the applicable legal and provider approvals are confirmed.

The National Payment Systems Act, 2022 places payment services within the Bank of Sierra Leone's regulatory framework. Obtain qualified Sierra Leone legal/compliance advice and written guidance from the relevant regulator and provider before live operation. See https://sierralii.gov.sl/akn/sl/act/2022/8/eng%402022-06-23 and https://bsl.gov.sl/Legislation.html.

## Stage 2 — engineering after sandbox access

- Implement the provider integration only in a server-side API/service.
- Verify webhook signatures exactly as Monime documents; reject invalid signatures and replayed events.
- Validate amount, currency, reference, customer, status, and event uniqueness server-side.
- Make payment requests idempotent and keep an auditable state machine.
- Do not mark an operation as paid based on a browser redirect or client message.
- Test success, failure, cancellation, timeout, duplicate webhook, wrong amount/currency, replay, refund/reversal, and delayed/out-of-order notifications.
- Reconcile provider reports against the internal ledger.
- Keep live mode disabled until security review, operational reconciliation, compliance, and written provider approval are complete.

## Currency note

The requested wallet display currency is SLE. Confirm Monime's current supported currency codes and whether every selected payment method settles in SLE before enabling transactions. Store monetary values as integer minor units according to the provider's current API specification; do not assume a conversion rate or silently mix currencies.
