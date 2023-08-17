import './browse-active.style.css';
import MessagePanel from '../../components/message-panel/message-panel.component';
import Toolbar from '../../layout/toolbar/toolbar.component';
import TaskCard from '../../components/task-card/task-card.component';
import { useState, useEffect } from 'react';

const BrowseActive = () => {

  const [tasks, setTasks] = useState([]);
  const [isAscending, setIsAscending] = useState(false);

  useEffect(()=> {
    fetch('/api/get-active-tasks').then(response => response.json()).then(data => {
      setTasks(data);
      console.log(data);
    })
  }, [])

  const handleClick = () => { 
    setIsAscending(!isAscending);
    const sorted = [...tasks].sort((taskA, taskB) => {
      const dateA = new Date(taskA.deadline);
      const dateB = new Date(taskB.deadline);
      if(isAscending){
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    setTasks(sorted);
  }


  return (
    <div className="wrapper-body-page">
      <MessagePanel number={tasks.length}/>
      {tasks.length > 0 && <Toolbar order={isAscending} action={handleClick}/>}
      {tasks.map(task => 
        <TaskCard task={task}/>
      )}
    </div>
  );
};

export default BrowseActive;
