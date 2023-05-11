/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AssetsPostUpsertAssetRequest {
    /**
     * The optional parent folder id.
     */
    parentId?: string;
    /**
     * True to duplicate the asset, event if the file has been uploaded.
     */
    duplicate?: boolean;
}
