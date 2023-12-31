/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, Expiration, Timestamp, Uint64, ClaimsResponse, Claim, DaoResponse, ExecuteMsg, Duration, Addr, GetConfigResponse, InfoResponse, ContractVersion, Owner, InstantiateMsg, IsActiveResponse, ListStakersResponse, StakerBalanceResponse, MigrateMsg, QueryMsg, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse } from "./CWNativeStakedBalanceVoting.types";
export interface CWNativeStakedBalanceVotingMessage {
  contractAddress: string;
  sender: string;
  stake: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  unstake: ({
    amount
  }: {
    amount: Uint128;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateConfig: ({
    duration,
    manager,
    owner
  }: {
    duration?: Duration;
    manager?: string;
    owner?: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  claim: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class CWNativeStakedBalanceVotingMessageComposer implements CWNativeStakedBalanceVotingMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.stake = this.stake.bind(this);
    this.unstake = this.unstake.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.claim = this.claim.bind(this);
  }

  stake = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          stake: {}
        })),
        funds: _funds
      })
    };
  };
  unstake = ({
    amount
  }: {
    amount: Uint128;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          unstake: {
            amount
          }
        })),
        funds: _funds
      })
    };
  };
  updateConfig = ({
    duration,
    manager,
    owner
  }: {
    duration?: Duration;
    manager?: string;
    owner?: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_config: {
            duration,
            manager,
            owner
          }
        })),
        funds: _funds
      })
    };
  };
  claim = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          claim: {}
        })),
        funds: _funds
      })
    };
  };
}