/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const ActionTypeEnum: core.serialization.Schema<serializers.ActionTypeEnum.Raw, Squidex.ActionTypeEnum> =
    core.serialization.enum_(["Broadcast", "User", "Group"]);

export declare namespace ActionTypeEnum {
    type Raw = "Broadcast" | "User" | "Group";
}
