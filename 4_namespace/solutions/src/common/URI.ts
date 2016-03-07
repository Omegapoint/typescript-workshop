namespace Common {
    export class URI {
        value: string;
        
        constructor(value: string) { 
            this.value = Validate.notBlank(value);
        }
    }
}