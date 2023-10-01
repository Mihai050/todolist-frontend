import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'; 
import './view-task.style.css';
import SchoolTaskIcon from "../../assets/school-task.icon";
import HobbyTaskIcon from "../../assets/hobby-task.icon";
import HomeTaskIcon from "../../assets/home-task.icon";
import WorkTaskIcon from "../../assets/work-task.icon";
import UrgentTaskIcon from "../../assets/urgent-task.icon";
import getDayDifference from "../../utils/getDayDifference";
import OtherTask from "../../assets/other-task.icon";


const ViewTask = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorColor, setErrorColor] = useState('red');
    const [isDisabledButton, setIsDisabledButton] = useState(false);
    const [timeToComplete, setTimeToComplete] = useState(0);

    useEffect(() => {
    fetch(`http://localhost:8080/api/tasks/${taskId}`)
      .then((response) => {
        if (!response.ok) {
          window.location.href = "/";
        }
        return response.json();
      })
      .then((data) => {
        setTask(data);
      });        
    }, [])

    const getTaskIcon = (type) => {
      type = type.toLowerCase();
      if(type === "Hobby") return <HobbyTaskIcon/>
      if(type === "Work") return <WorkTaskIcon/>
      if(type === "School") return <SchoolTaskIcon />
      if(type === "Home") return <HomeTaskIcon />
      return <OtherTask />
    }

    const handleDeleteTask = () => {
      fetch(`http://localhost:8080/api/tasks/${taskId}`, {
        method: "DELETE",
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          setErrorColor("green");
          setErrorMessage("Task deleted successfully");
          setIsDisabledButton(true);
        } else {
          setErrorColor("red");
          setErrorMessage("There was an error deleting the task");
        }
      });

    }

    const handleFinishTask = () => { 

      if(timeToComplete < 0 || timeToComplete === 0){
        setErrorColor("red");
        setErrorMessage("Please enter a valid time to complete!");
        return;
      }

    fetch(
      `http://localhost:8080/api/tasks/${taskId}/complete/${timeToComplete}`,
      {
        method: "PUT",
      }
    ).then((response) => {
      console.log(response);
      if (response.status === 200) {
        setErrorColor("green");
        setErrorMessage("Task completed successfully");
        setIsDisabledButton(true);
      } else {
        setErrorColor("red");
        setErrorMessage("There was an error completing the task");
      }
    });
    }

    const handleInput = (event) => { 
      const time = event.target.value;
      setTimeToComplete(time);
    }

    console.log(task);
    
    return (
      <div className="container">
        <div className="header">
          <h3>{task && task.title}</h3>
          <h5>
            Task type: {task && task.taskType}{" "}
            {task && getTaskIcon(task.taskType)}
          </h5>
        </div>
        <h5 style={{color: errorColor}}>{errorMessage}</h5>

        <h5> {task && task.description}</h5>
        <div className="">
          <h5>Task created at: {task && task.createdAt}</h5>
          <h5>Task deadline: {task && task.deadline}</h5>
          <h5>Estimated time in hours: {task && task.estimatedTime}</h5>
          {task && task.status ? <h5>
            Days remaining: {task && getDayDifference(task.deadline)}{" "}
            {task && getDayDifference(task.deadline) < 2 ? (
              <UrgentTaskIcon />
            ) : null}
          </h5> : null}
        </div>

        <h5>Task status: {task && task.status ? "Active" : "Inactive"}</h5>

        {task && task.status ? (
          <>
            <h5>
              Time spent on task:
              <input type="number" min={0} onChange={handleInput} placeholder="Time spent" />
            </h5>

            <button className="submit-button" onClick={handleFinishTask} disabled={isDisabledButton}>
              Complete
            </button>
            <button className="submit-button" disabled={isDisabledButton} onClick={handleDeleteTask}>
              Delete task
            </button>
          </>
        ) : null}

        {task && task.status === false ? (
          <>
            <h5>Completed at: {task && task.finishedAt}</h5>
            <h5>Completion time in hours: {task && task.completionTime}</h5>
          </>
        ) : null}
      </div>
    );
};

export default ViewTask;

