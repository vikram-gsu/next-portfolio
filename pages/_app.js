import React from 'react';
import App from 'next/app';
// import {NextPage, NextPageContext} from 'next';
import Page from '../components/Page.tsx';

// class MyApp extends App<AppProps> {
//   static async getInitialProps({ Component, ctx }: {Component: NextPage, ctx: NextPageContext}) {
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = { pathname: ctx.pathname };
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      pageProps = { ...pageProps, pathname: ctx.pathname };
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Page pathname={pageProps.pathname}>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default MyApp;
