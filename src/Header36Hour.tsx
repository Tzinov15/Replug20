import logo from "./unplug_logo_white.png";

export const Header36Hour = () => {
  return (
    <>
      <header className={`bg-transparent z-50  top-0 pt-4 mt-0 lg:mt-0 flex items-center flex-col  w-full `}>
        <div
          style={{
            transformOrigin: "top",
          }}
          className={`flex flex-col  items-center justify-center w-full py-4 border-b border-b-primary border-opacity-50 `}
        >
          <img src={logo} className={`max-w-[90%] lg:max-w-[40%]`} />
          <p className="bg-gradient-to-r from-[#F5F1E0] to-[#E3C892] bg-clip-text text-transparent text-xl mt-6">
            A <p className="inline font-bold">36 hour technology hiatus.</p>
          </p>
          {/* <p className="text-background text-xl mt-6">
            A <p className="inline font-bold">36 hour technology hiatus.</p>
          </p> */}
        </div>
      </header>
    </>
  );
};
