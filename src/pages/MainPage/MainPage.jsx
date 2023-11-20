import { useState } from "react";
import trackList from "../../assets/tracksList";
import Track from "../../components/Track/Track";
import style from "./mainPage.module.scss";
import { Input } from "@mui/material";
import PlayBar from "../../components/PlayBar/PlayBar";

const runSearch = (query) => {
  if (!query) {
    return trackList;
  }
  const lowerCaseQuery = query.toLowerCase();

  return trackList.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(trackList);
  const list = tracks.map((item) => <Track key={item.id} {...item} />);
  const handleChange = (e) => {
    const foundTrack = runSearch(e.target.value);
    setTracks(foundTrack);
  };

  return (
    <div className={style.search}>
      <Input onChange={handleChange} className={style.input} placeholder="search track" />
      <div className={style.list}>{list}</div>
    </div>
  );
};

export default MainPage;
