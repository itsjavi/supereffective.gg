import Document, { Head, Html, Main, NextScript } from 'next/document'

import DocumentHeadContent from '@/lib/components/layout/DocumentHeadContent'

class RootDocument extends Document {
  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <DocumentHeadContent />
          <script
            defer
            data-domain="supereffective.gg"
            data-api="https://plaw.itsjavi.com/api/plaw"
            src="https://plaw.itsjavi.com/js/plaw.tagged-events.js"
          />
        </Head>
        <body>
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
