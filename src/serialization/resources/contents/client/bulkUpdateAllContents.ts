/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Squidex from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.contents.bulkUpdateAllContents.Response.Raw,
    Squidex.BulkResultDto[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).BulkResultDto));

export declare namespace Response {
    type Raw = serializers.BulkResultDto.Raw[];
}
