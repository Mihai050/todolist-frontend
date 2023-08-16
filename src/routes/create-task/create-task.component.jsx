import './create-task.style.css';

const CreateTask = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");
  const currentDay = String(new Date().getDate()).padStart(2, "0");
  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
  console.log(currentDate);

  return <div className="wrapper-body-page">
    <div className="upper-info"></div>
    <div className="error-info"></div>
    <div className="form-section">
      <input type='date' min={currentDate} label='get finish day'/>
    </div>
    <div className="button-wrapper"></div>
  </div>;
};

export default CreateTask;
