export default function Button({children, ...props}) {
    return(
        <button className="text-white bg-stone-600 rounded text-2xl mt-8" {...props}>{children}</button>
    );
    
}