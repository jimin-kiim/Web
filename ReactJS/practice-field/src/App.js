import { useState, useEffect } from "react";
function Hello() {
    // function byeFn() {
    //     console.log("bye :(");
    // }
    // function hiFn() {
    //     console.log("hi :)");
    //     return byeFn; //clean up function
    // }
    useEffect(() => {
        //when the <Hello /> comes up again, this function also runs again
        console.log("created :)");
        return () => console.log("destroyed :("); //when the component is destroyed
    }, []);
    // useEffect(hiFn, []); //allows us to choose when to run the code
    return <h1>Helllo</h1>;
}
function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev); //recieve the previous value and make it opposite.
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}
export default App;
// when we write in javascript, we should use curly braces {}
