/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const DateTimeCalculatedDefaultValue: core.serialization.Schema<
    serializers.DateTimeCalculatedDefaultValue.Raw,
    Squidex.DateTimeCalculatedDefaultValue
> = core.serialization.enum_(["Now", "Today"]);

export declare namespace DateTimeCalculatedDefaultValue {
    type Raw = "Now" | "Today";
}
