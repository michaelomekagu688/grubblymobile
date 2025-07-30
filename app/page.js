import Image from "next/image";
import styles from "./page.scss";
import { EastOutlined, LoginRounded } from "@mui/icons-material";

export default function Home() {
  return (
    <div className="home"> 
      <div className="top">
        <h1> Grubbly </h1>
        <p> Step into a world of luxury and sophistication with our meticulously curated collectors </p>
      </div>
      <div className="bottom">
        <button className="proceed">
          <LoginRounded className="icons" />
          <div className="text"> Proceed to Login </div>
          <EastOutlined className="icons" />
        </button>
      </div>
    </div>
  );
}
