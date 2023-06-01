import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer"

function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
        <Hero />
        <Skills />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
