/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const BulkUpdateAssetType: core.serialization.Schema<
    serializers.BulkUpdateAssetType.Raw,
    Squidex.BulkUpdateAssetType
> = core.serialization.enum_(["Annotate", "Move", "Delete"]);

export declare namespace BulkUpdateAssetType {
    type Raw = "Annotate" | "Move" | "Delete";
}
