import { Vortex } from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.loader}>
      <Vortex
        height='80'
        width='80'
        colors={[
          "#4EF022",
          "#22F08A",
          "#21EF44",
          "#A4F022",
          "#22F0D0",
          "#71F086",
        ]}
      />
    </div>
  );
}
