import React from "react";

const CommentList = (props) => {

  if(!props.comments.length) {
    return <div style={{fontSize: 25}} className="text-center mt-2">No Review...</div>
  }

  return (
    <ul className="mt-5 list-unstyled">
      {props.comments.map((item, index) => {
        return (
          <li key={index}>
            <div className="row">
              <div className="col-2">
                <img
                  width="70%"
                  height="70%"
                  className="responsive-img"
                  src="/image/user.png"
                />
              </div>
              <div className="col-10">
                <h3>{item.author}</h3>
                <p>{item.text}</p>
              </div>
            </div>
            <hr className="my-5" />
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
