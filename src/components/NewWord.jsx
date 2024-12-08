import Input from "./Input";

export default function NewWord() {
    
    return(
        <div>
            <Input label={Word}/>
            <Input textarea={textarea} label={Meaning}/>
        </div>

        

    );
}