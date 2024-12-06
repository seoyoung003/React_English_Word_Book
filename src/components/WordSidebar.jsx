import Button from "./Button";

export default function WordSidebar() {
    return(
        <aside className="flex-col w-1/3 h-screen bg-stone-800 flex justify-start items-center mt-10 rounded-tr-2xl ">
            <h2 className="text-white text-3xl mt-8 font-bold mb-7">YOUR WORDS</h2>
            <Button>+Add Words</Button>
            <ul>


            </ul>
        </aside>
    );
}