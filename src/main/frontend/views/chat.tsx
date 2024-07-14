import {Button, TextField} from "@vaadin/react-components";
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
        <div>
            <h3>Smart ChatBot</h3>
            <div>
                <TextField className="w-[80%]" onChange={e => setQuestions(e.target.value)} value={question}/>
                <Button theme="primary" onClick={Send}>Send</Button>
                <Markdown className="pt-5">{response}</Markdown>
            </div>
        </div>
    )
}