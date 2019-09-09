import React from 'react';
import App, { Container } from 'next/app';
// import {NextPage, NextPageContext} from 'next';
// import {withRouter, Router} from 'next/router';
import {withRouter} from 'next/router';
import Page from '../components/Page.tsx';

// class MyApp extends App<AppProps> {
//   static async getInitialProps({ Component, ctx }: {Component: NextPage, ctx: NextPageContext}) {
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
          <Page pathname={router.pathname}>
            <Component {...pageProps} />
          </Page>
      </Container>
    );
  }
}

export default withRouter(MyApp);
