/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const CurrentStorageDto: core.serialization.ObjectSchema<
    serializers.CurrentStorageDto.Raw,
    Squidex.CurrentStorageDto
> = core.serialization.object({
    size: core.serialization.number().optional(),
    maxAllowed: core.serialization.number().optional(),
});

export declare namespace CurrentStorageDto {
    interface Raw {
        size?: number | null;
        maxAllowed?: number | null;
    }
}
