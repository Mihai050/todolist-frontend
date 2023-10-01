import './create-task.style.css';
import { useState } from 'react';
import getDateLimit from '../../utils/getDateLimit';


const CreateTask = () => {
  const currentDate = getDateLimit();
  const taskTypes = ["Hobby", "Work", "Home", "School"];
  
  const [taskInfo, setTaskInfo] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [warning, setWarning] = useState('');

  const handleChange = (event) => {
    const { value, name } = event.target;
    const task = {... taskInfo};
    task[name] = value;
    setTaskInfo(task);
  }

  const handleSubmit = () => {
    if(!taskInfo.title){
      setWarning('Enter a title for your task!');
      return;
    }

    if (!taskInfo.description) {
      setWarning("Enter a description for your task!");
      return;
    }
  
      if (!taskInfo.deadline){
        setWarning("Enter a deadline for your task!");
      }

    if (!taskInfo.estimatedTime) {
      setWarning("Enter an estimated duration for your task!");
      return;
    }

    if(taskInfo.estimatedTime < 0){
      setWarning("Task can only take positive hours to complete!");
      return;
    }

    if (!taskInfo.taskType) {
      setWarning("Enter a type for your task!");
      return
    }

    fetch("http://localhost:8080/api/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskInfo),
    })
      .then((response) => {
        if (response.status === 200) {
          setWarning("Task created successfully! You can now go back!");
          setIsDisabled(true);
        } else {
           response.json().then((data) => {
            console.log("___________")
            console.log(data);
            setWarning("There was an error creating the task!");
           });
        }
      })
      .catch(() => {
        setWarning("There was an error with the server!");
        console.log("Catch")
      });
  }


  return (
    <div className="form-container">
      <div className="upper-info"></div>
      <div className="error-info"></div>
      <div className="form-section">
        <p className="form-title">Add new task</p>
        <p className="warning" style={{ color: isDisabled ? "green" : "red" }}>
          {warning}
        </p>
        <div className="form-element">
          <p>Title:</p>
          <input
            type="text"
            className=""
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="form-element">
          <p>Description:</p>
          <textarea name="description" onChange={handleChange} />
        </div>

        <div className="form-element">
          <p>End date:</p>
          <input
            type="date"
            min={currentDate}
            label="get finish day"
            onChange={handleChange}
            name="deadline"
          />
        </div>
        <div className="form-element">
          <p>Estimated duration in hours:</p>
          <input
            type="number"
            min={0}
            name="estimatedTime"
            onChange={handleChange}
          />
        </div>
        <div className="form-element">
          <p>Type:</p>
          <select name="taskType" id="type" onChange={handleChange}>
            <option value="" disabled selected hidden>
              Please select an option
            </option>
            {taskTypes.map((taskType, index) => (
              <option key={index} value={taskType}>{taskType}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isDisabled}
          className="submit-task-button"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
