import './browse-inactive.style.css';
import Toolbar from '../../layout/toolbar/toolbar.component';
import {useState, useEffect } from 'react';
import TaskCard from '../../components/task-card/task-card.component';

const BrowseInactive = () => {
  const [tasks, setTasks] = useState([]);
  const [isAscending, setIsAscending] = useState(false);

  useEffect(() => {
    fetch("/api/get-inactive-tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        console.log(data);
      });
  }, []);

  const handleClick = () => {
    setIsAscending(!isAscending);
    const sorted = [...tasks].sort((taskA, taskB) => {
      const dateA = new Date(taskA.finishedAt);
      const dateB = new Date(taskB.finishedAt);
      if (isAscending) {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    setTasks(sorted);
  };

  return (
    <div className="wrapper-body-page">
      <div className="finished-title-container">Finished tasks: </div>
      {tasks.length > 0 && <Toolbar order={isAscending} action={handleClick} />}
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
};

export default BrowseInactive;

