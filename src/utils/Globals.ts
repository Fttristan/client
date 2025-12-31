import Logger from "./Logger";
import { DefaultRouteSettings, RouteSettings } from "./constants";

const logger = new Logger("Globals");

// Utility to normalize URLs and remove trailing slashes
function normalizeUrl(url: string): string {
    return url.replace(/\/+$/, "");
}

export const Globals: {
    load: () => void;
    save: () => void;
    routeSettings: RouteSettings;
} = {
    load: () => {
        logger.info("Initializing Globals");
        const settings = localStorage.getItem("routeSettings");

        if (!settings) {
            // No saved settings — normalize defaults
            Globals.routeSettings = {
                ...DefaultRouteSettings,
                wellknown: normalizeUrl(DefaultRouteSettings.wellknown),
                api: normalizeUrl(DefaultRouteSettings.api),
                cdn: normalizeUrl(DefaultRouteSettings.cdn),
                gateway: normalizeUrl(DefaultRouteSettings.gateway),
            };
            return;
        }

        const parsed: RouteSettings = JSON.parse(settings);

        // Normalize all URLs to prevent double slashes
        Globals.routeSettings = {
            api: normalizeUrl(parsed.api),
            cdn: normalizeUrl(parsed.cdn),
            gateway: normalizeUrl(parsed.gateway),
            wellknown: normalizeUrl(parsed.wellknown),
        };

        logger.info("Loaded route settings from storage");
    },

    save: () => {
        // Always save normalized values
        Globals.routeSettings = {
            api: normalizeUrl(Globals.routeSettings.api),
            cdn: normalizeUrl(Globals.routeSettings.cdn),
            gateway: normalizeUrl(Globals.routeSettings.gateway),
            wellknown: normalizeUrl(Globals.routeSettings.wellknown),
        };

        localStorage.setItem("routeSettings", JSON.stringify(Globals.routeSettings));
    },

    // Default values (will be normalized on load)
    routeSettings: {
        ...DefaultRouteSettings,
        api: normalizeUrl(DefaultRouteSettings.api),
        cdn: normalizeUrl(DefaultRouteSettings.cdn),
        gateway: normalizeUrl(DefaultRouteSettings.gateway),
        wellknown: normalizeUrl(DefaultRouteSettings.wellknown),
    },
};
