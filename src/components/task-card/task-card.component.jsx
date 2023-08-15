import './task-card.style.css';
import GoSmiley from '../../assets/hobby-task';

const TaskCard = (props) => {

    return (
        <div className='task-card'>
            <div className='task-card-upper'>
                <h3>Title: Fix dishes and clean your car</h3>
                <h3>Type:</h3>
            </div>
            <div className='task-card-preview'>Preview: This task is about more than doing ...</div>
            <div className='task-card-lower'>
                <h8>Created at: 08.09.2023</h8>
                <h8>Deadline: 09.10.2023</h8>
                <h8>Days left: 20</h8>
            </div>
        </div>
    )

}

export default TaskCard;
