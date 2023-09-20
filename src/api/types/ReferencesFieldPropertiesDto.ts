/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface ReferencesFieldPropertiesDto {
    /** The language specific default value as a list of content ids. */
    defaultValues?: Squidex.LocalizedValueOfReadonlyListOfString;
    /** The default value as a list of content ids. */
    defaultValue?: string[];
    /** The minimum allowed items for the field value. */
    minItems?: number;
    /** The maximum allowed items for the field value. */
    maxItems?: number;
    /** True, if duplicate values are allowed. */
    allowDuplicates?: boolean;
    /** True to resolve references in the content list. */
    resolveReference?: boolean;
    /** True when all references must be published. */
    mustBePublished?: boolean;
    /** The initial query that is applied in the UI. */
    query?: string;
    /** The editor that is used to manage this field. */
    editor?: Squidex.ReferencesFieldEditor;
    /** The ID of the referenced schemas. */
    schemaIds?: string[];
}
