import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import ArticlesTeaser from "@/components/ArticlesTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomeStructuredData from "@/components/HomeStructuredData";

export default function Home() {
  return (
    <>
      <HomeStructuredData />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <ArticlesTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
