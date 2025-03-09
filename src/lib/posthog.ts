import posthog from 'posthog-js';

// Initialize PostHog only in browser environment and when we have a PostHog token
export const initPostHog = () => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    // Check if we're in production (enable all features) or development (limited features)
    const isProd = process.env.NODE_ENV === 'production';

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      // Enable debug mode in development
      loaded: (posthog) => {
        if (!isProd) posthog.debug();
        
        // Disable session recording in development
        if (!isProd) {
          posthog.opt_out_capturing();
        }
      },
      capture_pageview: isProd,
      autocapture: isProd,
      persistence: isProd ? 'localStorage+cookie' : 'memory',
    });
  }
};

// Helper for manual event sending
export const captureEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    // Only send events in production unless forced
    if (process.env.NODE_ENV === 'production' || properties?.force) {
      const { force, ...restProps } = properties || {};
      posthog.capture(eventName, restProps);
    }
  }
};

// Export PostHog for advanced usage
export { posthog }; 