export type AgentsCardInfo = {
  id: string;
  displayName: string;
  fullPortrait: string;
  abilities: AgentAbility[];
};

export type AgentAbility = {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
};
