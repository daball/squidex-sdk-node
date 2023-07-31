/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface AddFieldDto {
    /** The name of the field. Must be unique within the schema. <span style="white-space: nowrap">`non-empty`</span> */
    name: string;
    /** Determines the optional partitioning of the field. */
    partitioning?: string;
    properties: Squidex.FieldPropertiesDto;
}
