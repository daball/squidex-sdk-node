/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface SimulatedRuleEventDto {
    /** The unique event id. <span style="white-space: nowrap">`non-empty`</span> */
    eventId: string;
    /** The the unique id of the simulated event. <span style="white-space: nowrap">`non-empty`</span> */
    uniqueId: string;
    /** The name of the event. <span style="white-space: nowrap">`non-empty`</span> */
    eventName: string;
    event?: unknown;
    enrichedEvent?: unknown;
    /** The data for the action. */
    actionName?: string;
    /** The name of the action. */
    actionData?: string;
    /** The name of the event. */
    error?: string;
    /** The reason why the event has been skipped. */
    skipReasons: Squidex.SkipReason[];
}
