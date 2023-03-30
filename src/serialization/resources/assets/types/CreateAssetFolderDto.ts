/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const CreateAssetFolderDto: core.serialization.ObjectSchema<
    serializers.CreateAssetFolderDto.Raw,
    Squidex.CreateAssetFolderDto
> = core.serialization.object({
    folderName: core.serialization.string(),
    parentId: core.serialization.string().optional(),
});

export declare namespace CreateAssetFolderDto {
    interface Raw {
        folderName: string;
        parentId?: string | null;
    }
}
