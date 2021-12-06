import { FaBars } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header>
      <div className="bars">
        <FaBars />
      </div>
      <div className="header-center-icon">
        <img
          src="http://s3.amazonaws.com/tmopacman/dist/assets/images/logo_pacman.svg"
          alt="logo_pacman"
        />
      </div>
      <div className="header-right">
        <div>
          <IoNotificationsOutline />
        </div>
        <div>
          <CgProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
