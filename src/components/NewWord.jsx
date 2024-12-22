import Input from "./Input";
import Button from "./Button";

export default function NewWord(cancelWord, addNewWord) {
    
    return(
        <div>
            <div>
            <Input label={Word}/>
            <Input textarea={textarea} label={Meaning}/>

            <Button onclick={addNewWord}>Add</Button>
            <Button onclick={cancelWord}>Cancel</Button>

            </div>
        </div>

        

    );
}