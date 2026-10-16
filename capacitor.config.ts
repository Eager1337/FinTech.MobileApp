import type { CapacitorConfig } from "@capacitor/cli";

/**
 * Android wrapper for the hosted FinTech Sierra Leone app.
 *
 * This wrapper points at the existing HTTPS deployment. It does not itself
 * provide authentication, wallet balances, transfers, or payment processing.
 * Replace the URL only after the production domain and backend are approved.
 */
const config: CapacitorConfig = {
  appId: "sl.eagerbeaver.fintech",
  appName: "FinTech Sierra Leone",
  webDir: "public",
  server: {
    url: "https://fintechbeaver.vercel.app",
    cleartext: false,
    androidScheme: "https",
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
