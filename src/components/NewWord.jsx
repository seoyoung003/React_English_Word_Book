import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";

export default function NewWord({cancelWord, addNewWord}) {

    const wordRef = useRef();
    const meaningRef = useRef();

    function handleAddButton() {
        const word = wordRef.current.value;
        const meaning = meaningRef.current.value;


        addNewWord({
            word: word,
            meaning: meaning
        })
    }
    
    
    return(
        <div>
            <div>
                <Input ref={wordRef}  type="text" name="word" />
                <Input ref={meaningRef} type="text" name="meaning"  textarea/>
            <div>
             <Button onClick={handleAddButton}>Add</Button>
            </div>

            <div>
                <Button onClick={cancelWord}>Cancel</Button>
            </div>

            
            

            </div>
        </div>

        

    );
}