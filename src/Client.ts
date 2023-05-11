/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { UserManagement } from "./api/resources/userManagement/client/Client";
import { Users } from "./api/resources/users/client/Client";
import { Translations } from "./api/resources/translations/client/Client";
import { Templates } from "./api/resources/templates/client/Client";
import { Teams } from "./api/resources/teams/client/Client";
import { Statistics } from "./api/resources/statistics/client/Client";
import { Search } from "./api/resources/search/client/Client";
import { Schemas } from "./api/resources/schemas/client/Client";
import { Rules } from "./api/resources/rules/client/Client";
import { Plans } from "./api/resources/plans/client/Client";
import { Ping } from "./api/resources/ping/client/Client";
import { News } from "./api/resources/news/client/Client";
import { Languages } from "./api/resources/languages/client/Client";
import { History } from "./api/resources/history/client/Client";
import { EventConsumers } from "./api/resources/eventConsumers/client/Client";
import { Diagnostics } from "./api/resources/diagnostics/client/Client";
import { Contents } from "./api/resources/contents/client/Client";
import { Comments } from "./api/resources/comments/client/Client";
import { Notifications } from "./api/resources/notifications/client/Client";
import { Backups } from "./api/resources/backups/client/Client";
import { Assets } from "./api/resources/assets/client/Client";
import { Apps } from "./api/resources/apps/client/Client";

export declare namespace SquidexClient {
    interface Options {
        environment?: environments.SquidexEnvironment | string;
        appName: string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class SquidexClient {
    constructor(protected readonly options: SquidexClient.Options) {}

    protected _userManagement: UserManagement | undefined;

    public get userManagement(): UserManagement {
        return (this._userManagement ??= new UserManagement(this.options));
    }

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this.options));
    }

    protected _translations: Translations | undefined;

    public get translations(): Translations {
        return (this._translations ??= new Translations(this.options));
    }

    protected _templates: Templates | undefined;

    public get templates(): Templates {
        return (this._templates ??= new Templates(this.options));
    }

    protected _teams: Teams | undefined;

    public get teams(): Teams {
        return (this._teams ??= new Teams(this.options));
    }

    protected _statistics: Statistics | undefined;

    public get statistics(): Statistics {
        return (this._statistics ??= new Statistics(this.options));
    }

    protected _search: Search | undefined;

    public get search(): Search {
        return (this._search ??= new Search(this.options));
    }

    protected _schemas: Schemas | undefined;

    public get schemas(): Schemas {
        return (this._schemas ??= new Schemas(this.options));
    }

    protected _rules: Rules | undefined;

    public get rules(): Rules {
        return (this._rules ??= new Rules(this.options));
    }

    protected _plans: Plans | undefined;

    public get plans(): Plans {
        return (this._plans ??= new Plans(this.options));
    }

    protected _ping: Ping | undefined;

    public get ping(): Ping {
        return (this._ping ??= new Ping(this.options));
    }

    protected _news: News | undefined;

    public get news(): News {
        return (this._news ??= new News(this.options));
    }

    protected _languages: Languages | undefined;

    public get languages(): Languages {
        return (this._languages ??= new Languages(this.options));
    }

    protected _history: History | undefined;

    public get history(): History {
        return (this._history ??= new History(this.options));
    }

    protected _eventConsumers: EventConsumers | undefined;

    public get eventConsumers(): EventConsumers {
        return (this._eventConsumers ??= new EventConsumers(this.options));
    }

    protected _diagnostics: Diagnostics | undefined;

    public get diagnostics(): Diagnostics {
        return (this._diagnostics ??= new Diagnostics(this.options));
    }

    protected _contents: Contents | undefined;

    public get contents(): Contents {
        return (this._contents ??= new Contents(this.options));
    }

    protected _comments: Comments | undefined;

    public get comments(): Comments {
        return (this._comments ??= new Comments(this.options));
    }

    protected _notifications: Notifications | undefined;

    public get notifications(): Notifications {
        return (this._notifications ??= new Notifications(this.options));
    }

    protected _backups: Backups | undefined;

    public get backups(): Backups {
        return (this._backups ??= new Backups(this.options));
    }

    protected _assets: Assets | undefined;

    public get assets(): Assets {
        return (this._assets ??= new Assets(this.options));
    }

    protected _apps: Apps | undefined;

    public get apps(): Apps {
        return (this._apps ??= new Apps(this.options));
    }
}
