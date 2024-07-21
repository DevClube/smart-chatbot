import {Button, TextArea, TextField} from "@vaadin/react-components";
import {useState} from "react";
import {ragChat} from "Frontend/generated/ChatAiService";
import {ChatAiService} from "Frontend/generated/endpoints";
import Markdown from "react-markdown";


export default function Chat(){

    const [question, setQuestions] = useState<string>("");
    const [response, setResponse] = useState<string>("");

    async function Send(){
        ChatAiService.ragChat(question).then(response=>{
            setResponse(response);
        }).catch(err=>{
            console.error(err);
        })
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center flex-column align-items-center">
                <textarea
                    className="form-control w-75 mb-3"

                    onChange={e => setQuestions(e.target.value)}
                    value={question}
                    placeholder="Type your question here..."
                />
                <Button className="btn btn-dark mb-3" onClick={Send}>
                    Send
                </Button>
                <div className="pt-5 w-75">
                    <Markdown>{response}</Markdown>
                </div>
            </div>
        </div>
    )
}