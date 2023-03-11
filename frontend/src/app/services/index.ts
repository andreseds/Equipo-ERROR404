export const clone = (obj: any) => {
    return JSON.parse(JSON.stringify(obj));
};

export const thread = (f: Function, t: number = 0) => setTimeout(f, t);