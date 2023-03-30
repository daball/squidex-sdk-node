/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const FeaturesDto: core.serialization.ObjectSchema<serializers.FeaturesDto.Raw, Squidex.FeaturesDto> =
    core.serialization.object({
        features: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).FeatureDto)
        ),
        version: core.serialization.number().optional(),
    });

export declare namespace FeaturesDto {
    interface Raw {
        features: serializers.FeatureDto.Raw[];
        version?: number | null;
    }
}
