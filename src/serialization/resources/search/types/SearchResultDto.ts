/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const SearchResultDto: core.serialization.ObjectSchema<
    serializers.SearchResultDto.Raw,
    Squidex.SearchResultDto
> = core.serialization
    .object({
        name: core.serialization.string(),
        type: core.serialization.lazy(async () => (await import("../../..")).SearchResultType),
        label: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Resource));

export declare namespace SearchResultDto {
    interface Raw extends serializers.Resource.Raw {
        name: string;
        type: serializers.SearchResultType.Raw;
        label?: string | null;
    }
}
