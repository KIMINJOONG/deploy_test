import React, { useEffect, useState, useCallback } from "react";
import { moviesApi } from "./api/movie";
import Poster from "./Components/Poster";
import { Link } from "react-router-dom";

const Body = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const init = useCallback(async () => {
    let nowPlayings;
    try {
      ({
        // results를 nowPlaying으로 이름변경
        // 변수명 변경하는법
        data: { results: nowPlayings }
      } = await moviesApi.nowPlaying());

      setNowPlaying(nowPlayings);
    } catch (error) {
    } finally {
    }
  }, []);
  useEffect(() => {
    init();
  }, [init]);
  return (
    <div
      className="uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-6@l uk-text-center"
      data-uk-grid
    >
      {nowPlaying &&
        nowPlaying.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Poster
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          </Link>
        ))}
    </div>
  );
};
export default Body;
