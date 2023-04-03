/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const SignalRRuleActionDto: core.serialization.ObjectSchema<
    serializers.SignalRRuleActionDto.Raw,
    Squidex.SignalRRuleActionDto
> = core.serialization.object({
    connectionString: core.serialization.string(),
    hubName: core.serialization.string(),
    action: core.serialization.lazy(async () => (await import("../../..")).ActionTypeEnum),
    methodName: core.serialization.string().optional(),
    target: core.serialization.string().optional(),
    payload: core.serialization.string().optional(),
});

export declare namespace SignalRRuleActionDto {
    interface Raw {
        connectionString: string;
        hubName: string;
        action: serializers.ActionTypeEnum.Raw;
        methodName?: string | null;
        target?: string | null;
        payload?: string | null;
    }
}
