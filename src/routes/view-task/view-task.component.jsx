import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'; 
import './view-task.style.css';
import SchoolTaskIcon from "../../assets/school-task.icon";
import HobbyTaskIcon from "../../assets/hobby-task.icon";
import HomeTaskIcon from "../../assets/home-task.icon";
import WorkTaskIcon from "../../assets/work-task.icon";
import UrgentTaskIcon from "../../assets/urgent-task.icon";


const ViewTask = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
    fetch(`/api/get-task/${taskId}`)
        .then((response) => response.json())
        .then((data) => {setTask(data)});        
    }, [])

    const getTaskIcon = (type) => {
      if(type === "Hobby") return <HobbyTaskIcon/>
      if(type === "Work") return <WorkTaskIcon/>
      if(type === "School") return <SchoolTaskIcon />
      if(type === "Home") return <HomeTaskIcon />
    }
    

    
    return (
      <div className="container">
        <UrgentTaskIcon />
        <div className="header">
          <h3>{task && task.title}</h3>
          <h5>
            Task type: {task && task.taskType}{" "}
            {task && getTaskIcon(task.taskType)}
          </h5>
        </div>

        <h5> {task && task.description}</h5>
        <div className="">
          <h5>Task created at: {task && task.createdAt.substring(0, 10)}</h5>
          <h5>Task deadline: {task && task.deadline.substring(0, 10)}</h5>
          <h5>Estimated time in hours: {task && task.estimatedTime}</h5>
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

