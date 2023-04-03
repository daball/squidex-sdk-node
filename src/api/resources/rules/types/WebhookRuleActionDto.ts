/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Squidex } from "@fern-api/squidex";

export interface WebhookRuleActionDto {
    /** The url to the webhook. */
    url: string;
    method: Squidex.WebhookMethod;
    /** Leave it empty to use the full event as body. */
    payload?: string;
    /** The mime type of the payload. */
    payloadType?: string;
    /** The message headers in the format '[Key]=[Value]', one entry per line. */
    headers?: string;
    /** The shared secret that is used to calculate the payload signature. */
    sharedSecret?: string;
}
