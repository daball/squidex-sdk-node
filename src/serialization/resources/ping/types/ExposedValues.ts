/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const ExposedValues: core.serialization.Schema<serializers.ExposedValues.Raw, Squidex.ExposedValues> =
    core.serialization.record(core.serialization.string(), core.serialization.string());

export declare namespace ExposedValues {
    type Raw = Record<string, string>;
}
