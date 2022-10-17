import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Customize1 from "../components/Customize1";
import Customize2 from "../components/Customize2";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Services />
      <Customize1 />
      <Customize2 />
      <Form />
      <Footer />
    </div>
  );
}
