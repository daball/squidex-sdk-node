/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const RuleEventsDto: core.serialization.ObjectSchema<serializers.RuleEventsDto.Raw, Squidex.RuleEventsDto> =
    core.serialization
        .object({
            items: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../..")).RuleEventDto)
            ),
            total: core.serialization.number().optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).Resource));

export declare namespace RuleEventsDto {
    interface Raw extends serializers.Resource.Raw {
        items: serializers.RuleEventDto.Raw[];
        total?: number | null;
    }
}
