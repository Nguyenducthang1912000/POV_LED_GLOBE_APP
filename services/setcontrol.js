import { config } from "../config/config";
var ratio = 255 / 365;
export const setControlText = (
    text = "",
    color = { r: 0, g: 0, b: 0 },
    position = 0,
    width = 0,
) => {
    return fetch(config.endPoint + "/control", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            controller: {
                mode: "manual",
                type: "text",
                r: color.r,
                g: color.g,
                b: color.b,
                source: text.toUpperCase(),
                pos: Math.round(position * ratio),
                width: width,
            },
        }),
    });
}