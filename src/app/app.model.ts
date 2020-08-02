export class TodoModel {
    user;
    items;
    
    constructor() {
        this.user = "Engin";
        this.items = [
            new TodoItem("Kitap Okumak", false),
            new TodoItem("Kahvaltı", false),
            new TodoItem("Spor", false),
            new TodoItem("Sinema", false)
        ]
    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}