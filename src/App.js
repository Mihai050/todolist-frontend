import { Routes, Route, useParams } from 'react-router-dom'
import Navbar from './layout/navbar/navbar.component';
import BrowseActive from './routes/browse-active/browse-active.component';
import BrowseInactive from './routes/browse-inactive/browse-inactive.component';
import CreateTask from './routes/create-task/create-task.component';
import ViewTask from './routes/view-task/view-task.component';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<BrowseActive />} />
        <Route path="browse-inactive" element={<BrowseInactive />} />
        <Route path="create-task" element={<CreateTask />} />
        <Route path="view-task" element={<ViewTask />} />
      </Route>
    </Routes>
  );
}

export default App;
