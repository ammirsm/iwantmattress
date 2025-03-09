import posthog from 'posthog-js';

// Initialize PostHog only in browser environment and when we have a PostHog token
export const initPostHog = () => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug();
      },
      // Disable capturing by default in development
      capture_pageview: process.env.NODE_ENV === 'production',
      // Disable autocapture in development to reduce noise
      autocapture: process.env.NODE_ENV === 'production',
      // Don't persist in localStorage while in development
      persistence: process.env.NODE_ENV === 'production' ? 'localStorage+cookie' : 'memory',
      // Disable session recording in development
      session_recording: {
        enabled: process.env.NODE_ENV === 'production',
      },
    });
  }
};

// Helper for manual event sending
export const captureEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture(eventName, properties);
  }
};

// Export PostHog for advanced usage
export { posthog }; 