/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const RuleDto: core.serialization.ObjectSchema<serializers.RuleDto.Raw, Squidex.RuleDto> = core.serialization
    .object({
        id: core.serialization.string().optional(),
        createdBy: core.serialization.string(),
        lastModifiedBy: core.serialization.string(),
        created: core.serialization.string().optional(),
        lastModified: core.serialization.string().optional(),
        version: core.serialization.number().optional(),
        isEnabled: core.serialization.boolean().optional(),
        name: core.serialization.string().optional(),
        trigger: core.serialization.lazy(async () => (await import("../../..")).RuleTriggerDto),
        action: core.serialization.lazy(async () => (await import("../../..")).RuleActionDto),
        numSucceeded: core.serialization.number().optional(),
        numFailed: core.serialization.number().optional(),
        lastExecuted: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Resource));

export declare namespace RuleDto {
    interface Raw extends serializers.Resource.Raw {
        id?: string | null;
        createdBy: string;
        lastModifiedBy: string;
        created?: string | null;
        lastModified?: string | null;
        version?: number | null;
        isEnabled?: boolean | null;
        name?: string | null;
        trigger: serializers.RuleTriggerDto.Raw;
        action: serializers.RuleActionDto.Raw;
        numSucceeded?: number | null;
        numFailed?: number | null;
        lastExecuted?: string | null;
    }
}
