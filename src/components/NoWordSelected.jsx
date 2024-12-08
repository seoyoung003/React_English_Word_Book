import noWord from "../assets/NoWord.png"

export default function NoWordSelected({onStartAddProject}) {
    return(
        <div className="w-2/3">
            <img src={noWord} />
            <h2 className="">No Word Selected</h2>
            <p className="">Select a word or make a new word</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>Create new word</Button>
            </p>
        </div>
    );
}