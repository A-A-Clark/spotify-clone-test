import React from 'react'
import { useNavigate } from 'react-router-dom';

const ArtistItem = ({ image, name, desc, id }) => {

const navigate = useNavigate(); 

    return (
      <div onClick={ () => navigate(`/artist/${id}`)}  className="min-w-[166px] max-w-[190px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
        <img className="rounded-full" src={image} alt="" />
        <p className="font-medium mt-2 mb-1">{name}</p>
        <p className="font-semibold text-gray-400 text-opacity-80 text-sm">{desc}</p>
      </div>
    );
  };

export default ArtistItem