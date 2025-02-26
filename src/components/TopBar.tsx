const TopBar = () => {
  return (
    <div className="bg-black text-white text-xs py-2 px-4 text-center">
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-semibold cursor-pointer">ShopNow</span>
      </p>
      <div className="absolute right-4 top-2">
        <select className="bg-black text-white text-xs border-none outline-none">
          <option>ENG</option>
          <option>FR</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
