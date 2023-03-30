/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const ErrorDto: core.serialization.ObjectSchema<serializers.ErrorDto.Raw, Squidex.ErrorDto> =
    core.serialization.object({
        message: core.serialization.string(),
        errorCode: core.serialization.string().optional(),
        traceId: core.serialization.string().optional(),
        type: core.serialization.string().optional(),
        details: core.serialization.list(core.serialization.string()).optional(),
        statusCode: core.serialization.number().optional(),
    });

export declare namespace ErrorDto {
    interface Raw {
        message: string;
        errorCode?: string | null;
        traceId?: string | null;
        type?: string | null;
        details?: string[] | null;
        statusCode?: number | null;
    }
}
