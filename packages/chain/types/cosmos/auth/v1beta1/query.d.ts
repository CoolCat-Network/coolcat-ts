import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params, BaseAccount, ModuleAccount } from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
    /** accounts are the existing accounts */
    accounts: (BaseAccount | Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address defines the address to query for. */
    address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** account defines the account of the corresponding address. */
    account: BaseAccount | Any | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsRequest {
}
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsResponse {
    accounts: (ModuleAccount | Any)[] | Any[];
}
/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameRequest {
    name: string;
}
/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameResponse {
    account: ModuleAccount | Any | undefined;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixRequest {
}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixResponse {
    bech32Prefix: string;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringRequest {
    addressBytes: Uint8Array;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringResponse {
    addressString: string;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesRequest {
    addressString: string;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesResponse {
    addressBytes: Uint8Array;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDRequest {
    /**
     * Deprecated, use account_id instead
     *
     * id is the account number of the address to be queried. This field
     * should have been an uint64 (like all account numbers), and will be
     * updated to uint64 in a future version of the auth query.
     */
    /** @deprecated */
    id: bigint;
    /**
     * account_id is the account number of the address to be queried.
     *
     * Since: cosmos-sdk 0.47
     */
    accountId: bigint;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDResponse {
    accountAddress: string;
}
/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoRequest {
    /** address is the account address string. */
    address: string;
}
/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoResponse {
    /** info is the account info which is represented by BaseAccount. */
    info: BaseAccount;
}
export declare const QueryAccountsRequest: {
    encode(message: QueryAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsRequest;
    fromJSON(object: any): QueryAccountsRequest;
    toJSON(message: QueryAccountsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsResponse;
    fromJSON(object: any): QueryAccountsResponse;
    toJSON(message: QueryAccountsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse;
};
export declare const QueryAccountRequest: {
    encode(message: QueryAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest;
    fromJSON(object: any): QueryAccountRequest;
    toJSON(message: QueryAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest;
};
export declare const QueryAccountResponse: {
    encode(message: QueryAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountResponse;
    fromJSON(object: any): QueryAccountResponse;
    toJSON(message: QueryAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryModuleAccountsRequest: {
    encode(_: QueryModuleAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsRequest;
    fromJSON(_: any): QueryModuleAccountsRequest;
    toJSON(_: QueryModuleAccountsRequest): unknown;
    fromPartial(_: DeepPartial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest;
};
export declare const QueryModuleAccountsResponse: {
    encode(message: QueryModuleAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsResponse;
    fromJSON(object: any): QueryModuleAccountsResponse;
    toJSON(message: QueryModuleAccountsResponse): unknown;
    fromPartial(object: DeepPartial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse;
};
export declare const QueryModuleAccountByNameRequest: {
    encode(message: QueryModuleAccountByNameRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountByNameRequest;
    fromJSON(object: any): QueryModuleAccountByNameRequest;
    toJSON(message: QueryModuleAccountByNameRequest): unknown;
    fromPartial(object: DeepPartial<QueryModuleAccountByNameRequest>): QueryModuleAccountByNameRequest;
};
export declare const QueryModuleAccountByNameResponse: {
    encode(message: QueryModuleAccountByNameResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountByNameResponse;
    fromJSON(object: any): QueryModuleAccountByNameResponse;
    toJSON(message: QueryModuleAccountByNameResponse): unknown;
    fromPartial(object: DeepPartial<QueryModuleAccountByNameResponse>): QueryModuleAccountByNameResponse;
};
export declare const Bech32PrefixRequest: {
    encode(_: Bech32PrefixRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixRequest;
    fromJSON(_: any): Bech32PrefixRequest;
    toJSON(_: Bech32PrefixRequest): unknown;
    fromPartial(_: DeepPartial<Bech32PrefixRequest>): Bech32PrefixRequest;
};
export declare const Bech32PrefixResponse: {
    encode(message: Bech32PrefixResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixResponse;
    fromJSON(object: any): Bech32PrefixResponse;
    toJSON(message: Bech32PrefixResponse): unknown;
    fromPartial(object: DeepPartial<Bech32PrefixResponse>): Bech32PrefixResponse;
};
export declare const AddressBytesToStringRequest: {
    encode(message: AddressBytesToStringRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringRequest;
    fromJSON(object: any): AddressBytesToStringRequest;
    toJSON(message: AddressBytesToStringRequest): unknown;
    fromPartial(object: DeepPartial<AddressBytesToStringRequest>): AddressBytesToStringRequest;
};
export declare const AddressBytesToStringResponse: {
    encode(message: AddressBytesToStringResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringResponse;
    fromJSON(object: any): AddressBytesToStringResponse;
    toJSON(message: AddressBytesToStringResponse): unknown;
    fromPartial(object: DeepPartial<AddressBytesToStringResponse>): AddressBytesToStringResponse;
};
export declare const AddressStringToBytesRequest: {
    encode(message: AddressStringToBytesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesRequest;
    fromJSON(object: any): AddressStringToBytesRequest;
    toJSON(message: AddressStringToBytesRequest): unknown;
    fromPartial(object: DeepPartial<AddressStringToBytesRequest>): AddressStringToBytesRequest;
};
export declare const AddressStringToBytesResponse: {
    encode(message: AddressStringToBytesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesResponse;
    fromJSON(object: any): AddressStringToBytesResponse;
    toJSON(message: AddressStringToBytesResponse): unknown;
    fromPartial(object: DeepPartial<AddressStringToBytesResponse>): AddressStringToBytesResponse;
};
export declare const QueryAccountAddressByIDRequest: {
    encode(message: QueryAccountAddressByIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressByIDRequest;
    fromJSON(object: any): QueryAccountAddressByIDRequest;
    toJSON(message: QueryAccountAddressByIDRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountAddressByIDRequest>): QueryAccountAddressByIDRequest;
};
export declare const QueryAccountAddressByIDResponse: {
    encode(message: QueryAccountAddressByIDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressByIDResponse;
    fromJSON(object: any): QueryAccountAddressByIDResponse;
    toJSON(message: QueryAccountAddressByIDResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountAddressByIDResponse>): QueryAccountAddressByIDResponse;
};
export declare const QueryAccountInfoRequest: {
    encode(message: QueryAccountInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountInfoRequest;
    fromJSON(object: any): QueryAccountInfoRequest;
    toJSON(message: QueryAccountInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountInfoRequest>): QueryAccountInfoRequest;
};
export declare const QueryAccountInfoResponse: {
    encode(message: QueryAccountInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountInfoResponse;
    fromJSON(object: any): QueryAccountInfoResponse;
    toJSON(message: QueryAccountInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountInfoResponse>): QueryAccountInfoResponse;
};
export declare const Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => BaseAccount | Any;
export declare const Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => ModuleAccount | Any;
