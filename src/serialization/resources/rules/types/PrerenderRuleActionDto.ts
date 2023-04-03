/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const PrerenderRuleActionDto: core.serialization.ObjectSchema<
    serializers.PrerenderRuleActionDto.Raw,
    Squidex.PrerenderRuleActionDto
> = core.serialization.object({
    token: core.serialization.string(),
    url: core.serialization.string(),
});

export declare namespace PrerenderRuleActionDto {
    interface Raw {
        token: string;
        url: string;
    }
}
