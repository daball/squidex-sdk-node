/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const CreateSchemaDto: core.serialization.ObjectSchema<
    serializers.CreateSchemaDto.Raw,
    Squidex.CreateSchemaDto
> = core.serialization
    .object({
        name: core.serialization.string(),
        type: core.serialization.lazy(async () => (await import("../../..")).SchemaType).optional(),
        isSingleton: core.serialization.boolean().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).UpsertSchemaDto));

export declare namespace CreateSchemaDto {
    interface Raw extends serializers.UpsertSchemaDto.Raw {
        name: string;
        type?: serializers.SchemaType.Raw | null;
        isSingleton?: boolean | null;
    }
}
