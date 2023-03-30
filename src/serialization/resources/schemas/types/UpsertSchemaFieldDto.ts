/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const UpsertSchemaFieldDto: core.serialization.ObjectSchema<
    serializers.UpsertSchemaFieldDto.Raw,
    Squidex.UpsertSchemaFieldDto
> = core.serialization.object({
    name: core.serialization.string(),
    isHidden: core.serialization.boolean().optional(),
    isLocked: core.serialization.boolean().optional(),
    isDisabled: core.serialization.boolean().optional(),
    partitioning: core.serialization.string().optional(),
    properties: core.serialization.lazyObject(async () => (await import("../../..")).FieldPropertiesDto),
    nested: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).UpsertSchemaNestedFieldDto))
        .optional(),
});

export declare namespace UpsertSchemaFieldDto {
    interface Raw {
        name: string;
        isHidden?: boolean | null;
        isLocked?: boolean | null;
        isDisabled?: boolean | null;
        partitioning?: string | null;
        properties: serializers.FieldPropertiesDto.Raw;
        nested?: serializers.UpsertSchemaNestedFieldDto.Raw[] | null;
    }
}
