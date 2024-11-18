import type { AppProps } from 'next/app'

import AppProviders from './AppProviders'
import ErrorBoundary from './ErrorBoundary'
import PageSkeleton from './PageSkeleton'

function AppLayout({ Component, pageProps }: AppProps | any) {
  return (
    <AppProviders>
      <ErrorBoundary>
        <PageSkeleton>
          <Component {...pageProps} />
        </PageSkeleton>
      </ErrorBoundary>
    </AppProviders>
  )
}

export default AppLayout
