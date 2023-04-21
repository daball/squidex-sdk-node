/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const LocalizedValueOfString: core.serialization.Schema<
    serializers.LocalizedValueOfString.Raw,
    Squidex.LocalizedValueOfString
> = core.serialization.record(core.serialization.string(), core.serialization.string());

export declare namespace LocalizedValueOfString {
    type Raw = Record<string, string>;
}
