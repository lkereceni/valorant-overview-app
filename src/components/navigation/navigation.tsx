"use client";

import React from "react";

import riotGamesLogo from "@/assets/logo/riot-games-logo.svg";
import valorantLogo from "@/assets/logo/valorant-logo.svg";

import styles from "./navigation.module.css";
import Image from "next/image";
import { NavigationItem, NavigationItemProps } from "./navigation-item";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  const navigationItems: NavigationItemProps[] = [
    {
      title: "game",
      href: "/game",
      isActive: pathname === "/game",
    },
    {
      title: "agents",
      href: "/agents",
      isActive: pathname === "/agents",
    },
    {
      title: "weapons",
      href: "/weapons",
      isActive: pathname === "/weapons",
    },
    {
      title: "patch notes",
      href: "/patch-notes",
      isActive: pathname === "/patch-notes",
    },
    {
      title: "esports",
      href: "/esports",
      isActive: pathname === "/esports",
    },
  ];

  return (
    <nav className={styles["navigation-container"]}>
      <div className={styles["logos-container"]}>
        <Image src={riotGamesLogo} alt="Riot Games Logo" />
        <hr className={styles["vertical-hr"]} />
        <Image src={valorantLogo} alt="Valorant Logo" />
      </div>
      <div className={styles["navigation-items-container"]}>
        {navigationItems.map((item, index) => (
          <NavigationItem
            key={index}
            title={item.title}
            href={item.href}
            isActive={item.isActive}
          />
        ))}
      </div>
    </nav>
  );
};
