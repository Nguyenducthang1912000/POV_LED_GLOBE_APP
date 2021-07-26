import { config } from "../config/config";

var ratio = 255 / 365;

export function setControlAuto() {
  return fetch(config.endPoint + "/control", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      controller: {
        mode: "auto",
        type: "",
        r: 0,
        g: 0,
        b: 0,
        source: "",
        pos: 0,
        width: 0,
      },
    }),
  });
}

export function setControlText(
  text: string,
  color: { r: number; g: number; b: number },
  position: number,
  width: number
) {
  //text = text.toUpperCase();
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
        width: "line",
      },
    }),
  });
}

export function setControlImage(source: string, position: number, width: number) {
  return fetch(config.endPoint + "/control", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      controller: {
        mode: "manual",
        type: "image",
        r: 0,
        g: 0,
        b: 0,
        source,
        pos: Math.round(position * ratio),
        width: Math.round(width * ratio),
      },
    }),
  });
}

export function setControlVideo(source: string, position: number, width: number) {
  return fetch(config.endPoint + "/control", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      controller: {
        mode: "manual",
        type: "video",
        r: 0,
        g: 0,
        b: 0,
        source,
        pos: Math.round(position * ratio),
        width: Math.round(width * ratio),
      },
    }),
  });
}
