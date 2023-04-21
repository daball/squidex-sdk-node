/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const UpdateTeamDto: core.serialization.ObjectSchema<serializers.UpdateTeamDto.Raw, Squidex.UpdateTeamDto> =
    core.serialization.object({
        name: core.serialization.string(),
    });

export declare namespace UpdateTeamDto {
    interface Raw {
        name: string;
    }
}
