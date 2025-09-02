import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [block, setBlock] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/latest-block`)
            .then(res => setBlock(res.data));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Ethereum Monitor</h1>
            {block ? (
                <>
                    <p>Latest Block: {block.number}</p>
                    <p>Hash: {block.hash}</p>
                    <p>Timestamp: {new Date(block.timestamp * 1000).toLocaleString()}</p>
                </>
            ) : (
                <p>Loading latest block...</p>
            )}
        </div>
    );
}

export default App
