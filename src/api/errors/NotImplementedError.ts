/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";
import * as Squidex from "..";

export class NotImplementedError extends errors.SquidexError {
    constructor(body: Squidex.ErrorDto) {
        super({
            message: "NotImplementedError",
            statusCode: 501,
            body: body,
        });
        Object.setPrototypeOf(this, NotImplementedError.prototype);
    }
}
