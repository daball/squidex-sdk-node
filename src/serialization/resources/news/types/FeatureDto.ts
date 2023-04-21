/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const FeatureDto: core.serialization.ObjectSchema<serializers.FeatureDto.Raw, Squidex.FeatureDto> =
    core.serialization.object({
        name: core.serialization.string(),
        text: core.serialization.string(),
    });

export declare namespace FeatureDto {
    interface Raw {
        name: string;
        text: string;
    }
}
