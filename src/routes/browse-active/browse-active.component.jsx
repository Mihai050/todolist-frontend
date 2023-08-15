import './browse-active.style.css';
import MessagePanel from '../../components/message-panel/message-panel.component';
import Toolbar from '../../layout/toolbar/toolbar.component';

const BrowseActive = () => {


  return (<div className='wrapper-body-page'>
    <MessagePanel isDisplayedOnHome={true} unfinished={1} urgent={3} name='Mihai'/>
    <Toolbar/>
    
    
  </div>);
};

export default BrowseActive;
