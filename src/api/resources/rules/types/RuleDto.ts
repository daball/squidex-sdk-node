/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Squidex } from "@fern-api/squidex";

export interface RuleDto extends Squidex.Resource {
    /** The ID of the rule. */
    id?: string;
    /** The user that has created the rule. */
    createdBy: string;
    /** The user that has updated the rule. */
    lastModifiedBy: string;
    /** The date and time when the rule has been created. */
    created?: string;
    /** The date and time when the rule has been modified last. */
    lastModified?: string;
    /** The version of the rule. */
    version?: number;
    /** Determines if the rule is enabled. */
    isEnabled?: boolean;
    /** Optional rule name. */
    name?: string;
    trigger: Squidex.RuleTriggerDto;
    action: Squidex.RuleActionDto;
    /** The number of completed executions. */
    numSucceeded?: number;
    /** The number of failed executions. */
    numFailed?: number;
    /** The date and time when the rule was executed the last time. */
    lastExecuted?: string;
}
