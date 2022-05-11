class ApiError extends Error {
    status;
    static fromObject(object: any) {
        return new ApiError(object.message, object.status);
    }

    constructor(message: any, status: any) {
        super(message);
        this.status = status;
    }
}

export default ApiError;
