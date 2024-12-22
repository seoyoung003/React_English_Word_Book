import WordSidebar from "./components/WordSidebar"
import { useState } from "react";

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

  const selectedProject = wordState.words.find((word) => word.id === wordState.selectedWordId);

  let content = <SelectedWord/>


  if(wordState.selectedWordId === undefined) {
    content = <NewWord cancelWord={handleCancelWord} addNewWord = {handleAddNewWord}/>
  } else if (wordState.selectedWordId === null) {
    content = <NoWordSelected AddWord={handleAddWord}/>
  }
  return(
    <main>
      <WordSidebar words={wordState.words}/>
      {content}
    </main>
  );
    
}



