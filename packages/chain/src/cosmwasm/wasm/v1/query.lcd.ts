import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* ContractInfo gets the contract meta data */
  contractInfo = async (params: QueryContractInfoRequest): Promise<QueryContractInfoResponse> => {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}`;
    return QueryContractInfoResponse.fromJSON(await this.req.get<QueryContractInfoResponse>(endpoint));
  };
  /* ContractHistory gets the contract code history */
  contractHistory = async (params: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/history`;
    return QueryContractHistoryResponse.fromJSON(await this.req.get<QueryContractHistoryResponse>(endpoint, options));
  };
  /* ContractsByCode lists all smart contracts for a code id */
  contractsByCode = async (params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}/contracts`;
    return QueryContractsByCodeResponse.fromJSON(await this.req.get<QueryContractsByCodeResponse>(endpoint, options));
  };
  /* AllContractState gets all raw store data for a single contract */
  allContractState = async (params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/state`;
    return QueryAllContractStateResponse.fromJSON(await this.req.get<QueryAllContractStateResponse>(endpoint, options));
  };
  /* RawContractState gets single key from the raw store data of a contract */
  rawContractState = async (params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> => {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/raw/${params.queryData}`;
    return QueryRawContractStateResponse.fromJSON(await this.req.get<QueryRawContractStateResponse>(endpoint));
  };
  /* SmartContractState get smart query result from the contract */
  smartContractState = async (params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> => {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/smart/${params.queryData}`;
    return QuerySmartContractStateResponse.fromJSON(await this.req.get<QuerySmartContractStateResponse>(endpoint));
  };
  /* Code gets the binary code and metadata for a singe wasm code */
  code = async (params: QueryCodeRequest): Promise<QueryCodeResponse> => {
    const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}`;
    return QueryCodeResponse.fromJSON(await this.req.get<QueryCodeResponse>(endpoint));
  };
  /* Codes gets the metadata for all stored wasm codes */
  codes = async (params: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/code`;
    return QueryCodesResponse.fromJSON(await this.req.get<QueryCodesResponse>(endpoint, options));
  };
  /* PinnedCodes gets the pinned code ids */
  pinnedCodes = async (params: QueryPinnedCodesRequest = {
    pagination: undefined
  }): Promise<QueryPinnedCodesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/codes/pinned`;
    return QueryPinnedCodesResponse.fromJSON(await this.req.get<QueryPinnedCodesResponse>(endpoint, options));
  };
  /* Params gets the module params */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `cosmwasm/wasm/v1/codes/params`;
    return QueryParamsResponse.fromJSON(await this.req.get<QueryParamsResponse>(endpoint));
  };
  /* ContractsByCreator gets the contracts by creator */
  contractsByCreator = async (params: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contracts/creator/${params.creatorAddress}`;
    return QueryContractsByCreatorResponse.fromJSON(await this.req.get<QueryContractsByCreatorResponse>(endpoint, options));
  };
}