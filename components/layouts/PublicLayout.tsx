import { FunctionComponent } from "react";
import Header from "../organisms/header";
import styles from "./Layout.module.scss";

interface PublicLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const PublicLayout: FunctionComponent<PublicLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <main className={styles?.content_wrapper}>{children}</main>
    </div>
  );
};

export default PublicLayout;
