import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'; 


const ViewTask = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        fetch(`/api/get-task/${taskId}`)
            .then((response) => response.json())
            .then((data) => setTask(data));
    }, [])

    
    return (
    <div className="wrapper-body-page">
        <h5>Title {task.title}</h5>
        <h6>Task type: {task.taskType}</h6>
        <h6>Task details: {task.description}</h6>
        
    </div>
    );
};

export default ViewTask;

