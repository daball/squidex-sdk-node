/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const AssetFolderScope: core.serialization.Schema<serializers.AssetFolderScope.Raw, Squidex.AssetFolderScope> =
    core.serialization.enum_(["PathAndItems", "Path", "Items"]);

export declare namespace AssetFolderScope {
    type Raw = "PathAndItems" | "Path" | "Items";
}
