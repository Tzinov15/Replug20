/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_AUTH0_AUDIENCE: string;
  readonly VITE_FRONTERA_GRAPHQL_ENDPOINT: string;
  readonly VITE_DATADOG_APPLICATION_ID: string;
  readonly VITE_DATADOG_CLIENT_TOKEN: string;
  readonly VITE_COMMIT_HASH: string;
  readonly VITE_STRIPE_KEY: string;
  readonly VITE_LAUNCH_DARKLY_CLIENT_ID: string;
  readonly VITE_REPORT_POLLING_INTERVAL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
