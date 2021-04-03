import Head from "next/head";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="beta-web-nextJS" content="Web application" />
        <title>Beta NextJS App Typescript</title>
      </Head>

      {props.children}
    </>
  );
};

export default Layout;
