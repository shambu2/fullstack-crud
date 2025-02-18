
import { SquarePlus, SunMoon } from "lucide-react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-700 w-[70%] h-16 rounded-2xl z-0 flex justify-between py-10 mx-auto px-10 items-center opacity-75  border-slate-600 border-[1px] backdrop-blur-md  ">
      <Link to="/">
        <h1 className="z-20 text-white text-2xl text-transparent bg-clip-text font-semibold leading-normal inline-block">
          Electonics Store
        </h1>
      </Link>

      <div className="flex items-center justify-center gap-6 z-20">
        <Link to="/new">
          <SquarePlus />
        </Link>

        <SunMoon />
      </div>
    </div>
  );
};

export default Navbar;
