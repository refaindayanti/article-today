export const errorHandler = (error) => {
    if (error.response) {
        return error.response.data.message;
    } else if (error.request) {
        return "Network Error!";
    } else {
        return "Network Error!";
    }
}