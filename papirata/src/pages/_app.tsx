import type { AppProps } from 'next/app'
import "./globals.css";

const noLayout: React.FC<React.PropsWithChildren> = ({ children }) => children;

export default function App({ Component, pageProps }: AppProps) {

  const Layout = Component.layout ?? noLayout;

  return <Layout><Component {...pageProps} /></Layout>
}