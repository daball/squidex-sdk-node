/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const NumberFieldEditor: core.serialization.Schema<
    serializers.NumberFieldEditor.Raw,
    Squidex.NumberFieldEditor
> = core.serialization.enum_(["Input", "Radio", "Dropdown", "Stars"]);

export declare namespace NumberFieldEditor {
    type Raw = "Input" | "Radio" | "Dropdown" | "Stars";
}
