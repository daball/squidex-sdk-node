/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export type RuleTriggerDto =
    | Squidex.RuleTriggerDto.AssetChanged
    | Squidex.RuleTriggerDto.Comment
    | Squidex.RuleTriggerDto.ContentChanged
    | Squidex.RuleTriggerDto.Manual
    | Squidex.RuleTriggerDto.SchemaChanged
    | Squidex.RuleTriggerDto.Usage;

export declare namespace RuleTriggerDto {
    interface AssetChanged extends Squidex.AssetChangedRuleTriggerDto {
        type: "AssetChanged";
    }

    interface Comment extends Squidex.CommentRuleTriggerDto {
        type: "Comment";
    }

    interface ContentChanged extends Squidex.ContentChangedRuleTriggerDto {
        type: "ContentChanged";
    }

    interface Manual extends Squidex.ManualRuleTriggerDto {
        type: "Manual";
    }

    interface SchemaChanged extends Squidex.SchemaChangedRuleTriggerDto {
        type: "SchemaChanged";
    }

    interface Usage extends Squidex.UsageRuleTriggerDto {
        type: "Usage";
    }
}
