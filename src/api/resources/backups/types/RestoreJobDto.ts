/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Squidex } from "@fern-api/squidex";

export interface RestoreJobDto {
    /** The uri to load from. */
    url: string;
    /** The status log. */
    log: string[];
    /** The time when the job has been started. */
    started?: string;
    /** The time when the job has been stopped. */
    stopped?: string;
    status?: Squidex.JobStatus;
}
