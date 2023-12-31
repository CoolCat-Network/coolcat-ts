/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Uint128 = string;
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {
    [k: string]: unknown;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface ClaimsResponse {
  claims: Claim[];
  [k: string]: unknown;
}
export interface Claim {
  amount: Uint128;
  release_at: Expiration;
  [k: string]: unknown;
}
export type DaoResponse = string;
export type ExecuteMsg = {
  stake: {
    [k: string]: unknown;
  };
} | {
  unstake: {
    amount: Uint128;
    [k: string]: unknown;
  };
} | {
  update_config: {
    duration?: Duration | null;
    manager?: string | null;
    owner?: string | null;
    [k: string]: unknown;
  };
} | {
  claim: {
    [k: string]: unknown;
  };
};
export type Duration = {
  height: number;
} | {
  time: number;
};
export type Addr = string;
export interface GetConfigResponse {
  denom: string;
  manager?: Addr | null;
  owner?: Addr | null;
  unstaking_duration?: Duration | null;
  [k: string]: unknown;
}
export interface InfoResponse {
  info: ContractVersion;
  [k: string]: unknown;
}
export interface ContractVersion {
  contract: string;
  version: string;
  [k: string]: unknown;
}
export type Owner = {
  addr: string;
} | {
  instantiator: {
    [k: string]: unknown;
  };
};
export interface InstantiateMsg {
  denom: string;
  manager?: string | null;
  owner?: Owner | null;
  unstaking_duration?: Duration | null;
  [k: string]: unknown;
}
export interface IsActiveResponse {
  active: boolean;
  [k: string]: unknown;
}
export interface ListStakersResponse {
  stakers: StakerBalanceResponse[];
  [k: string]: unknown;
}
export interface StakerBalanceResponse {
  address: string;
  balance: Uint128;
  [k: string]: unknown;
}
export interface MigrateMsg {
  [k: string]: unknown;
}
export type QueryMsg = {
  dao: {
    [k: string]: unknown;
  };
} | {
  get_config: {
    [k: string]: unknown;
  };
} | {
  claims: {
    address: string;
    [k: string]: unknown;
  };
} | {
  list_stakers: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  voting_power_at_height: {
    address: string;
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  total_power_at_height: {
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  info: {
    [k: string]: unknown;
  };
};
export interface TotalPowerAtHeightResponse {
  height: number;
  power: Uint128;
  [k: string]: unknown;
}
export interface VotingPowerAtHeightResponse {
  height: number;
  power: Uint128;
  [k: string]: unknown;
}
export type CWNativeStakedBalanceVotingExecuteMsg = ExecuteMsg;