import React from "react";

import { oswald } from "@/fonts/fonts";

import styles from "./agent-card.module.css";
import Image from "next/image";
import { AgentAbility } from "@/types";
import { AgentAbilities } from "../agent-abilities/agent-abilities";
import Link from "next/link";

type AgentCardProps = {
  agentName: string;
  agentPortrait?: string;
  abilities?: AgentAbility[];
};

export const AgentCard = ({
  agentName,
  agentPortrait,
  abilities,
}: AgentCardProps) => {
  return agentPortrait ? (
    <Link className={styles["agent-card"]} href={`agents/${agentName}`}>
      <div className={styles["agent-card-background"]}>
        <Image
          className={styles["agent-portrait"]}
          src={agentPortrait ?? ""}
          alt="Agent Portrait"
          quality={100}
          fill
        />
      </div>
      <div className={styles["agent-name-country-container"]}>
        <h1 className={`${styles["agent-name"]} ${oswald.className}`}>
          {agentName}
        </h1>
      </div>
      <AgentAbilities
        className={styles["agent-abilities"]}
        abilities={abilities}
      />
    </Link>
  ) : null;
};
