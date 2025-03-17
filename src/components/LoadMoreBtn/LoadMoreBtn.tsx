import { Dispatch, SetStateAction } from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  setPage: Dispatch<SetStateAction<number>>;
}

export default function LoadMoreBtn({ setPage }: LoadMoreBtnProps) {
  return (
    <>
      <button
        className={s.button}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Load more
      </button>
    </>
  );
}
