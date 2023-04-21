/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const AlgoliaRuleActionDto: core.serialization.ObjectSchema<
    serializers.AlgoliaRuleActionDto.Raw,
    Squidex.AlgoliaRuleActionDto
> = core.serialization.object({
    appId: core.serialization.string(),
    apiKey: core.serialization.string(),
    indexName: core.serialization.string(),
    document: core.serialization.string().optional(),
    delete: core.serialization.string().optional(),
});

export declare namespace AlgoliaRuleActionDto {
    interface Raw {
        appId: string;
        apiKey: string;
        indexName: string;
        document?: string | null;
        delete?: string | null;
    }
}
