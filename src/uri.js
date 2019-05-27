export const URI = {
    user: (user) => `http://api.github.com/users/${user}`,
    search: (searchString) => `http://api.github.com/search/users?q=${searchString}`,
    language: ({repoString, languageString}) => `https://api.github.com/search/repositories?q=${repoString}+language:${languageString}`
};