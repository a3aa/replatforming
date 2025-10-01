import type { AppProps } from 'next/app'

const noLayout = ({ children }) => children;

export default function App({ Component, pageProps }: AppProps) {

  const Layout = Component.layout ?? noLayout;
  return
    (<Layout>
      <Component {...pageProps} />
    </Layout>);
}