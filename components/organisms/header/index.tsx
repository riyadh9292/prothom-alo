import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./Header.module.scss";
interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  // console.log(styles);

  return (
    <div className={styles.headerContainer}>
      <Image
        src="/images/prothom-alo.png"
        alt="Picture of the author"
        className="header-img"
        width={200}
        height={100}
      />
    </div>
  );
};

export default Header;
