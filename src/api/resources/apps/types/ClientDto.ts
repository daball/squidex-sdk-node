/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Squidex } from "@fern-api/squidex";

export interface ClientDto extends Squidex.Resource {
    /** The client id. */
    id: string;
    /** The client secret. */
    secret: string;
    /** The client name. */
    name: string;
    /** The role of the client. */
    role?: string;
    /** The number of allowed api calls per month for this client. */
    apiCallsLimit?: number;
    /** The number of allowed api traffic bytes per month for this client. */
    apiTrafficLimit?: number;
    /** True to allow anonymous access without an access token for this client. */
    allowAnonymous?: boolean;
}
