export type Message = {
  who: "bot" | "user" | undefined;
  message?: string;
};

export const initialMessages: Message[] = [
  {
    who: "bot",
    message: "Hola, soy un matematico especializado y listo para resolver tus dudas, preguntame lo que sea!!",
  },
];

export function ChatMessage({ who = "bot", message }: Message) {
  if (!message) {
    return null;
  }

  return (
    <div className={`prompt ${who != "bot" ? "right" : "left"}`}>
      <div>
        <p className="name">{who != "bot" ? "Tu" : "IA"}</p>
        <p className="msg">{message}</p>
      </div>
    </div>
  );
}
