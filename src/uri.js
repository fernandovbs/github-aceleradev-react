export const URI = {
    user: (user) => `http://api.github.com/users/${user}`,
    search: (searchString) => `http://api.github.com/search/users?q=${searchString}` 
}