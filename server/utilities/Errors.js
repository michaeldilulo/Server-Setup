export class NotFound extends Error {
    constructor(message = "Not Found") {
        super(message);
        this.status = 404;
    }
}

export class ForbiddenAccess extends Error {
    constructor(message = "Forbidden Access") {
        super(message);
        this.status = 403;
    }
}

export class UnauthorizedAccess extends Error {
    constructor(message = "Unauthorized Access") {
        super(message);
        this.status = 401;
    }
}

export class BadRequest extends Error {
    constructor(message = "Bad Request") {
        super(message);
        this.status = 400;
    }
}

export class UnexpectedOccurance extends Error {
    constructor(message = "Internal Server Error") {
        super(message);
        this.status = 500;
    }
}