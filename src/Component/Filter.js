import React from "react";
import ReactStars from "react-rating-stars-component";

function Filter({ filtertext, ratingChanged }) {
  return (
    <div className="">
      <input onChange={(e) => filtertext(e.target.value)} />
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
}

export default Filter;
