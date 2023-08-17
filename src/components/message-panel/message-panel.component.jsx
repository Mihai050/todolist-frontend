import './message-panel.style.css';

const MessagePanel = (props) => {
    const {number} = props;

  return (
    <div className="message-panel">Welcome, Mihai, you have {number} task{number === 1 ? null : 's'}!</div>
  );
};


export default MessagePanel;