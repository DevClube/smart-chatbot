import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
async function ragChat_1(question: string, init?: EndpointRequestInit_1): Promise<string> { return client_1.call("ChatAiService", "ragChat", { question }, init); }
async function ragChat2_1(question: string, init?: EndpointRequestInit_1): Promise<string> { return client_1.call("ChatAiService", "ragChat2", { question }, init); }
export { ragChat_1 as ragChat, ragChat2_1 as ragChat2 };
