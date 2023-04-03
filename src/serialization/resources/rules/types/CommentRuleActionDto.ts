/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const CommentRuleActionDto: core.serialization.ObjectSchema<
    serializers.CommentRuleActionDto.Raw,
    Squidex.CommentRuleActionDto
> = core.serialization.object({
    text: core.serialization.string(),
    client: core.serialization.string().optional(),
});

export declare namespace CommentRuleActionDto {
    interface Raw {
        text: string;
        client?: string | null;
    }
}
