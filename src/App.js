import { Fragment, useState } from "react";

export default function App() {
  const [language, setLanguage] = useState(
    "https://repl.it/@sammyfak/front-end?lite=true"
  );

  const languageSet = (
    <iframe
      title="front-end"
      height="900px"
      width="100%"
      src={language}
      scrolling="yes"
      frameborder="0"
      allowtransparency="true"
      allowfullscreen="true"
      sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
    ></iframe>
  );

  const [editor, setEditor] = useState(languageSet);

  function handleFrontEnd(e) {
    e.preventDefault();
    setEditor(languageSet);
    setLanguage("https://repl.it/@sammyfak/front-end");
  }

  function handlePython(e) {
    e.preventDefault();
    setEditor(languageSet);
    setLanguage("https://repl.it/@sammyfak/chattel-python?lite=true");
    // https://repl.it/join/pmaxedxb-sammyfak
  }

  function handleDjango(e) {
    e.preventDefault();
    setEditor(languageSet);
    setLanguage("https://repl.it/join/pmaxedxb-sammyfak");
    // 
  }

  function handleJava(e) {
    e.preventDefault();
    setEditor(languageSet);
    setLanguage("https://repl.it/@sammyfak/java?lite=true");
  }

  function handleC(e) {
    e.preventDefault();
    setEditor(languageSet);
    setLanguage("https://repl.it/join/oggrhxuh-sammyfak");
  }

  function handleCpp(e) {
    e.preventDefault();
    setEditor(languageSet);
    setLanguage("https://repl.it/join/cpp-sammyfak");
  }

  return (
    <Fragment>
      <button onClick={handleFrontEnd}>HTML, CSS, JS</button>
      <button onClick={handlePython}>Python Editor</button>
      <button onClick={handleJava}>Java IDE</button>
      <button onClick={handleC}>C IDE</button>
      <button onClick={handleDjango}>Django IDE</button>
      <button onClick={handleCpp}>C++ IDE</button>
      {editor}
    </Fragment>
  );
}
