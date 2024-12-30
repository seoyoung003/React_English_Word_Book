export default function SelectedWord({words}) {
    return(
        <div>
            <h1>{words.word}</h1>
            <h3>{words.meaning}</h3>
        </div>
    )
}