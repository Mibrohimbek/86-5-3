import React from "react";
import Blog from "./Blog";
import App_using from "./App-using";
import Team from "./Team";
import Features from "./Features";
import Checkout from "./Checkout";
import About_section from "./About-section";
import Hero from "./Hero";

function Main() {
  return (
    <main>
      <Hero />
      <About_section />
      <Features />
      <Checkout />
      <App_using />
      <Team />
      <Blog />
    </main>
  );
}

export default Main;
