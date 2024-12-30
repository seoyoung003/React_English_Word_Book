import WordSidebar from "./components/WordSidebar";
import { useState } from "react";
import SelectedWord from "./components/SelectedWord";
import NewWord from "./components/NewWord"
import NoWordSelected from "./components/NoWordSelected";

export default function App() {
const[wordState, setWordState] = useState({
  selectedWordId : undefined,
  words : [],
});

function handleSelectWord(id) {
  setWordState((prevState) => {
    return{
      ...prevState, 
      selectedWordId : id,
    }
  })
}

function handleAddWord() {
  setWordState((prevState) => {
    return{
      ...prevState, 
      selectedWordId: null,
    };
  });
}


function handleCancelWord() {
  setWordState((prevState) => {
    return{
      ...prevState, 
      selectedWordId: undefined,
    };
  });
}

function handleAddNewWord(wordData) {
  setWordState((prevState) => {
    
      const wordId = Math.floor((Math.random() * 100));
      const newWord = {
        ...wordData, 
        id: wordId
      }

      return{
        ...prevState,
        selectedWordId: undefined,
        words: [...prevState.words, newWord]
      }
    
  })
}

  const selectedWord = wordState.words.find((word) => word.id === wordState.selectedWordId);

  let content;


  if(wordState.selectedWordId === undefined) {
    content = <NoWordSelected onStartAddWord={handleAddWord}/>
  } else if (wordState.selectedWordId === null) {
    content = <NewWord cancelWord={handleCancelWord} addNewWord = {handleAddNewWord}/>

  } else {
    content = <SelectedWord words={selectedWord}/>
  }
  return(
    <main className="flex h-screen">
      <WordSidebar onStartAddWord={handleAddWord} words={wordState.words} onSelectWord= {handleSelectWord}/>
      <div className="flex-1 flex items-center justify-center">{content}</div>
      
    </main>
  );
    
}



