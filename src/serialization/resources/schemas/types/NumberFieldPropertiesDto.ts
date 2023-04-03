/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const NumberFieldPropertiesDto: core.serialization.ObjectSchema<
    serializers.NumberFieldPropertiesDto.Raw,
    Squidex.NumberFieldPropertiesDto
> = core.serialization.object({
    defaultValues: core.serialization
        .lazy(async () => (await import("../../..")).LocalizedValueOfNullableDouble)
        .optional(),
    defaultValue: core.serialization.number().optional(),
    maxValue: core.serialization.number().optional(),
    minValue: core.serialization.number().optional(),
    allowedValues: core.serialization.list(core.serialization.number()).optional(),
    isUnique: core.serialization.boolean().optional(),
    inlineEditable: core.serialization.boolean().optional(),
    editor: core.serialization.lazy(async () => (await import("../../..")).NumberFieldEditor).optional(),
});

export declare namespace NumberFieldPropertiesDto {
    interface Raw {
        defaultValues?: serializers.LocalizedValueOfNullableDouble.Raw | null;
        defaultValue?: number | null;
        maxValue?: number | null;
        minValue?: number | null;
        allowedValues?: number[] | null;
        isUnique?: boolean | null;
        inlineEditable?: boolean | null;
        editor?: serializers.NumberFieldEditor.Raw | null;
    }
}
