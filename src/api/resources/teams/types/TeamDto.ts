/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Squidex } from "@squidex/squidex";

export interface TeamDto extends Squidex.Resource {
    /** The ID of the team. */
    id?: string;
    /** The name of the team. */
    name: string;
    /** The version of the team. */
    version?: number;
    /** The timestamp when the team has been created. */
    created?: string;
    /** The timestamp when the team has been modified last. */
    lastModified?: string;
    /** The role name of the user. */
    roleName?: string;
}
