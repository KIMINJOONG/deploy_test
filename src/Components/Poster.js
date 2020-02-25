import React from "react";

const Poster = ({ id, imageUrl, title, rating, year, isMovie }) => {
  return (
    <div>
      <div
        className="
        uk-card 
        uk-card-default 
        uk-card-body 
        uk-padding-remove-top 
        uk-padding-remove-left 
        uk-padding-remove-right 
        uk-padding-remove-bottom"
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${imageUrl}`}
          alt={imageUrl}
        />
        <div>
          <div>
            <span title={title}>
              {title.length > 7 ? `${title.substring(0, 7)}...` : title}
            </span>
          </div>
          <div>
            <span>{year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
