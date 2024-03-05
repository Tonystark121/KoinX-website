import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import { useMediaQuery } from "@react-hook/media-query";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const navbar = () => {
  const isMobile = useMediaQuery("(max-width: 730px)");
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <nav className={styles.nav}>
      <img src="./public/assets/icons/logo.svg" alt="Logo" />
      {!isMobile ? (
        <>
          <ul className={styles.navlinks}>
            <li>
              <a href="#">Crpto Taxes</a>
            </li>
            <li>
              <a href="#">Free Tools</a>
            </li>
            <li>
              <a href="#">Resources Center</a>
            </li>
            <li>
              <button>Get Started</button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <div className={styles.moblinks}>
            {!showMenu ? (
              <GiHamburgerMenu
                width={"20.56px"}
                height={"13.71px"}
                className={styles.icons}
                onClick={handleMenu}
              />
            ) : (
              <RxCross2
                width={"20.56px"}
                height={"13.71px"}
                className={styles.icons}
                onClick={handleMenu}
              />
            )}
            {showMenu && (
              <>
                <ul className={styles.menulinks}>
                  <li>
                    <a href="#" className={styles.menulink}>
                      Crpto Taxes
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.menulink}>
                      Free Tools
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.menulink}>
                      Resources Center
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default navbar;
