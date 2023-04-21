/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@squidex/squidex";
import * as core from "../../../../core";

export const RolesDto: core.serialization.ObjectSchema<serializers.RolesDto.Raw, Squidex.RolesDto> = core.serialization
    .object({
        items: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).RoleDto)),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Resource));

export declare namespace RolesDto {
    interface Raw extends serializers.Resource.Raw {
        items: serializers.RoleDto.Raw[];
    }
}
