/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface RuleEventDto extends Squidex.Resource {
    /** The ID of the event. */
    id: string;
    /** The time when the event has been created. */
    created: Date;
    /** The description. */
    description: string;
    /** The name of the event. */
    eventName: string;
    /** The last dump. */
    lastDump?: string;
    /** The number of calls. */
    numCalls: number;
    /** The next attempt. */
    nextAttempt?: Date;
    /** The result of the event. */
    result: Squidex.RuleResult;
    /** The result of the job. */
    jobResult: Squidex.RuleJobResult;
}
