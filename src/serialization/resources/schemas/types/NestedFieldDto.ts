/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const NestedFieldDto: core.serialization.ObjectSchema<serializers.NestedFieldDto.Raw, Squidex.NestedFieldDto> =
    core.serialization
        .object({
            fieldId: core.serialization.number().optional(),
            name: core.serialization.string(),
            isHidden: core.serialization.boolean().optional(),
            isLocked: core.serialization.boolean().optional(),
            isDisabled: core.serialization.boolean().optional(),
            properties: core.serialization.lazy(async () => (await import("../../..")).FieldPropertiesDto),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).Resource));

export declare namespace NestedFieldDto {
    interface Raw extends serializers.Resource.Raw {
        fieldId?: number | null;
        name: string;
        isHidden?: boolean | null;
        isLocked?: boolean | null;
        isDisabled?: boolean | null;
        properties: serializers.FieldPropertiesDto.Raw;
    }
}
