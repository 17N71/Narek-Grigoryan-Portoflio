import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { dataContext } from "./../../../pages/index";
import me from "/public/me.jpg";
import LeftTypedText from "../../LefyTypedText/LeftTypedText";
const Profile = () => {
  const { data, lang } = useContext(dataContext);
  const title = data.data.title[lang];
  return (
    <div
      className=" flex  max-w-[500px] flex-col w-full justify-center relative 
      border p-2 dark:border-stone-500 border-stone-900
    "
    >
      <Image
        src={me}
        alt={title}
        quality={100}
        priority
        className=" rounded-lg "
        style={{ zIndex: 5, objectFit: "cover", width: "100%" }}
        title={title}
      />
      <h2 className="text-center md:text-xl text-opacity-70 mt-2">
        {[data.data.right.profileGreetings[lang]]}
      </h2>
      <LeftTypedText title={data.data.right.profileTyped[lang]} />
    </div>
  );
};

export default Profile;
