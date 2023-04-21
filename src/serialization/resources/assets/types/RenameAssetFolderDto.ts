/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const RenameAssetFolderDto: core.serialization.ObjectSchema<
    serializers.RenameAssetFolderDto.Raw,
    Squidex.RenameAssetFolderDto
> = core.serialization.object({
    folderName: core.serialization.string(),
});

export declare namespace RenameAssetFolderDto {
    interface Raw {
        folderName: string;
    }
}
