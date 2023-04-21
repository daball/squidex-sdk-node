/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Squidex } from "@squidex/squidex";

export interface BulkUpdateAssetsDto {
    /** The contents to update or insert. */
    jobs: Squidex.BulkUpdateAssetsJobDto[];
    /** True to check referrers of deleted assets. */
    checkReferrers?: boolean;
    /** True to turn off costly validation: Folder checks. Default: true. */
    optimizeValidation?: boolean;
    /** True to turn off scripting for faster inserts. Default: true. */
    doNotScript?: boolean;
}
