import { useEffect } from "react";
import Layout from "../components/Layout";
import { startPageLoad, stopPageLoad, Toast } from "../components/Utils";

const Index = () => {
  useEffect(() => {
    startPageLoad();
    setTimeout(() => {
      stopPageLoad();
      Toast("Welcome to beta");
    }, 5000);
  }, []);

  return (
    <>
      <Layout>
        <h1 className="fade-in-bottom">Beta NextJS</h1>
      </Layout>
    </>
  );
};

export default Index;
