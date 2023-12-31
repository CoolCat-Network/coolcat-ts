import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 *
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface Empty {
}
export declare const Empty: {
    encode(_: Empty, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Empty;
    fromJSON(_: any): Empty;
    toJSON(_: Empty): unknown;
    fromPartial(_: DeepPartial<Empty>): Empty;
};
