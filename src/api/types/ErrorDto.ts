/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ErrorDto {
    /** Error message. <span style="white-space: nowrap">`non-empty`</span> */
    message: string;
    /** The error code. */
    errorCode?: string;
    /** The optional trace id. */
    traceId?: string;
    /** Link to the error details. */
    type?: string;
    /** Detailed error messages. */
    details?: string[];
    /** Status code of the http response. */
    statusCode: number;
}
