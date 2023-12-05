import { useState } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Banner from "../../components/banner/banner";
import About from "../../components/about/About";
import Protecting from "../../components/protecting/Protecting";

export default function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Banner />
      <About />
      <Protecting />
    </div>
  );
}
