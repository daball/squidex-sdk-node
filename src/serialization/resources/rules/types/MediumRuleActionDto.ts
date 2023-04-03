/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const MediumRuleActionDto: core.serialization.ObjectSchema<
    serializers.MediumRuleActionDto.Raw,
    Squidex.MediumRuleActionDto
> = core.serialization.object({
    accessToken: core.serialization.string(),
    title: core.serialization.string(),
    content: core.serialization.string(),
    canonicalUrl: core.serialization.string().optional(),
    tags: core.serialization.string().optional(),
    publicationId: core.serialization.string().optional(),
    isHtml: core.serialization.boolean().optional(),
});

export declare namespace MediumRuleActionDto {
    interface Raw {
        accessToken: string;
        title: string;
        content: string;
        canonicalUrl?: string | null;
        tags?: string | null;
        publicationId?: string | null;
        isHtml?: boolean | null;
    }
}
