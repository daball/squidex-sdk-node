/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Squidex from "../../../../../api";
import * as core from "../../../../../core";

export const ChangeCategoryDto: core.serialization.Schema<
    serializers.ChangeCategoryDto.Raw,
    Squidex.ChangeCategoryDto
> = core.serialization.object({
    name: core.serialization.string().optional(),
});

export declare namespace ChangeCategoryDto {
    interface Raw {
        name?: string | null;
    }
}