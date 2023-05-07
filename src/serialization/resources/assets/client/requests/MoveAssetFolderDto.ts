/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Squidex from "../../../../../api";
import * as core from "../../../../../core";

export const MoveAssetFolderDto: core.serialization.Schema<
    serializers.MoveAssetFolderDto.Raw,
    Squidex.MoveAssetFolderDto
> = core.serialization.object({
    parentId: core.serialization.string().optional(),
});

export declare namespace MoveAssetFolderDto {
    interface Raw {
        parentId?: string | null;
    }
}