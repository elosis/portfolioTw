/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import "../styles/globals.css";

interface MyAppProps {
  Component: any;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
