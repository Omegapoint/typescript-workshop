export function notNull<T>(val: T, msg?: string): T {
    if (val == null) {
        throw msg ? msg : "Value must not be null";
    }
    return val;
}

export function notBlank(val: string, msg: string = "Value must not be blank"): string {
    if (val == null || val.trim().length === 0) {
        throw msg;
    }
    return val;
}