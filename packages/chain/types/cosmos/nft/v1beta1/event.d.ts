import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** EventSend is emitted on Msg/Send */
export interface EventSend {
    /** class_id associated with the nft */
    classId: string;
    /** id is a unique identifier of the nft */
    id: string;
    /** sender is the address of the owner of nft */
    sender: string;
    /** receiver is the receiver address of nft */
    receiver: string;
}
/** EventMint is emitted on Mint */
export interface EventMint {
    /** class_id associated with the nft */
    classId: string;
    /** id is a unique identifier of the nft */
    id: string;
    /** owner is the owner address of the nft */
    owner: string;
}
/** EventBurn is emitted on Burn */
export interface EventBurn {
    /** class_id associated with the nft */
    classId: string;
    /** id is a unique identifier of the nft */
    id: string;
    /** owner is the owner address of the nft */
    owner: string;
}
export declare const EventSend: {
    encode(message: EventSend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventSend;
    fromJSON(object: any): EventSend;
    toJSON(message: EventSend): unknown;
    fromPartial(object: DeepPartial<EventSend>): EventSend;
};
export declare const EventMint: {
    encode(message: EventMint, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventMint;
    fromJSON(object: any): EventMint;
    toJSON(message: EventMint): unknown;
    fromPartial(object: DeepPartial<EventMint>): EventMint;
};
export declare const EventBurn: {
    encode(message: EventBurn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventBurn;
    fromJSON(object: any): EventBurn;
    toJSON(message: EventBurn): unknown;
    fromPartial(object: DeepPartial<EventBurn>): EventBurn;
};
