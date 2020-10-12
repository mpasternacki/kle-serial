export declare class Key {
    color: string;
    labels: string[];
    textColor: Array<string | undefined>;
    textSize: Array<number | undefined>;
    default: {
        textColor: string;
        textSize: number;
    };
    x: number;
    y: number;
    width: number;
    height: number;
    x2: number;
    y2: number;
    width2: number;
    height2: number;
    rotation_x: number;
    rotation_y: number;
    rotation_angle: number;
    decal: boolean;
    ghost: boolean;
    stepped: boolean;
    nub: false;
    profile: string;
    sm: string;
    sb: string;
    st: string;
}
export declare class KeyboardMetadata {
    author: string;
    backcolor: string;
    background: {
        name: string;
        style: string;
    } | null;
    name: string;
    notes: string;
    radii: string;
    switchBrand: string;
    switchMount: string;
    switchType: string;
}
export declare class Keyboard {
    meta: KeyboardMetadata;
    keys: Key[];
}
export declare module Serial {
    function deserialize(rows: Array<any>): Keyboard;
    function parse(json: string): Keyboard;
}
