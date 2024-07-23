import React from "react";

import styles from "./navigation-item.module.css";
import Link from "next/link";

export type NavigationItemProps = {
  title: string;
  href: string;
  isActive?: boolean;
};

export const NavigationItem = ({
  title,
  href,
  isActive,
}: NavigationItemProps) => {
  return (
    <Link className={styles["navigation-item"]} href={href}>
      <p>{title}</p>
      {isActive ? <hr className={styles.active} /> : null}
    </Link>
  );
};
