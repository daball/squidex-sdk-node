/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateContentRuleActionDto {
    /** The content data. <span style="white-space: nowrap">`non-empty`</span> */
    data: string;
    /** The name of the schema. <span style="white-space: nowrap">`non-empty`</span> */
    schema: string;
    /** An optional client name. */
    client: string;
    /** Publish the content. */
    publish: boolean;
}
