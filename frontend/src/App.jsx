import Header from "./components/Header"
import BuildQuery from "./components/BuildQuery"
import Logs from "./components/Logs"
import { useState, useMemo } from "react"
function App() {
    const [query, setQuery] = useState({})

    const memoizedQuery = useMemo(() => query, [query])
    return (
        <div>
            <Header></Header>
            <BuildQuery setQuery={setQuery}></BuildQuery>
            <Logs query={memoizedQuery}></Logs>
        </div>
    )
}

export default App