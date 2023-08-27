import path from "path-browserify";

export function getPath(...info) {
    const dbPath = import.meta.env.VITE_DB_PATH;
    const fullPath = getHttpHeader() + path.join(dbPath, ...info);
    return fullPath;
}

export function getWebsiteRunningMode () {
    return import.meta.env.MODE
}

export function getHttpHeader() {
    if (getWebsiteRunningMode() === "development") {
        return "http://";
    }
    return "https://"
}