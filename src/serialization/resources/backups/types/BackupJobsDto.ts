/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const BackupJobsDto: core.serialization.ObjectSchema<serializers.BackupJobsDto.Raw, Squidex.BackupJobsDto> =
    core.serialization
        .object({
            items: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../..")).BackupJobDto)
            ),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).Resource));

export declare namespace BackupJobsDto {
    interface Raw extends serializers.Resource.Raw {
        items: serializers.BackupJobDto.Raw[];
    }
}
