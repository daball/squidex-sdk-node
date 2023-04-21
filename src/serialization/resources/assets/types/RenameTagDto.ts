/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const RenameTagDto: core.serialization.ObjectSchema<serializers.RenameTagDto.Raw, Squidex.RenameTagDto> =
    core.serialization.object({
        tagName: core.serialization.string(),
    });

export declare namespace RenameTagDto {
    interface Raw {
        tagName: string;
    }
}
