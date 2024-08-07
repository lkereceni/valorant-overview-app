import React from "react";

import styles from "./page-title.module.css";
import { oswald } from "@/fonts/fonts";

type PageTitleProps = {
  title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => {
  return <h1 className={`${styles.title} ${oswald.className}`}>{title}</h1>;
};
