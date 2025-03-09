import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Layout from '@/components/layout/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initPostHog, posthog } from '@/lib/posthog';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Initialize PostHog when the app loads
  useEffect(() => {
    initPostHog();

    // Track page views when the route changes
    const handleRouteChange = () => {
      if (process.env.NODE_ENV === 'production') {
        posthog.capture('$pageview');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}