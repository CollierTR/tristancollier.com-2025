import Footer from "../componets/Footer";
import Nav from "../componets/Nav";
import SplitContact from "../componets/SplitContact";

const Contact = () => {
  return (
    <main className="w-full h-screen overflow-y-auto mx-auto">
      <Nav></Nav>
      <SplitContact></SplitContact>
      <Footer></Footer>
    </main>
  );
};

export default Contact;