export const decodeToken = (token: string): Record<string, string> => {
    const addressTokenIndex = token.split('.')[1];
    if (addressTokenIndex) {
        return JSON.parse(window.atob(token.split('.')[1]));
    }
    return {};
};
