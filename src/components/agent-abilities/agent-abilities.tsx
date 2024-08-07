import React from "react";

import { AgentAbility } from "@/types";

import styles from "./agent-abilities.module.css";
import Image from "next/image";
import { PASSIVE_SLOT } from "@/utils/constants";

type AgentAbilitiesProps = {
  className?: string;
  abilities?: AgentAbility[];
};

export const AgentAbilities = ({
  className,
  abilities,
}: AgentAbilitiesProps) => {
  return (
    <div className={`${className} ${styles["agent-abilities-container"]}`}>
      {abilities?.map((ability, index) => {
        return ability.slot !== PASSIVE_SLOT ? (
          <Image
            className={styles["ability-image"]}
            width={100}
            height={100}
            key={index}
            src={ability.displayIcon}
            alt={ability.displayName}
          />
        ) : null;
      })}
    </div>
  );
};
