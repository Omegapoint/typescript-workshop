module Validate {
    export function notNull <T>(val: T, msg?: string) {
        if (val == null) {
            throw msg ? msg : "Value must not be null";
        }
        return val;
    }
    
    export function notBlank(val: string, msg?: string) {
        if (val == null || val.trim().length === 0) {
            throw msg ? msg : "Value must not be blank";
        }
        return val;
    }
}