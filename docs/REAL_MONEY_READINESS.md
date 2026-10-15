# Real-money readiness plan

## Current verified starting point

The repository is a Next.js 14 / React 18 UI prototype. Its README describes onboarding, login/sign-up, dashboard, money-transfer screens, investment tracking, and profile screens. A working UI is not proof of an operational financial service. The Android wrapper configured in this repository loads the existing HTTPS web deployment; it is not a native ledger or payment processor.

## Non-negotiable safety boundary

Until the backend, payment provider, settlement process, identity checks, and required approvals have been configured and independently tested, the app must not claim to hold real funds or complete real transfers. Do not add demo balances to production, trust balances supplied by the client, store payment-provider secrets in the app, or mark a transfer successful based only on a client-side response.

## Target architecture

1. **Android client** — authenticated interface, transaction review/confirmation, status and history. Never owns authoritative balances or payment secrets.
2. **Authenticated API** — validates identity, permissions, request schema, idempotency key, limits, and transaction state on every request.
3. **Database and double-entry ledger** — immutable journal entries; atomic debit/credit postings; unique idempotency keys; reconciliation and audit records. Displayed balance is derived from posted ledger entries, not edited by the client.
4. **Payment adapter** — server-side integration with the provider selected by the business. Verify signed webhooks, replay protection, amount/currency/reference, and provider status before posting ledger entries. Never trust a browser redirect as proof of payment.
5. **Operations and compliance** — role-based staff access, maker/checker approval for sensitive operations, fraud/rate limits, monitoring, reconciliation, dispute/refund handling, backups, incident response, and documented retention.
6. **Security** — HTTPS, secure session lifecycle, MFA for privileged users, secrets manager, least-privilege service accounts, dependency scanning, audit trails, and tested restore procedures.

## Initial product scope

- Account registration and verified sign-in.
- Profile and identity-verification status.
- Wallet overview backed by the server ledger.
- Transfer quote/review/explicit confirmation.
- Pending, posted, failed, reversed and disputed transaction states.
- Transaction history with server-side pagination.
- Deposit/withdrawal requests through an approved provider adapter.
- Admin operations with separate staff authentication and audit logging.

Investment products, interest/yield promises, lending, custody, and cross-border transfers should remain disabled until their legal, licensing, risk, and operational requirements are reviewed.

## Decisions and credentials required before live money

- Select the legal operator and confirm the applicable Bank of Sierra Leone requirements with qualified local counsel/compliance support.
- Choose the initial licensed/contracted payment partner (for example, an eligible Orange Money, Afrimoney, bank, or aggregator integration).
- Obtain the provider's official merchant/API documentation, sandbox credentials, webhook verification method, supported currencies, fees, limits, settlement account, refund process, and production approval.
- Choose and provision the production database/API hosting and secrets manager.
- Define KYC/AML rules, transaction limits, support/escalation process, and reconciliation ownership.
- Define the exact transfer types and who is permitted to approve them.

Never commit provider secrets, production credentials, private keys, real customer data, or KYC documents to GitHub. Supply secrets through the hosting provider's encrypted environment/secrets manager.

## Acceptance gates before launch

- Authentication and authorization tests pass for every API route.
- Ledger concurrency, idempotency, reversal, and reconciliation tests pass.
- Payment webhook signature, replay, wrong-amount, wrong-currency, duplicate-event, timeout, and out-of-order tests pass.
- Independent security review and penetration testing are completed.
- Sandbox end-to-end tests and provider production certification are completed.
- Privacy policy, terms, complaints/refunds, support contacts, and incident response are ready.
- Store listing and release signing are controlled by the business owner.

## Android build in this repository

The GitHub Actions workflow builds a debug APK wrapper from the hosted HTTPS app for device/emulator evaluation. It is not a signed production release and does not certify that money movement works. A production APK/AAB requires release signing, tested native configuration, backend readiness, provider approval, and release review.
