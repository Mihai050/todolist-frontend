import './toolbar.styles.css';
import TriangleUpTaskIcon from '../../assets/triangle-up.icon';
import TriangleDownTaskIcon from '../../assets/triangle-down.icon';

const Toolbar = ({order}) => {
    return (
        <div className='toolbar'>
            Sort by Date: <div className='sort-button'> Ascending <TriangleDownTaskIcon/></div>
        </div>
    )
    

}

export default Toolbar;