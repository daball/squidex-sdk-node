/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const ChangePlanDto: core.serialization.ObjectSchema<serializers.ChangePlanDto.Raw, Squidex.ChangePlanDto> =
    core.serialization.object({
        planId: core.serialization.string(),
    });

export declare namespace ChangePlanDto {
    interface Raw {
        planId: string;
    }
}
