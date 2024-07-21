import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import type History_1 from "./com/medev/smartchatbot/entites/History.js";
import client_1 from "./connect-client.default.js";
async function getHistory_1(init?: EndpointRequestInit_1): Promise<Array<History_1>> { return client_1.call("ChatAiService", "getHistory", {}, init); }
async function ragChat_1(question: string, init?: EndpointRequestInit_1): Promise<string> { return client_1.call("ChatAiService", "ragChat", { question }, init); }
async function ragChat2_1(question: string, init?: EndpointRequestInit_1): Promise<string> { return client_1.call("ChatAiService", "ragChat2", { question }, init); }
export { getHistory_1 as getHistory, ragChat_1 as ragChat, ragChat2_1 as ragChat2 };
