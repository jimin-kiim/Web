import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [amount, setInput] = useState("");
    const [select, setSelect] = useState(false);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    const onChange = (event) => setInput(event.target.value);
    const onSelect = (event) =>
        setSelect(event.target.value.replace(/[^0-9.]/g, ""));
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>loading</strong>
            ) : (
                <div>
                    <div>
                        <span>"I have </span>
                        <input value={amount} onChange={onChange}></input>
                        <span> dollars."</span>
                    </div>
                    <span>"I want to buy </span>
                    <select onChange={onSelect}>
                        {coins.map((coin) => (
                            <option key={coin.id}>
                                {coin.name} ({coin.symbol}) : $
                                {coin.quotes.USD.price.toFixed(2)}
                                USD
                            </option>
                        ))}
                        ;
                    </select>
                    <span>"</span>
                    {select ? (
                        <h3>You can buy {Math.floor(amount / select)} coin</h3>
                    ) : null}
                </div>
            )}
        </div>
    );
}
export default App;
