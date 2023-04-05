import '@/styles/globals.css'
import '@/styles/markdown.css'
import '@/styles/components.css'
import '@/styles/pages.css'
import '@/styles/code-block.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
