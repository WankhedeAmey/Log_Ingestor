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

        // Handle time range
        if (startTime || endTime) {
            query.timestamp = {};
            if (startTime)
                query.timestamp.$gte = new Date(startTime).toISOString();
            if (endTime) query.timestamp.$lte = new Date(endTime).toISOString();
        }

        setQuery(query);
    };

    return (
        <div className="p-6 bg-gray-900 text-gray-100 flex flex-row items-center justify-center space-x-8 font-mono">
            <div className="flex flex-col space-y-4 w-1/3">
                <label className="flex flex-col">
                    <span className="text-gray-300">Level</span>
                    <input
                        placeholder="level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="mt-1 p-2 border border-gray-600 rounded bg-gray-800 text-gray-100 focus:border-[#9ACD32] focus:outline-none"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-gray-300">Resource ID</span>
                    <input
                        placeholder="resourceId"
                        value={resourceId}
                        onChange={(e) => setResourceId(e.target.value)}
                        className="mt-1 p-2 border border-gray-600 rounded bg-gray-800 text-gray-100 focus:border-[#9ACD32] focus:outline-none"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-gray-300">Trace ID</span>
                    <input
                        placeholder="traceId"
                        value={traceId}
                        onChange={(e) => setTraceId(e.target.value)}
                        className="mt-1 p-2 border border-gray-600 rounded bg-gray-800 text-gray-100 focus:border-[#9ACD32] focus:outline-none"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-gray-300">Span ID</span>
                    <input
                        placeholder="spanId"
                        value={spanId}
                        onChange={(e) => setSpanId(e.target.value)}
                        className="mt-1 p-2 border border-gray-600 rounded bg-gray-800 text-gray-100 focus:border-[#9ACD32] focus:outline-none"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-gray-300">Commit</span>
                    <input
                        placeholder="commit"
                        value={commit}
                        onChange={(e) => setCommit(e.target.value)}
                        className="mt-1 p-2 border border-gray-600 rounded bg-gray-800 text-gray-100 focus:border-[#9ACD32] focus:outline-none"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-gray-300">Parent Resource ID</span>
                    <input
                        placeholder="parent resource ID"
                        value={presourceId}
                        onChange={(e) => setPresourceId(e.target.value)}
                        className="mt-1 p-2 border border-gray-600 rounded bg-gray-800 text-gray-100 focus:border-[#9ACD32] focus:outline-none"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-gray-300">Start Time</span>
                    <input
                        type="datetime-local"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="mt-1 p-2 border border-gray-600 rounded bg-gray-800 text-gray-100 focus:border-[#9ACD32] focus:outline-none"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-gray-300">End Time</span>
                    <input
                        type="datetime-local"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="mt-1 p-2 border border-gray-600 rounded bg-gray-800 text-gray-100 focus:border-[#9ACD32] focus:outline-none"
                    />
                </label>
            </div>

            <div className="w-1/3 p-4 border border-gray-600 rounded bg-gray-800">
                <h2 className="text-xl font-semibold text-gray-300 mb-4">
                    Query:
                </h2>
                <div className="p-2 border border-gray-300 rounded-lg">
                    {level && (
                        <div className="text-md text-gray-100">
                            <strong className="text-gray-300">Level:</strong>{" "}
                            <span>{level}</span>
                        </div>
                    )}
                    {resourceId && (
                        <div className="text-md text-gray-100">
                            <strong className="text-gray-300">
                                Resource ID:
                            </strong>{" "}
                            <span>{resourceId}</span>
                        </div>
                    )}
                    {timestamp && (
                        <div className="text-md text-gray-100">
                            <strong className="text-gray-300">
                                Timestamp:
                            </strong>{" "}
                            <span>{timestamp}</span>
                        </div>
                    )}
                    {traceId && (
                        <div className="text-md text-gray-100">
                            <strong className="text-gray-300">Trace ID:</strong>{" "}
                            <span>{traceId}</span>
                        </div>
                    )}
                    {spanId && (
                        <div className="text-md text-gray-100">
                            <strong className="text-gray-300">Span ID:</strong>{" "}
                            <span>{spanId}</span>
                        </div>
                    )}
                    {commit && (
                        <div className="text-md text-gray-100">
                            <strong className="text-gray-300">Commit:</strong>{" "}
                            <span>{commit}</span>
                        </div>
                    )}
                    {presourceId && (
                        <div className="text-md text-gray-100">
                            <strong className="text-gray-300">
                                Parent Resource ID:
                            </strong>{" "}
                            <span>{presourceId}</span>
                        </div>
                    )}
                    {startTime && (
                        <div className="text-md text-gray-100">
                            <strong className="text-gray-300">
                                Start Time:
                            </strong>{" "}
                            <span>{new Date(startTime).toLocaleString()}</span>
                        </div>
                    )}
                    {endTime && (
                        <div className="text-md text-gray-100">
                            <strong className="text-gray-300">End Time:</strong>{" "}
                            <span>{new Date(endTime).toLocaleString()}</span>
                        </div>
                    )}
                </div>
                <button
                    className="mt-4 px-8 py-2 text-white font-semibold text-lg bg-gray-600 rounded-lg shadow-sm hover:bg-gray-700"
                    onClick={handleClick}
                >
                    Send Query
                </button>
            </div>
        </div>
    );
};

export default BuildQuery;
