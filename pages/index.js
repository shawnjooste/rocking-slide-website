import Header from "@/src/components/Header";
import ScrollBar from "@/src/components/ScrollBar";
import About from "@/src/components/sections/About";
import Blog from "@/src/components/sections/Blog";
import Clients from "@/src/components/sections/Clients";
import Contact from "@/src/components/sections/Contact";
import Copyright from "@/src/components/sections/Copyright";
import Facts from "@/src/components/sections/Facts";
import Home from "@/src/components/sections/Home";
import Portfolio from "@/src/components/sections/Portfolio";
import Testimonials from "@/src/components/sections/Testimonials";
import Separator from "@/src/components/Separator";
import { initJqueryFuntion, initCustomScrollbar } from "@/src/utilits";
import { Fragment, useEffect } from "react";
const Index = () => {
  useEffect(() => {
    // Initialize jQuery functions synchronously
    initJqueryFuntion();
    
    // Initialize custom scrollbar after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initCustomScrollbar();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (window.$ && window.$('#wrapper').hasClass('mCustomScrollbar')) {
        window.$('#wrapper').mCustomScrollbar('destroy');
      }
    };
  }, []);

  return (
    <Fragment>
      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home />
            <About />
            <Separator type={"down"} />
            <Facts />
            <Separator type={"up"} />
            <Portfolio />
            <Separator type={"down"} />
            <Testimonials />
            <Separator type={"up"} />
            <Contact />
            <Separator type={"down"} />
            <Clients />
            <Separator type={"up"} />
            <Blog />
            <Separator type={"down"} />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};
export default Index;
