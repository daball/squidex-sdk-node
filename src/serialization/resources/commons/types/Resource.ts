/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const Resource: core.serialization.ObjectSchema<serializers.Resource.Raw, Squidex.Resource> =
    core.serialization.object({
        links: core.serialization.property(
            "_links",
            core.serialization.record(
                core.serialization.string(),
                core.serialization.lazyObject(async () => (await import("../../..")).ResourceLink)
            )
        ),
    });

export declare namespace Resource {
    interface Raw {
        _links: Record<string, serializers.ResourceLink.Raw>;
    }
}
