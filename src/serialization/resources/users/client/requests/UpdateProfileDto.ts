/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Squidex from "../../../../../api";
import * as core from "../../../../../core";

export const UpdateProfileDto: core.serialization.Schema<serializers.UpdateProfileDto.Raw, Squidex.UpdateProfileDto> =
    core.serialization.object({
        answers: core.serialization
            .record(core.serialization.string(), core.serialization.string().optional())
            .optional(),
    });

export declare namespace UpdateProfileDto {
    interface Raw {
        answers?: Record<string, string | null | undefined> | null;
    }
}
