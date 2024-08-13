import React, { useContext } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { artistsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const artistData = artistsData[id];
  const {playWithID} = useContext(PlayerContext);

  return (
    <>
      <NavBar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={artistData.image} alt="" />
        <div className="flex flex-col">
          <p>Verified Artist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {artistData.name}
          </h2>
          <h4>{artistData.desc}</h4>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          key={index}
          onClick={()=> playWithID(item.id)}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hober:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-3 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className="text-[15px]">{artistData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
