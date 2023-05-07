/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Squidex from "../../../../../api";
import * as core from "../../../../../core";

export const TransferToTeamDto: core.serialization.Schema<
    serializers.TransferToTeamDto.Raw,
    Squidex.TransferToTeamDto
> = core.serialization.object({
    teamId: core.serialization.string().optional(),
});

export declare namespace TransferToTeamDto {
    interface Raw {
        teamId?: string | null;
    }
}