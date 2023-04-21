/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const EventConsumerDto: core.serialization.ObjectSchema<
    serializers.EventConsumerDto.Raw,
    Squidex.EventConsumerDto
> = core.serialization
    .object({
        isStopped: core.serialization.boolean().optional(),
        isResetting: core.serialization.boolean().optional(),
        count: core.serialization.number().optional(),
        name: core.serialization.string(),
        error: core.serialization.string().optional(),
        position: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Resource));

export declare namespace EventConsumerDto {
    interface Raw extends serializers.Resource.Raw {
        isStopped?: boolean | null;
        isResetting?: boolean | null;
        count?: number | null;
        name: string;
        error?: string | null;
        position?: string | null;
    }
}
