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
            data-website-id="6eba0ad0-9d7b-47e7-89a3-dbdc08a8db69"
            src="https://aw.itsjavi.com/s/uma.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default RootDocument
