/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const UpdateUserDto: core.serialization.ObjectSchema<serializers.UpdateUserDto.Raw, Squidex.UpdateUserDto> =
    core.serialization.object({
        email: core.serialization.string(),
        displayName: core.serialization.string(),
        password: core.serialization.string().optional(),
        permissions: core.serialization.list(core.serialization.string()),
    });

export declare namespace UpdateUserDto {
    interface Raw {
        email: string;
        displayName: string;
        password?: string | null;
        permissions: string[];
    }
}
