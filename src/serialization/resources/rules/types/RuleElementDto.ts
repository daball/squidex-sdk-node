/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const RuleElementDto: core.serialization.ObjectSchema<serializers.RuleElementDto.Raw, Squidex.RuleElementDto> =
    core.serialization.object({
        description: core.serialization.string(),
        display: core.serialization.string(),
        title: core.serialization.string().optional(),
        iconColor: core.serialization.string().optional(),
        iconImage: core.serialization.string().optional(),
        readMore: core.serialization.string().optional(),
        properties: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).RuleElementPropertyDto)
        ),
    });

export declare namespace RuleElementDto {
    interface Raw {
        description: string;
        display: string;
        title?: string | null;
        iconColor?: string | null;
        iconImage?: string | null;
        readMore?: string | null;
        properties: serializers.RuleElementPropertyDto.Raw[];
    }
}
