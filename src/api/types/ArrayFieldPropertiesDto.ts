/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface ArrayFieldPropertiesDto {
    /** The minimum allowed items for the field value. */
    minItems?: number;
    /** The maximum allowed items for the field value. */
    maxItems?: number;
    /** The calculated default value for the field value. */
    calculatedDefaultValue?: Squidex.ArrayCalculatedDefaultValue;
    /** The fields that must be unique. */
    uniqueFields?: string[];
}
