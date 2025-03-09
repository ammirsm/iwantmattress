import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Layout from '@/components/layout/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initPostHog, posthog, captureEvent } from '@/lib/posthog';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Initialize PostHog when the app loads
  useEffect(() => {
    initPostHog();

    // Track page views when the route changes
    const handleRouteChange = () => {
      captureEvent('page_view', { 
        path: router.asPath,
        force: true // Allow capturing even in development for testing
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, router.asPath]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}