export default function EmailList({ messages }) {

  const emailElement = messages.map((message) => (
    <li key={message.id}>
      <h4 className="message-title">{message.title}</h4>
    </li>
  ));

  return (
    <ul className="messages-list">
      {emailElement}
    </ul>
  )
}

