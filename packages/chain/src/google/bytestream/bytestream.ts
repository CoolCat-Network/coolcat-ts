import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../helpers";
/** Request object for ByteStream.Read. */
export interface ReadRequest {
  /** The name of the resource to read. */
  resourceName: string;
  /**
   * The offset for the first byte to return in the read, relative to the start
   * of the resource.
   * 
   * A `read_offset` that is negative or greater than the size of the resource
   * will cause an `OUT_OF_RANGE` error.
   */
  readOffset: bigint;
  /**
   * The maximum number of `data` bytes the server is allowed to return in the
   * sum of all `ReadResponse` messages. A `read_limit` of zero indicates that
   * there is no limit, and a negative `read_limit` will cause an error.
   * 
   * If the stream returns fewer bytes than allowed by the `read_limit` and no
   * error occurred, the stream includes all data from the `read_offset` to the
   * end of the resource.
   */
  readLimit: bigint;
}
/** Response object for ByteStream.Read. */
export interface ReadResponse {
  /**
   * A portion of the data for the resource. The service **may** leave `data`
   * empty for any given `ReadResponse`. This enables the service to inform the
   * client that the request is still live while it is running an operation to
   * generate more data.
   */
  data: Uint8Array;
}
/** Request object for ByteStream.Write. */
export interface WriteRequest {
  /**
   * The name of the resource to write. This **must** be set on the first
   * `WriteRequest` of each `Write()` action. If it is set on subsequent calls,
   * it **must** match the value of the first request.
   */
  resourceName: string;
  /**
   * The offset from the beginning of the resource at which the data should be
   * written. It is required on all `WriteRequest`s.
   * 
   * In the first `WriteRequest` of a `Write()` action, it indicates
   * the initial offset for the `Write()` call. The value **must** be equal to
   * the `committed_size` that a call to `QueryWriteStatus()` would return.
   * 
   * On subsequent calls, this value **must** be set and **must** be equal to
   * the sum of the first `write_offset` and the sizes of all `data` bundles
   * sent previously on this stream.
   * 
   * An incorrect value will cause an error.
   */
  writeOffset: bigint;
  /**
   * If `true`, this indicates that the write is complete. Sending any
   * `WriteRequest`s subsequent to one in which `finish_write` is `true` will
   * cause an error.
   */
  finishWrite: boolean;
  /**
   * A portion of the data for the resource. The client **may** leave `data`
   * empty for any given `WriteRequest`. This enables the client to inform the
   * service that the request is still live while it is running an operation to
   * generate more data.
   */
  data: Uint8Array;
}
/** Response object for ByteStream.Write. */
export interface WriteResponse {
  /** The number of bytes that have been processed for the given resource. */
  committedSize: bigint;
}
/** Request object for ByteStream.QueryWriteStatus. */
export interface QueryWriteStatusRequest {
  /** The name of the resource whose write status is being requested. */
  resourceName: string;
}
/** Response object for ByteStream.QueryWriteStatus. */
export interface QueryWriteStatusResponse {
  /** The number of bytes that have been processed for the given resource. */
  committedSize: bigint;
  /**
   * `complete` is `true` only if the client has sent a `WriteRequest` with
   * `finish_write` set to true, and the server has processed that request.
   */
  complete: boolean;
}
function createBaseReadRequest(): ReadRequest {
  return {
    resourceName: "",
    readOffset: BigInt(0),
    readLimit: BigInt(0)
  };
}
export const ReadRequest = {
  encode(message: ReadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.readOffset !== BigInt(0)) {
      writer.uint32(16).int64(message.readOffset);
    }
    if (message.readLimit !== BigInt(0)) {
      writer.uint32(24).int64(message.readLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReadRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceName = reader.string();
          break;
        case 2:
          message.readOffset = reader.int64();
          break;
        case 3:
          message.readLimit = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReadRequest {
    return {
      resourceName: isSet(object.resourceName) ? String(object.resourceName) : "",
      readOffset: isSet(object.readOffset) ? BigInt(object.readOffset.toString()) : BigInt(0),
      readLimit: isSet(object.readLimit) ? BigInt(object.readLimit.toString()) : BigInt(0)
    };
  },
  toJSON(message: ReadRequest): unknown {
    const obj: any = {};
    message.resourceName !== undefined && (obj.resourceName = message.resourceName);
    message.readOffset !== undefined && (obj.readOffset = (message.readOffset || BigInt(0)).toString());
    message.readLimit !== undefined && (obj.readLimit = (message.readLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ReadRequest>): ReadRequest {
    const message = createBaseReadRequest();
    message.resourceName = object.resourceName ?? "";
    message.readOffset = object.readOffset !== undefined && object.readOffset !== null ? BigInt(object.readOffset.toString()) : BigInt(0);
    message.readLimit = object.readLimit !== undefined && object.readLimit !== null ? BigInt(object.readLimit.toString()) : BigInt(0);
    return message;
  }
};
function createBaseReadResponse(): ReadResponse {
  return {
    data: new Uint8Array()
  };
}
export const ReadResponse = {
  encode(message: ReadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(82).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReadResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: ReadResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<ReadResponse>): ReadResponse {
    const message = createBaseReadResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseWriteRequest(): WriteRequest {
  return {
    resourceName: "",
    writeOffset: BigInt(0),
    finishWrite: false,
    data: new Uint8Array()
  };
}
export const WriteRequest = {
  encode(message: WriteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.writeOffset !== BigInt(0)) {
      writer.uint32(16).int64(message.writeOffset);
    }
    if (message.finishWrite === true) {
      writer.uint32(24).bool(message.finishWrite);
    }
    if (message.data.length !== 0) {
      writer.uint32(82).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WriteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceName = reader.string();
          break;
        case 2:
          message.writeOffset = reader.int64();
          break;
        case 3:
          message.finishWrite = reader.bool();
          break;
        case 10:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WriteRequest {
    return {
      resourceName: isSet(object.resourceName) ? String(object.resourceName) : "",
      writeOffset: isSet(object.writeOffset) ? BigInt(object.writeOffset.toString()) : BigInt(0),
      finishWrite: isSet(object.finishWrite) ? Boolean(object.finishWrite) : false,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: WriteRequest): unknown {
    const obj: any = {};
    message.resourceName !== undefined && (obj.resourceName = message.resourceName);
    message.writeOffset !== undefined && (obj.writeOffset = (message.writeOffset || BigInt(0)).toString());
    message.finishWrite !== undefined && (obj.finishWrite = message.finishWrite);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<WriteRequest>): WriteRequest {
    const message = createBaseWriteRequest();
    message.resourceName = object.resourceName ?? "";
    message.writeOffset = object.writeOffset !== undefined && object.writeOffset !== null ? BigInt(object.writeOffset.toString()) : BigInt(0);
    message.finishWrite = object.finishWrite ?? false;
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseWriteResponse(): WriteResponse {
  return {
    committedSize: BigInt(0)
  };
}
export const WriteResponse = {
  encode(message: WriteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.committedSize !== BigInt(0)) {
      writer.uint32(8).int64(message.committedSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WriteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.committedSize = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WriteResponse {
    return {
      committedSize: isSet(object.committedSize) ? BigInt(object.committedSize.toString()) : BigInt(0)
    };
  },
  toJSON(message: WriteResponse): unknown {
    const obj: any = {};
    message.committedSize !== undefined && (obj.committedSize = (message.committedSize || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<WriteResponse>): WriteResponse {
    const message = createBaseWriteResponse();
    message.committedSize = object.committedSize !== undefined && object.committedSize !== null ? BigInt(object.committedSize.toString()) : BigInt(0);
    return message;
  }
};
function createBaseQueryWriteStatusRequest(): QueryWriteStatusRequest {
  return {
    resourceName: ""
  };
}
export const QueryWriteStatusRequest = {
  encode(message: QueryWriteStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWriteStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWriteStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWriteStatusRequest {
    return {
      resourceName: isSet(object.resourceName) ? String(object.resourceName) : ""
    };
  },
  toJSON(message: QueryWriteStatusRequest): unknown {
    const obj: any = {};
    message.resourceName !== undefined && (obj.resourceName = message.resourceName);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryWriteStatusRequest>): QueryWriteStatusRequest {
    const message = createBaseQueryWriteStatusRequest();
    message.resourceName = object.resourceName ?? "";
    return message;
  }
};
function createBaseQueryWriteStatusResponse(): QueryWriteStatusResponse {
  return {
    committedSize: BigInt(0),
    complete: false
  };
}
export const QueryWriteStatusResponse = {
  encode(message: QueryWriteStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.committedSize !== BigInt(0)) {
      writer.uint32(8).int64(message.committedSize);
    }
    if (message.complete === true) {
      writer.uint32(16).bool(message.complete);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWriteStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWriteStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.committedSize = reader.int64();
          break;
        case 2:
          message.complete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWriteStatusResponse {
    return {
      committedSize: isSet(object.committedSize) ? BigInt(object.committedSize.toString()) : BigInt(0),
      complete: isSet(object.complete) ? Boolean(object.complete) : false
    };
  },
  toJSON(message: QueryWriteStatusResponse): unknown {
    const obj: any = {};
    message.committedSize !== undefined && (obj.committedSize = (message.committedSize || BigInt(0)).toString());
    message.complete !== undefined && (obj.complete = message.complete);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryWriteStatusResponse>): QueryWriteStatusResponse {
    const message = createBaseQueryWriteStatusResponse();
    message.committedSize = object.committedSize !== undefined && object.committedSize !== null ? BigInt(object.committedSize.toString()) : BigInt(0);
    message.complete = object.complete ?? false;
    return message;
  }
};