/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const TranslationResultCode: core.serialization.Schema<
    serializers.TranslationResultCode.Raw,
    Squidex.TranslationResultCode
> = core.serialization.enum_([
    "Translated",
    "LanguageNotSupported",
    "NotTranslated",
    "NotConfigured",
    "Unauthorized",
    "Failed",
]);

export declare namespace TranslationResultCode {
    type Raw = "Translated" | "LanguageNotSupported" | "NotTranslated" | "NotConfigured" | "Unauthorized" | "Failed";
}
