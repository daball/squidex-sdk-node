/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const HistoryEventDto: core.serialization.ObjectSchema<
    serializers.HistoryEventDto.Raw,
    Squidex.HistoryEventDto
> = core.serialization.object({
    message: core.serialization.string(),
    eventType: core.serialization.string(),
    actor: core.serialization.string(),
    eventId: core.serialization.string(),
    created: core.serialization.date(),
    version: core.serialization.number(),
});

export declare namespace HistoryEventDto {
    interface Raw {
        message: string;
        eventType: string;
        actor: string;
        eventId: string;
        created: string;
        version: number;
    }
}
