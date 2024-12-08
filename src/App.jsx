import WordSidebar from "./components/WordSidebar"
import { useState } from "react";

export default function App() {
const[wordState, setWordState] = useState({
  selectedWordId : undefined,
  words : [],
});



  return(
    <main>
      <WordSidebar words={wordState}/>
      {content}
    </main>
  );
    
}



