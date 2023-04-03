/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Squidex } from "@fern-api/squidex";

export type RuleTriggerDto =
    | Squidex.RuleTriggerDto.AssetChanged
    | Squidex.RuleTriggerDto.Comment
    | Squidex.RuleTriggerDto.ContentChanged
    | Squidex.RuleTriggerDto.Manual
    | Squidex.RuleTriggerDto.SchemaChanged
    | Squidex.RuleTriggerDto.Usage;

export declare namespace RuleTriggerDto {
    interface AssetChanged extends Squidex.AssetChangedRuleTriggerDto {
        triggerType: "AssetChanged";
    }

    interface Comment extends Squidex.CommentRuleTriggerDto {
        triggerType: "Comment";
    }

    interface ContentChanged extends Squidex.ContentChangedRuleTriggerDto {
        triggerType: "ContentChanged";
    }

    interface Manual extends Squidex.ManualRuleTriggerDto {
        triggerType: "Manual";
    }

    interface SchemaChanged extends Squidex.SchemaChangedRuleTriggerDto {
        triggerType: "SchemaChanged";
    }

    interface Usage extends Squidex.UsageRuleTriggerDto {
        triggerType: "Usage";
    }
}
