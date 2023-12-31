import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 */
export interface MultiSignature {
    signatures: Uint8Array[];
}
/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 */
export interface CompactBitArray {
    extraBitsStored: number;
    elems: Uint8Array;
}
export declare const MultiSignature: {
    encode(message: MultiSignature, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MultiSignature;
    fromJSON(object: any): MultiSignature;
    toJSON(message: MultiSignature): unknown;
    fromPartial(object: DeepPartial<MultiSignature>): MultiSignature;
};
export declare const CompactBitArray: {
    encode(message: CompactBitArray, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CompactBitArray;
    fromJSON(object: any): CompactBitArray;
    toJSON(message: CompactBitArray): unknown;
    fromPartial(object: DeepPartial<CompactBitArray>): CompactBitArray;
};
