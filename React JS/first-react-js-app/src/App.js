import { useState, useEffect } from "react";
function App() {
    const [counter, setValue] = useState(0); //we don't have to use React. bc it's alrdy running in the react app
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value); //2. we take the value of the input and deliever it to the modifting function
    console.log("i run all the time ");
    // const iRunOnlyOnce = () => {
    //     console.log("i run only once.");
    // };
    // useEffect(iRunOnlyOnce, []);//the function that I want to run, dependencies(the things that reactjs should watch)
    useEffect(() => {
        console.log("I run only once");
    }, []); //empty-> only once (at the beginning)
    useEffect(() => {
        console.log("I run when 'keyword' changes.");
    }, [keyword]); //only when the keyword changes. not the counter
    useEffect(() => {
        console.log("I run when the 'counter' changes.");
    }, [counter]);
    useEffect(() => {
        console.log("I run when the 'keyword' or 'counter' changes.");
    }, [keyword, counter]);
    return (
        <div>
            <input
                value={keyword} //3. we take the modified value, keyword and use it as the value of input
                onChange={onChange} // 1. when the change is detected we run the function 'onChange', receiving an argument
                type="text"
                placeholder="Search here..."
            />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}
//when the state changes all the codes of the component is rendered again.
//but we sometimes,like calling an api, we want to render only once.
//Then we use 'useEffect'

export default App;
