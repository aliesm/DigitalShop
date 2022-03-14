import React, { useState } from "react";
import { MDBIcon } from "mdbreact";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [state, setstate] = useState();

  const History = useHistory();

  // console.log(History);

  const HandleSubmit = (e) => {
    e.target.reset();
    e.preventDefault();
    History.push("/search?q=" + state);
  };

  return (
    <form
      onSubmit={HandleSubmit}
      className="input-group md-form form-sm form-1 "
    >
      <div className="input-group-prepend">
        <span className="input-group-text  purple lighten-3" id="basic-text1">
          <MDBIcon
            title="جستجوی کالا و محصول"
            className="text-white"
            icon="search"
          />
        </span>
      </div>
      <input
        onChange={(e) => setstate(e.target.value)}
        className="form-control"
        title="جستجوی کالا و محصول"
        type="text"
        placeholder="نام محصول یا کالا مورد نظر خود را تایپ کنید..."
        aria-label="Search"
      />
    </form>
  );
};

export default Search;
