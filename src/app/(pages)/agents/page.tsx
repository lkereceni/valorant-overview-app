import React from "react";

import { AgentCard } from "@/components/agent-card/agent-card";
import { AgentsCardInfo } from "@/types";

import styles from "./page.module.css";
import { oswald } from "@/fonts/fonts";
import { PageTitle } from "@/components/page-title/page-title";

export default async function AgentsPage() {
  const res = await fetch("https://valorant-api.com/v1/agents");
  const data = await res.json();
  const agents: AgentsCardInfo[] = data.data;

  return (
    <main className={styles["page-container"]}>
      <PageTitle title="Agents" />
      <div className={styles.agents}>
        {agents.map((agent, index) => {
          return (
            <AgentCard
              key={index}
              agentName={agent.displayName}
              agentPortrait={agent.fullPortrait}
              abilities={agent.abilities}
            />
          );
        })}
      </div>
    </main>
  );
}
