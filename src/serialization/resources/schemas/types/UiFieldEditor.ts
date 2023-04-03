/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const UiFieldEditor: core.serialization.Schema<serializers.UiFieldEditor.Raw, Squidex.UiFieldEditor> =
    core.serialization.enum_(["Separator"]);

export declare namespace UiFieldEditor {
    type Raw = "Separator";
}
