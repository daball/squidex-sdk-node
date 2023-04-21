/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const SlackRuleActionDto: core.serialization.ObjectSchema<
    serializers.SlackRuleActionDto.Raw,
    Squidex.SlackRuleActionDto
> = core.serialization.object({
    webhookUrl: core.serialization.string(),
    text: core.serialization.string(),
});

export declare namespace SlackRuleActionDto {
    interface Raw {
        webhookUrl: string;
        text: string;
    }
}
