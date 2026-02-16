import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="w-[15vw] h-full relative bg-white rounded  ">
      <a target="_blank" className="h-full"  href={item.url}>
      {item.type === "photo" ? (
        <img
          className="h-full w-full object-cover object-centre"
          src={item.src}
        />
      ) : (
        ""
      )}

      {item.type === "video" ? (
        <video
          className="h-full w-full object-cover object-centre"
          autoPlay
          loop
          muted
          src={item.src}
        />
      ) : (
        ""
      )}
      </a>

      <div id="bottom" className="flex justify-between items-centre  w-full px-6 py-10   absolute bottom-0  text-white "><h2 className="text-lg font-semibold capitalize ">{item.title}</h2>
      <button className="bg-indigo-600 text-white rounded px-3 py-2 font medium cursor-pointer">Save</button>
      
      </div>
    </div>
  );
};

export default ResultCard;
