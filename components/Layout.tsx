import Head from "next/head";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="beta-web" content="Web application" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>Beta NextJS App Typescript</title>
      </Head>

      {props.children}
    </>
  );
};

export default Layout;
