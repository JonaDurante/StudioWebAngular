import { MessageSeverity } from "./message-severity";

export interface Message {
  severity: MessageSeverity;
  message: string;
}
