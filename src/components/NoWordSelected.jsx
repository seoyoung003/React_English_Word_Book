import noWord from "../assets/NoWord.png"
import Button from "./Button";

export default function NoWordSelected({onStartAddWord}) {
    return(
        <div >
            <img src={noWord} />
            <h2 className="">No Word Selected</h2>
            <p className="">Select a word or make a new word</p>
            <p className="mt-8">
                <Button onClick={onStartAddWord}>Create new word</Button>
            </p>
        </div>
    );
}