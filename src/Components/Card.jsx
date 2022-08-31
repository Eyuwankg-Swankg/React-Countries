import React from "react";

function Card({cardItem}) {
  return (
    <div class="card">
        {cardItem.name.common}
      {/* <img src={cardItem["img"]} class="card-img" />
      <span class="card-name">{cardItem.name}</span>
      <div class="card-detail">
        <h1>{cardItem.name}</h1>
        <ul>
          <li>
            <strong>Actor Name:</strong> {cardItem.portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {cardItem.nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {cardItem.birthday}
          </li>
          <li>
            <strong>Status:</strong> {cardItem.status}
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default React.memo(Card);
