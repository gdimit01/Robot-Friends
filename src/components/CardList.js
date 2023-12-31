import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  //destructing it from robots
  // if (true) {
  //  throw new Error("Something went wrong");
  //}

  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            username={robots[i].username}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
