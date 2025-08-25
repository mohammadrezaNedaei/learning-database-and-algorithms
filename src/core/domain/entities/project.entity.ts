
export class Project {
    constructor(
        readonly id: number = 0,
        private name: string,
        private userId: number | null,
    ) {}

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setUserId(id: number) {
        this.userId = id;
    }

    getUserId() {
        return this.userId;
    }
}