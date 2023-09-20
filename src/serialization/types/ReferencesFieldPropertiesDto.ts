/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const ReferencesFieldPropertiesDto: core.serialization.ObjectSchema<
    serializers.ReferencesFieldPropertiesDto.Raw,
    Squidex.ReferencesFieldPropertiesDto
> = core.serialization.object({
    defaultValues: core.serialization
        .lazy(async () => (await import("..")).LocalizedValueOfReadonlyListOfString)
        .optional(),
    defaultValue: core.serialization.list(core.serialization.string()).optional(),
    minItems: core.serialization.number().optional(),
    maxItems: core.serialization.number().optional(),
    allowDuplicates: core.serialization.boolean().optional(),
    resolveReference: core.serialization.boolean().optional(),
    mustBePublished: core.serialization.boolean().optional(),
    query: core.serialization.string().optional(),
    editor: core.serialization.lazy(async () => (await import("..")).ReferencesFieldEditor).optional(),
    schemaIds: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ReferencesFieldPropertiesDto {
    interface Raw {
        defaultValues?: serializers.LocalizedValueOfReadonlyListOfString.Raw | null;
        defaultValue?: string[] | null;
        minItems?: number | null;
        maxItems?: number | null;
        allowDuplicates?: boolean | null;
        resolveReference?: boolean | null;
        mustBePublished?: boolean | null;
        query?: string | null;
        editor?: serializers.ReferencesFieldEditor.Raw | null;
        schemaIds?: string[] | null;
    }
}
