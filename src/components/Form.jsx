const CustomForm = () => {
  return (
    <>
      <form className="ui form">
        <div className="field">
          <input type="text" placeholder="Add todo" />
        </div>
        <button className="ui button" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default CustomForm;
