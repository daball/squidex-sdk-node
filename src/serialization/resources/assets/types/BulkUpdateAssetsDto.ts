/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const BulkUpdateAssetsDto: core.serialization.ObjectSchema<
    serializers.BulkUpdateAssetsDto.Raw,
    Squidex.BulkUpdateAssetsDto
> = core.serialization.object({
    jobs: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).BulkUpdateAssetsJobDto)
    ),
    checkReferrers: core.serialization.boolean().optional(),
    optimizeValidation: core.serialization.boolean().optional(),
    doNotScript: core.serialization.boolean().optional(),
});

export declare namespace BulkUpdateAssetsDto {
    interface Raw {
        jobs: serializers.BulkUpdateAssetsJobDto.Raw[];
        checkReferrers?: boolean | null;
        optimizeValidation?: boolean | null;
        doNotScript?: boolean | null;
    }
}
