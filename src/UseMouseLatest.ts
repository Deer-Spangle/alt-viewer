import React, {useRef} from "react";
import useMouse from "@react-hook/mouse-position";


export interface MouseCoords {
    x: number | null;
    y: number | null;
}

export function useMouseLatest<T extends HTMLElement = HTMLElement>(ref: React.RefObject<T> | T | null) {
    const lastMouse = useRef<MouseCoords>({x: null, y: null});
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100,
    })
    if (mouse.x != null && mouse.y != null && mouse.x > 0 && mouse.y > 0) {
        lastMouse.current = {x: mouse.x, y: mouse.y};
    }
    return lastMouse.current;
}