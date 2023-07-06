import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
/** Localized variant of a text in a particular language. */
export interface LocalizedText {
  /** Localized string in the language corresponding to `language_code' below. */
  text: string;
  /**
   * The text's BCP-47 language code, such as "en-US" or "sr-Latn".
   * 
   * For more information, see
   * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
   */
  languageCode: string;
}
function createBaseLocalizedText(): LocalizedText {
  return {
    text: "",
    languageCode: ""
  };
}
export const LocalizedText = {
  encode(message: LocalizedText, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.languageCode !== "") {
      writer.uint32(18).string(message.languageCode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LocalizedText {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalizedText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        case 2:
          message.languageCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LocalizedText {
    return {
      text: isSet(object.text) ? String(object.text) : "",
      languageCode: isSet(object.languageCode) ? String(object.languageCode) : ""
    };
  },
  toJSON(message: LocalizedText): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.languageCode !== undefined && (obj.languageCode = message.languageCode);
    return obj;
  },
  fromPartial(object: DeepPartial<LocalizedText>): LocalizedText {
    const message = createBaseLocalizedText();
    message.text = object.text ?? "";
    message.languageCode = object.languageCode ?? "";
    return message;
  }
};