import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

function Greeting() {
  const language = useContext(LanguageContext);
  return <h2>{language}</h2>;
}

export default function UseContextExample() {
  const [language, setLanguage] = useState("Welcome!");
  return (
    <LanguageContext.Provider value={language}>
      <h2>Language App</h2>
      <Greeting />

      <button
        onClick={() => {
          setLanguage("Welcome")
        }}
      >
        English
      </button>

      <button
        onClick={() => {
          setLanguage("स्वागत")
        }}
      >
        Hindi
      </button>
    </LanguageContext.Provider>
  );
}