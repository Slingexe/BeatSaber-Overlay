export namespace GlobalVariable {

    /////////////////////
    // GLOBAL VARIABLE //
    /////////////////////
    export const URL_NAV = window.location.search;
    export const URL_TOKEN_SCRIPT = "./php/token.php";
    export const BEATSAVER_API_URL = "https://api.beatsaver.com/";
    export const SCORESABER_API_PROXY_URL = "./php/scoreSaberProxy.php";
    export const DISPLAY_POSITION = [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right"
    ];

    ////////////////////////////////
    // DEBUG MODE GLOBAL VARIABLE //
    ////////////////////////////////
    // export var DEBUG_MESSAGE = {}; // FOR FUTUR

    ////////////////////////////////
    // PARAMETERS GLOBAL VARIABLE //
    ////////////////////////////////
    export const TOKEN_LENGTH = 32;
    export const URL_PARAMS_ALLOWED = [
        //"token",  // Identifier of client configuration

        "ip",       // Local IP or External IP
        "pid",      // Player ID from ScoreSaber

        //"pcsk",   // Skin of Player Card
        "pcpos",    // Position of Player Card
        "pcsc",     // Scale of Player Card

        "scsk",     // Skin of Song Card
        "scpos",    // Position of Song Card
        "pcsc"      // Scale of Player Card
    ];

    /////////////////////////////////
    // PLAYER CARD GLOBAL VARIABLE //
    /////////////////////////////////
    export const SKIN_PLAYER_CARD = [
        "default"
    ];
    export const SkinFilesPlayerCard = {
        "default": ["index.html", "style.css"]
    };

    //////////////////////////////
    // SONGCARD GLOBAL VARIABLE //
    //////////////////////////////
    export const MS_TIMER = 100;
    export const SKIN_SONG_CARD = [
        "default",
        "freemium"
    ];
    export const SkinFilesSongCard = {
        default: ["index.html", "style.css"],
        freemium: ["index.html", "style.css"]
    };

    /////////////////////////////
    // PLUGINS GLOBAL VARIABLE //
    /////////////////////////////
    export const TIMEOUT_MS = 500;
    export const TIME_BEFORE_RETRY = 10000;
    export const RETRY_NUMBER = 2;

    export const BeatSaberPlus = {
        port: "2947",
        entry: "/socket"
    };

    export const HttpStatus = {
        port: "6557",
        entry: "/socket"
    };

    export const DataPuller = {
        port: "2946",
        entry: "/BSDataPuller/",
        endPoint: {
            mapData: "MapData",
            liveData: "LiveData"
        }
    };

    export enum WEBSOCKET_STATE {
        CONNECTED,
        DISCONNECTED,
        ERROR
    }

    ///////////////////////////
    // SETUP GLOBAL VARIABLE //
    ///////////////////////////
    export const SKIN_SETUP = [
        "default"
    ];
    export const SkinFilesSetup = {
        home: ["home.html", "style.css"],
        setup: ["setup.html", "style.css"],
        empty: []
    };

    ////////////////////////
    // UI GLOBAL VARIABLE //
    ////////////////////////
    export const FPS_REFRESH_TICK = 1000 / 10;
}