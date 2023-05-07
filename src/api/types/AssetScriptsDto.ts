/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AssetScriptsDto {
    /** The script that is executed for each asset when querying assets. */
    query?: string;
    /** The script that is executed for all assets when querying assets. */
    queryPre?: string;
    /** The script that is executed when creating an asset. */
    create?: string;
    /** The script that is executed when updating a content. */
    update?: string;
    /** The script that is executed when annotating a content. */
    annotate?: string;
    /** The script that is executed when moving a content. */
    move?: string;
    /** The script that is executed when deleting a content. */
    delete?: string;
    /** The version of the app. */
    version?: number;
}