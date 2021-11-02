import React, { useState } from "react";
import Filter from "./Filter";
import Moviecard from "./Moviecard";
import Add from "./Add";

const Movielist = () => {
  // setting the state hooks

  const [Arr, setArr] = useState([
    {
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
      rate: 3,
    },
    {
      title: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: 4,
    },
    {
      title: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: 5,
    },
  ]);

  const addnew = (newfilm) => {
    setArr([...Arr, newfilm]);
  };

  const [text, settext] = useState("");
  const filtertext = (text) => {
    settext(text);
  };

  const [rate2, setrate2] = useState("");
  // const filterrate = (rate2) => {
  //   setrate2(rate2);
  // };

  const ratingChanged = (newRating) => {
    setrate2(newRating);
  };
  return (
    <div>
      <Filter ratingChanged={ratingChanged} filtertext={filtertext} />
      <div className="movies">
        {Arr.filter((el) => el.title.includes(text) && el.rate >= rate2).map(
          (el) => (
            <Moviecard movie={el} />
          )
        )}
      </div>
      <Add addnew={addnew} />
    </div>
  );
};
export default Movielist;
