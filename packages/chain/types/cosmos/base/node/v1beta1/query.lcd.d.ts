import { LCDClient } from "@osmonauts/lcd";
import { ConfigRequest, ConfigResponse } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    config: (_params?: ConfigRequest) => Promise<ConfigResponse>;
}
