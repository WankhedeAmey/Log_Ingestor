import React from "react";

const LogObject = (props) => {
    const {
        level,
        message,
        resourceId,
        timestamp,
        traceId,
        spanId,
        commit,
        metadata,
    } = props.props;

    return (
        <div className="font-mono p-4 border border-gray-600 rounded-lg mb-4 bg-gray-900 text-gray-100 shadow-md text-sm hover:shadow-md hover:shadow-green-300 ">
            <div className="mb-2">
                <strong className="text-gray-300">Level:</strong>{" "}
                <span className="text-[#9ACD32]">{level}</span>
            </div>
            <div className="mb-2">
                <strong className="text-gray-300">Message:</strong>{" "}
                <span className="text-[#9ACD32]">{message}</span>
            </div>
            <div className="mb-2">
                <strong className="text-gray-300">Resource ID:</strong>{" "}
                <span className="text-[#9ACD32]">{resourceId}</span>
            </div>
            <div className="mb-2">
                <strong className="text-gray-300">Timestamp:</strong>{" "}
                <span className="text-[#9ACD32]">{timestamp}</span>
            </div>
            <div className="mb-2">
                <strong className="text-gray-300">Trace ID:</strong>{" "}
                <span className="text-[#9ACD32]">{traceId}</span>
            </div>
            <div className="mb-2">
                <strong className="text-gray-300">Span ID:</strong>{" "}
                <span className="text-[#9ACD32]">{spanId}</span>
            </div>
            <div className="mb-2">
                <strong className="text-gray-300">Commit:</strong>{" "}
                <span className="text-[#9ACD32]">{commit}</span>
            </div>
            <div className="mb-2">
                <strong className="text-gray-300">Parent Resource ID:</strong>{" "}
                <span className="text-[#9ACD32]">
                    {metadata.parentResourceId}
                </span>
            </div>
        </div>
    );
};

export default LogObject;
