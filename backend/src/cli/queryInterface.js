import { useState } from "react";

const BuildQuery = ({ setQuery }) => {
    const [level, setLevel] = useState("");
    const [resourceId, setResourceId] = useState("");
    const [timestamp, setTimestamp] = useState("");
    const [traceId, setTraceId] = useState("");
    const [spanId, setSpanId] = useState("");
    const [commit, setCommit] = useState("");
    const [presourceId, setPresourceId] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleClick = () => {
        let query = {};

        if (level) query.level = level;
        if (resourceId) query.resourceId = resourceId;
        if (traceId) query.traceId = traceId;
        if (spanId) query.spanId = spanId;
        if (commit) query.commit = commit;
        if (presourceId) query["metadata.parentResourceId"] = presourceId;

        if (startTime || endTime) {
            query.timestamp = {};
            if (startTime) query.timestamp.$gte = new Date(startTime).toISOString();
            if (endTime) query.timestamp.$lte = new Date(endTime).toISOString();
        }

        setQuery(query);
        console.log("query: ", query);
    };

    return (
        <div className="bg-[#fffce8] py-8 px-10 flex flex-row items-center justify-center space-x-16">
            <div className="flex flex-col space-y-3 text-gray-800 w-1/3">
                <label className="flex flex-col">
                    Level
                    <input
                        placeholder="level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="mt-1 p-2 border border-gray-400 rounded"
                    />
                </label>
                <label className="flex flex-col">
                    Resource ID
                    <input
                        placeholder="resourceId"
                        value={resourceId}
                        onChange={(e) => setResourceId(e.target.value)}
                        className="mt-1 p-2 border border-gray-400 rounded"
                    />
                </label>
                <label className="flex flex-col">
                    Trace ID
                    <input
                        placeholder="traceId"
                        value={traceId}
                        onChange={(e) => setTraceId(e.target.value)}
                        className="mt-1 p-2 border border-gray-400 rounded"
                    />
                </label>
                <label className="flex flex-col">
                    Span ID
                    <input
                        placeholder="spanId"
                        value={spanId}
                        onChange={(e) => setSpanId(e.target.value)}
                        className="mt-1 p-2 border border-gray-400 rounded"
                    />
                </label>
                <label className="flex flex-col">
                    Commit
                    <input
                        placeholder="commit"
                        value={commit}
                        onChange={(e) => setCommit(e.target.value)}
                        className="mt-1 p-2 border border-gray-400 rounded"
                    />
                </label>
                <label className="flex flex-col">
                    Parent Resource ID
                    <input
                        placeholder="parent resource ID"
                        value={presourceId}
                        onChange={(e) => setPresourceId(e.target.value)}
                        className="mt-1 p-2 border border-gray-400 rounded"
                    />
                </label>
                <label className="flex flex-col">
                    Start Time
                    <input
                        type="datetime-local"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="mt-1 p-2 border border-gray-400 rounded"
                    />
                </label>
                <label className="flex flex-col">
                    End Time
                    <input
                        type="datetime-local"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="mt-1 p-2 border border-gray-400 rounded"
                    />
                </label>
            </div>

            <div className="w-1/3 p-4 border border-gray-400 rounded bg-white">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Query:
                </h2>
                {level && (
                    <div className="text-lg text-gray-600">Level: {level}</div>
                )}
                {resourceId && (
                    <div className="text-lg text-gray-600">
                        Resource ID: {resourceId}
                    </div>
                )}
                {timestamp && (
                    <div className="text-lg text-gray-600">
                        Timestamp: {timestamp}
                    </div>
                )}
                {traceId && (
                    <div className="text-lg text-gray-600">
                        Trace ID: {traceId}
                    </div>
                )}
                {spanId && (
                    <div className="text-lg text-gray-600">
                        Span ID: {spanId}
                    </div>
                )}
                {commit && (
                    <div className="text-lg text-gray-600">
                        Commit: {commit}
                    </div>
                )}
                {presourceId && (
                    <div className="text-lg text-gray-600">
                        Parent Resource ID: {presourceId}
                    </div>
                )}
                {startTime && (
                    <div className="text-lg text-gray-600">
                        Start Time: {new Date(startTime).toLocaleString()}
                    </div>
                )}
                {endTime && (
                    <div className="text-lg text-gray-600">
                        End Time: {new Date(endTime).toLocaleString()}
                    </div>
                )}
                <button
                    className="mt-4 px-10 py-4 text-white font-semibold text-lg bg-gray-800 rounded-lg shadow-sm hover:bg-gray-900"
                    onClick={handleClick}
                >
                    Send Query
                </button>
            </div>
        </div>
    );
};

export default BuildQuery;