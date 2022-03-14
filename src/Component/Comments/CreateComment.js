import React, { useState } from "react";

const CreateComment = (props) => {
  const [state, setState] = useState({
    comment: {},
    error: {},
  });

  const HandleInputChange = (e) => {
    const formData = { [e.target.name]: e.target.value };
    setState((...prevState) => {
      return {
        ...prevState,
        comment: { ...state.comment, ...formData },
      };
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.onComments(state.comment);
    setState({ comment: {}, errors: {} });
  };

  return (
    <form style={{ direction: "rtl" }} onSubmit={handleSubmitForm}>
      <div className="form-group">
        <label>نام </label>
        <input
          onChange={HandleInputChange}
          //   onChange={(e)=>HandleInputChange(e)}
          name="author"
          type="text"
          className="form-control"
        />
        <small className="form-text text-danger"></small>
      </div>
      <div className="form-group">
        <label>نظرات خود را وارد کنید</label>
        <textarea
          onChange={HandleInputChange}
          className="form-control"
          rows="5"
          name="text"
        ></textarea>
        <small className="form-text text-danger"></small>
      </div>

      <button type="submit" className="btn btn-primary">
        ارسال نظرات
      </button>
    </form>
  );
};

export default CreateComment;
