/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const TweetRuleActionDto: core.serialization.ObjectSchema<
    serializers.TweetRuleActionDto.Raw,
    Squidex.TweetRuleActionDto
> = core.serialization.object({
    accessToken: core.serialization.string(),
    accessSecret: core.serialization.string(),
    text: core.serialization.string(),
});

export declare namespace TweetRuleActionDto {
    interface Raw {
        accessToken: string;
        accessSecret: string;
        text: string;
    }
}
