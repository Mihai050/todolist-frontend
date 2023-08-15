import './message-panel.style.css';

const MessagePanel = (props) => {
    const {isDisplayedOnHome ,finished, urgent, unfinished, name} = props;
    let message;
    if(!isDisplayedOnHome){
        message = `${name}, you finished ${finished} tasks!`
    } else if(unfinished) {
        const letter = unfinished === 1 ? '' : 's';
        const verb = urgent === 1 ? 'is' : 'are';
        message = `${name}, you have ${unfinished} task${letter} to do, of which ${urgent} ${verb} urgent!`;
    } else {
        message = `${name}, you have no tasks at this moment!`;
    }

  return (
    <div className="message-panel">{message}</div>
  );
};


export default MessagePanel;