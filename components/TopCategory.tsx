import React from "react";
import Image from "next/image";
import c01 from "../public/Category01.webp";
import c02 from "../public/Category02.webp";
import c03 from "../public/Category03.webp";
import g1 from "../public/hot-category.webp";

function TopCategory() {
  return (
    <div className="md:w-full md:h-full py-[136px] space-y-16 overflow-hidden">
      <h2 className="text-secondary">Top Category</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 ">
        <div>
          <Image src={c01} alt="image" width={424} height={424} />
        </div>
        <div>
          <Image src={c02} alt="image" width={424} height={424} />
        </div>
        <div>
          <Image src={c03} alt="image" width={424} height={424} />
        </div>
      </div>
      <div className="">
        <div>
          <Image src={g1} alt="" width={1372} height={648} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default TopCategory;
