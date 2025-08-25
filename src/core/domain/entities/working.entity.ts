import { Project } from "./project.entity";
import { User } from "./user.entity";

export class Working {
    constructor(
        readonly id: number = 0,
        private userId: number,
        private projectId: number,
        private user: User,
        private project: Project
    ) {}

    setUserId(id: number) {
        this.userId = id;
    }
    setProjectId(id: number) {
        this.projectId = id;
    }
    getUserId() {
        return this.userId;
    }
    getProjectId() {
        return this.projectId;
    }
    setUser(option: User) {
        this.user = option;
    }
    getUser() {
        return this.user;
    }
    setProject(option: Project) {
        this.project = option;
    }
    getProject() {
        return this.project;
    }
}