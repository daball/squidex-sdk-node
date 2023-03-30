/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Squidex } from "@fern-api/squidex";

export interface AssetDto extends Squidex.Resource {
    /** The ID of the asset. */
    id?: string;
    /** The ID of the parent folder. Empty for files without parent. */
    parentId?: string;
    /** The file name. */
    fileName: string;
    /** The file hash. */
    fileHash?: string;
    /** True, when the asset is not public. */
    isProtected?: boolean;
    /** The slug. */
    slug: string;
    /** The mime type. */
    mimeType: string;
    /** The file type. */
    fileType: string;
    /** The formatted text representation of the metadata. */
    metadataText: string;
    /** The UI token. */
    editToken?: string;
    /** The asset metadata. */
    metadata: Record<string, unknown>;
    /** The asset tags. */
    tags: string[];
    /** The size of the file in bytes. */
    fileSize?: number;
    /** The version of the file. */
    fileVersion?: number;
    type?: Squidex.AssetType;
    /** The user that has created the schema. */
    createdBy: string;
    /** The user that has updated the asset. */
    lastModifiedBy: string;
    /** The date and time when the asset has been created. */
    created?: string;
    /** The date and time when the asset has been modified last. */
    lastModified?: string;
    /** The version of the asset. */
    version?: number;
    meta?: Squidex.AssetMeta;
    /** Determines of the created file is an image. */
    isImage?: boolean;
    /** The width of the image in pixels if the asset is an image. */
    pixelWidth?: number;
    /** The height of the image in pixels if the asset is an image. */
    pixelHeight?: number;
}
