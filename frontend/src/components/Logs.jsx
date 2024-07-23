import LogObject from "./LogObject";
import { useEffect, useState } from "react";
import axios from "axios";

const Logs = ({ query }) => {
    const [logs, setLogs] = useState([]);
    const [x, setX] = useState(0)
    useEffect(() => {
        console.log("loaded", "query: ", query);
        if (Object.keys(query).length == 0) {
            return
        }
        const getLogs = async () => {
            console.log("fetch ran...")
            const response = await axios.post(
                "http://localhost:3000/api/logs/filterLogs",
                query
            );
            setLogs(response.data);
        };

        getLogs();
    }, [query]);

    return (
        <div className="min-h-screen bg-gray-700 pb-10">
            <div className="px-10">
                <div className="font-bold text-2xl tracking-wide text-gray-300 py-5 text-center">
                    Fitlered Logs
                </div>
                {logs.map((log) => {
                    return <LogObject key={log._id} props={log}></LogObject>;
                })}
            </div>
        </div>
    );
};

export default Logs;
