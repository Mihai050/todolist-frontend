import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'; 
import './view-task.style.css';

const ViewTask = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
      fetch(`/api/get-task/${taskId}`)
          .then((response) => response.json())
          .then((data) => {setTask(data)
          console.log(data)});
            
    }, [])

    const estimatedTime = '2 hours';
    

    
    return (
      <div className="container">
        <div className="header">
          <h3>{task && task.title}</h3>
          <h5>Task type: {task && task.taskType}</h5>
        </div>

        <h5> {task && task.description}</h5>
        <div className="">
          <h5>Task created at: {task && task.createdAt}</h5>
          <h5>Task deadline: {task && task.deadline}</h5>
          <h5>Estimated time {task && task.deadline}</h5>
        </div>

        <h5>Task status: {task && task.status}</h5>

        
          <h5>
            Time spent on task:
            <input type="text" placeholder="Time spent" />
          </h5>
        
        <p className="submit-button">Complete</p>
      </div>
    );
};

export default ViewTask;

