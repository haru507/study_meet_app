export class Todo {
    constructor(id = null, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }

    get() {
        return this;
    }

    getId() {
        return this.id;
    }

    set(title, status) {
        this.title = title;
        this.status = status;
    }

    getJson() {
        return {
            title: this.title,
            status: this.status
        };
    }

    setTitle(title) {
        this.title = title;
    }

    setStatus(status) {
        this.status = status;
    }
}