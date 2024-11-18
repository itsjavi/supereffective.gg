import Document, { Head, Html, Main, NextScript } from 'next/document'

import DocumentHeadContent from '@/lib/components/layout/DocumentHeadContent'
import Script from 'next/script'

class RootDocument extends Document {
  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <DocumentHeadContent />
        </Head>
        <body>
          <Script
            defer
            data-domain="supereffective.gg"
            data-api="https://plaw.itsjavi.com/api/plaw"
            src="https://plaw.itsjavi.com/js/plaw.tagged-events.js"
          />
          <Main />
          <NextScript />
          {/* <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "ebc18611cf774bbdaa215928f9fa7d8b"}'
          /> */}
        </body>
      </Html>
    )
  }
}

export default RootDocument
