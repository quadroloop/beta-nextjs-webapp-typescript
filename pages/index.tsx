import { useEffect } from "react";
import Layout from "../components/Layout";
import { startPageLoad, stopPageLoad, Toast } from "../components/Utils";

const Index = () => {
  useEffect(() => {
    startPageLoad();
    setTimeout(() => {
      stopPageLoad();
      Toast("Welcome to Beta");
    }, 5000);
  }, []);

  return (
    <>
      <Layout>
        <div className="mast">
         <div className="welcome">
           <i className="lab la-buffer la-6x shimmer-text"/>
           <h1 className="shimmer-text">Beta NextJS</h1>
           <p>Starter Boilerplate for NextJS Web Applications</p>
         </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
