import logo from "../../assets/logo.png";
import "./header.css";
function Header() {
  return (
    <header className="pt-10 pb-24">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="">
          <div className="flex items-end ">
            <img src={logo} width={55} height={35} alt="" />
            <h3 className="font-medium text-3xl text-[#F58E6A]">ProfChess</h3>
          </div>
        </a>
        <ul className="flex items-center gap-28">
          <a href="#about" className="">
            <li className="hover:text-[#000] hover:cursor-pointer transition duration-300 hover:scale-125 text-xl">
              About
            </li>
          </a>
          <a href="#tutor" className="">
            <li className="hover:text-[#000] hover:cursor-pointer transition-all duration-300 hover:scale-125 text-xl">
              Tutorials
            </li>
          </a>
          <a href="#contact" className="">
            <li className="hover:text-[#000] hover:cursor-pointer transition-all duration-300 hover:scale-125 text-xl">
              Contacts
            </li>
          </a>
        </ul>
        <button className="btn py-3 px-10 rounded-lg bg-[#666] font-bold text-white hover:scale-95 duration-500	transition-all">
          Register
        </button>
      </div>
    </header>
  );
}
export default Header;
