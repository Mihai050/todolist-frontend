import './task-card.style.css';
import { Link } from 'react-router-dom'
import HobbyTaskIcon from '../../assets/hobby-task.icon';
import WorkTaskIcon from '../../assets/work-task.icon';
import SchoolTaskIcon from '../../assets/school-task.icon';
import HomeTaskIcon from '../../assets/home-task.icon';
import UrgentTaskIcon from '../../assets/urgent-task.icon';
import getDayDifference from '../../utils/getDayDifference';

const TaskCard = (props) => {

  const {title, taskType, createdAt, deadline, status, _id, completionTime, finishedAt} = props.task;
  const daysLeft = getDayDifference(deadline);
  const getIcon = (taskType) => {
    if(taskType === "Hobby") return <HobbyTaskIcon />;
    if(taskType === "School") return <SchoolTaskIcon />;
    if(taskType === "Home") return <HomeTaskIcon />;
    if(taskType === "Work") return <WorkTaskIcon />;

  }

    return (
      <Link to={`/view-task/${_id}`}>
        <div className="task-card">
          <div className="task-card-upper">
            <h3>{title}</h3>
            <h3>
              Type: {taskType} {getIcon(taskType)}
            </h3>
          </div>

          <div className="task-card-lower">
            <h4 className="task-card-date">
              Created at: {createdAt.substring(0, 10)}
            </h4>
            {status === 'Active' ? <h4 className="task-card-deadline">
              Deadline: {deadline.substring(0, 10)}
            </h4> :
            <h4 className='task-card-deadline'>
              Finished on: {finishedAt.substring(0, 10)}
            </h4>
            }
            {status === 'Active' ? <h4 className="task-card-left">
              Days left: {daysLeft} {daysLeft < 2 ? <UrgentTaskIcon /> : null}
            </h4> : 
            <h4 className="task-card-deadline">
              Completion time: {completionTime} hours
              </h4>}
            <h4 className="task-card-status">Status: {status}</h4>
          </div>
        </div>
      </Link>
    );

}

export default TaskCard;
