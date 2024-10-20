import React from 'react'

export const Card = ({img, title, des, amount}) => {
  return (
    <section className="justify-center items-center gap-3 hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="w-[306px] h-[337px] rounded-[10px] text-lightText">
        <div className="relative">
          <img src={img} alt="Photo" />
          <img
            src="/img/Blizzard.png"
            alt="Image"
            className="absolute  ml-[200px] m-1 px-2 py-1 top-0 left-0 right-0"
          />
        </div>

        <h3 className="text-black text-[16px] font-bold">{title}</h3>
        <p>{des}</p>
        <h3 className="text-black text-[16px] font-bold">{amount}</h3>
      </div>
    </section>
  );
}
