import './task-card.style.css';
import HobbyTaskIcon from '../../assets/hobby-task.icon';
import UrgentTaskIcon from '../../assets/urgent-task.icon';

const TaskCard = (props) => {

    return (
        <div className='task-card'>
            <div className='task-card-upper'>
                <h3>Title: Fix dishes and clean your car</h3>
                <h3>Type: Hobby <HobbyTaskIcon/></h3>
            </div>
            <div className='task-card-preview'>
                Task details: 
                <div className='task-text-container'>This is test lorem1000</div>
            </div>
            <div className='task-card-lower'>
                <h8 className='task-card-date'>Created at: 08.09.2023</h8>
                <h8 className='task-card-deadline'>Deadline: 09.10.2023</h8>
                <h8 className='task-card-left'>Days left: 20 <UrgentTaskIcon /></h8>
                <h8 className='task-card-status'>Status: finished</h8>
            </div>
        </div>
    )

}

export default TaskCard;
