/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Squidex from "../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Notifications {
    interface Options {
        environment?: environments.SquidexEnvironment | string;
        appName: string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Notifications {
    constructor(protected readonly options: Notifications.Options) {}

    /**
     * When passing in a version you can retrieve all updates since then.
     * @throws {Squidex.InternalServerError}
     */
    public async getNotifications(
        userId: string,
        request: Squidex.NotificationsGetNotificationsRequest = {}
    ): Promise<Squidex.CommentsDto> {
        const { version } = request;
        const _queryParams = new URLSearchParams();
        if (version != null) {
            _queryParams.append("version", version.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexEnvironment.Default,
                `api/users/${userId}/notifications`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "0.0.26",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.CommentsDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {Squidex.BadRequestError}
     * @throws {Squidex.NotFoundError}
     * @throws {Squidex.InternalServerError}
     */
    public async deleteComment(userId: string, commentId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SquidexEnvironment.Default,
                `api/users/${userId}/notifications/${commentId}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "0.0.26",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Squidex.BadRequestError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Squidex.NotFoundError(_response.error.body);
                case 500:
                    throw new Squidex.InternalServerError(
                        await serializers.ErrorDto.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SquidexError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
