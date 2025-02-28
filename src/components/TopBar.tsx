interface TopBarProps {
  message: string;
}

const TopBar = ({ message }: TopBarProps) => {
  return (
    <div className="bg-black text-white text-xs py-2 px-4 text-center relatives">
      <p className="cursor-pointer">
        <span className="font-helvetica">{message}</span>{" "}
        <span className="font-semibold">Shop Now</span>
      </p>
      <div className="absolute sm:right-4 top-8 right-1 sm:top-2">
        <select className="bg-black text-white text-xs border-none outline-none">
          <option>ENG</option>
          <option>FR</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
