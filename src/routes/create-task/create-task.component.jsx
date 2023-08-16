import './create-task.style.css';

const CreateTask = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");
  const currentDay = String(new Date().getDate()).padStart(2, "0");
  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
  console.log(currentDate);

  return (
    <div className="form-container">
      <div className="upper-info"></div>
      <div className="error-info"></div>
      <div className="form-section">
        <p className="form-title">Add new task</p>
        <p className='warning'>This is a warning</p>
        <div class="form-element">
          <p>Title:</p>
          <input type="text" className="" placeholder="Title" />
        </div>
        <div class="form-element">
          <p>Description:</p>
          <textarea />
        </div>

        <div class="form-element">
          <p>End date:</p>
          <input type="date" min={currentDate} label="get finish day" />
        </div>
        <div class="form-element">
          <p>Estimated duration:</p>
          <input type="text" />
        </div>
        <div class="form-element">
          <p>Type:</p>
          <select name="Type" id="type">
            <option value="Hobby">Hobby</option>
            <option value="Not hobbi">not hobbi</option>
          </select>
        </div>
      </div>
      <div className="button-wrapper"></div>
    </div>
  );
};

export default CreateTask;
