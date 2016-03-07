import * as Validate from '../validate/Validate'

class URI {
    value: string;

    constructor(value: string) {
        this.value = Validate.notBlank(value);
    }
}

export = URI;