import { useState, useEffect } from "react";
import { ChatAiService } from "Frontend/generated/endpoints";

export default function History() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        getHistory();
    }, []);

    async function getHistory() {
        ChatAiService.getHistory().then((resp:any) => {
            console.log(resp);
            setHistory(resp); // Assuming resp is an array of history items
        });
    }

    const formatTime = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="container">
                <h3>History</h3>
                {history.map((item: any, index) => (
                    <div className="card mb-3" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">Question: {item.question}</h5>
                            <p className="card-text">Answer: {item.answer}</p>
                            <p className="card-text">
                                <small className="text-muted">Time: {formatTime(item.createdAt)}</small>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
    );
}
