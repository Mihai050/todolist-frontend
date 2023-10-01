import './task-card.style.css';
import { Link } from 'react-router-dom'
import HobbyTaskIcon from '../../assets/hobby-task.icon';
import WorkTaskIcon from '../../assets/work-task.icon';
import SchoolTaskIcon from '../../assets/school-task.icon';
import HomeTaskIcon from '../../assets/home-task.icon';
import UrgentTaskIcon from '../../assets/urgent-task.icon';
import getDayDifference from '../../utils/getDayDifference';
import OtherTask from '../../assets/other-task.icon';

const TaskCard = (props) => {

  const {
    title,
    taskType,
    createdAt,
    deadline,
    status,
    id,
    completionTime,
    finishedAt,
  } = props.task;
  const daysLeft = getDayDifference(deadline);

  const getIcon = (taskType) => {
    taskType = taskType.toLowerCase();
    if(taskType === "hobby") return <HobbyTaskIcon />;
    if(taskType === "school") return <SchoolTaskIcon />;
    if(taskType === "home") return <HomeTaskIcon />;
    if(taskType === "work") return <WorkTaskIcon />;
    return <OtherTask />;

  }
  console.log("Created at " + createdAt)

    return (
      <Link to={`/view-task/${id}`}>
        <div className="task-card">
          <div className="task-card-upper">
            <h3>{title}</h3>
            <h3>
              Type: {taskType} {getIcon(taskType)}
            </h3>
          </div>

          <div className="task-card-lower">
            <h4 className="task-card-date">Created at: {createdAt}</h4>
            {status ? (
              <h4 className="task-card-deadline">Deadline: {deadline}</h4>
            ) : (
              <h4 className="task-card-deadline">Finished on: {finishedAt}</h4>
            )}
            {status ? (
              <h4 className="task-card-left">
                Days left: {daysLeft} {daysLeft < 2 ? <UrgentTaskIcon /> : null}
              </h4>
            ) : (
              <h4 className="task-card-deadline">
                Completion time: {completionTime} hours
              </h4>
            )}
            <h4 className="task-card-status">
              Status: {status ? "Active" : "Finished"}
            </h4>
          </div>
        </div>
      </Link>
    );

}

export default TaskCard;
