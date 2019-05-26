export const URI = {
    user: (user) => `http://api.github.com/users/${user}`,
    search: (searchString) => `http://api.github.com/search/users?q=${searchString}`,
    language: (languageString) => `https://api.github.com/search/repositories?q=%20+language:${languageString}`
}