import React from "react";

function Card({ cardItem }) {
  return (
    <div class="card">
      <img src={cardItem["flags"]["png"]} class="card-img" />
      <div class="card-detail">
        <h1>{cardItem.name.common}</h1>
        <ul>
          {cardItem.capital !== undefined && cardItem.capital.length != 0 ? (
            <li>
              <strong>Capital : </strong>
              {cardItem.capital.map((cap, index) => {
                if (cardItem.capital.length == index + 1) return cap;
                else return `${cap}, `;
              })}
            </li>
          ) : (
            <></>
          )}
          <li>
            <strong>Region : </strong> {cardItem.subregion}
          </li>
          {cardItem.continents !== undefined &&
          cardItem.continents.length != 0 ? (
            <li>
              <strong>Continent : </strong>
              {cardItem.continents.map((continent, index) => {
                if (cardItem.continents.length == index + 1) return continent;
                else return `${continent}, `;
              })}
            </li>
          ) : (
            <></>
          )}
          {cardItem.currencies !== undefined ? (
            <li>
              <strong>Currency : </strong>
              {Object.keys(cardItem.currencies).map((currency, index) => {
                if (Object.keys(cardItem.currencies).length == index + 1)
                  return currency;
                else return `${currency}, `;
              })}
            </li>
          ) : (
            <></>
          )}
          <li>
            <strong>Population : </strong> {cardItem.population}
          </li>
          {cardItem.currencies !== undefined ? (
            <li>
              <strong>Languages : </strong>
              {Object.keys(cardItem.languages).map((language, index) => {
                if (Object.keys(cardItem.languages).length == index + 1)
                  return cardItem.languages[language];
                else return `${cardItem.languages[language]}, `;
              })}
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Card);
