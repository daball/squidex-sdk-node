/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Squidex from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Search {
    interface Options {
        environment?: core.Supplier<environments.SquidexEnvironment | string>;
        appName: string;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
        streamingFetcher?: core.StreamingFetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Search {
    constructor(protected readonly _options: Search.Options) {}

    /**
     * @throws {@link Squidex.NotFoundError}
     * @throws {@link Squidex.InternalServerError}
     */
    public async getSearchResults(
        request: Squidex.SearchGetSearchResultsRequest = {},
        requestOptions?: Search.RequestOptions
    ): Promise<Squidex.SearchResultDto[]> {
        const { query } = request;
        const _queryParams = new URLSearchParams();
        if (query != null) {
            _queryParams.append("query", query);
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SquidexEnvironment.Default,
                `api/apps/${this._options.appName}/search`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@squidex/squidex",
                "X-Fern-SDK-Version": "1.1.0",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.search.getSearchResults.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
