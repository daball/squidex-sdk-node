/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const ArrayFieldPropertiesDto: core.serialization.ObjectSchema<
    serializers.ArrayFieldPropertiesDto.Raw,
    Squidex.ArrayFieldPropertiesDto
> = core.serialization.object({
    minItems: core.serialization.number().optional(),
    maxItems: core.serialization.number().optional(),
    calculatedDefaultValue: core.serialization
        .lazy(async () => (await import("..")).ArrayCalculatedDefaultValue)
        .optional(),
    uniqueFields: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ArrayFieldPropertiesDto {
    interface Raw {
        minItems?: number | null;
        maxItems?: number | null;
        calculatedDefaultValue?: serializers.ArrayCalculatedDefaultValue.Raw | null;
        uniqueFields?: string[] | null;
    }
}
