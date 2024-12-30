import Button from "./Button";

export default function WordSidebar({ onStartAddWord, words, onSelectWord}) {
  return (
    <aside className="flex-col w-1/3 h-screen bg-stone-800 flex justify-start items-center mt-10 rounded-tr-2xl ">
      <h2 className="text-white text-3xl mt-8 font-bold mb-7">YOUR WORDS</h2>
      <Button onClick={onStartAddWord}>+Add Words</Button>
      <ul>
        {words.map((words) => (
          <li key={words.id} onClick={() => onSelectWord(words.id)} className="text-white text-lg">{words.word}</li> 
        ))}
      </ul>
    </aside>
  );
}
