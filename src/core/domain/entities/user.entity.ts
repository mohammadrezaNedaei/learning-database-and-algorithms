
export class User {
    constructor(
        readonly id: number = 0,
        private name: string
    ) {}

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}