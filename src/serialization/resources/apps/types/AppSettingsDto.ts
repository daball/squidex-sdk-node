/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const AppSettingsDto: core.serialization.ObjectSchema<serializers.AppSettingsDto.Raw, Squidex.AppSettingsDto> =
    core.serialization
        .object({
            patterns: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../..")).PatternDto)
            ),
            editors: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../..")).EditorDto)
            ),
            hideScheduler: core.serialization.boolean().optional(),
            hideDateTimeModeButton: core.serialization.boolean().optional(),
            version: core.serialization.number().optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).Resource));

export declare namespace AppSettingsDto {
    interface Raw extends serializers.Resource.Raw {
        patterns: serializers.PatternDto.Raw[];
        editors: serializers.EditorDto.Raw[];
        hideScheduler?: boolean | null;
        hideDateTimeModeButton?: boolean | null;
        version?: number | null;
    }
}
