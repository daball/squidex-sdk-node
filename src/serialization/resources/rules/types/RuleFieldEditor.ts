/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const RuleFieldEditor: core.serialization.Schema<serializers.RuleFieldEditor.Raw, Squidex.RuleFieldEditor> =
    core.serialization.enum_([
        "Checkbox",
        "Dropdown",
        "Email",
        "Javascript",
        "Number",
        "Password",
        "Text",
        "TextArea",
        "Url",
    ]);

export declare namespace RuleFieldEditor {
    type Raw = "Checkbox" | "Dropdown" | "Email" | "Javascript" | "Number" | "Password" | "Text" | "TextArea" | "Url";
}
