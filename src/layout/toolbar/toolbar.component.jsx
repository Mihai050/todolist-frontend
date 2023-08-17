import './toolbar.styles.css';
import TriangleUpTaskIcon from '../../assets/triangle-up.icon';
import TriangleDownTaskIcon from '../../assets/triangle-down.icon';

const Toolbar = ({order, action}) => {
    return (
      <div className="toolbar">
        Sort by Deadline Date:{" "}
        <div className="sort-button" onClick={action}>
          {order ?  <>Descending <TriangleDownTaskIcon/> </>: <>Ascending <TriangleUpTaskIcon/></>}
        </div>
      </div>
    );
    

}

export default Toolbar;