import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import AdventureSection from "./components/AdventureSection";
import TourSection from "./components/TourSection";
import FeedbackSection from "./components/FeedbackSection";
import BookSection from "./components/BookSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Header />
      <main>
        <AboutSection />
        <AdventureSection />
        <TourSection />
        <FeedbackSection />
        <BookSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
