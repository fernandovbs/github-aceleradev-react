export const URI = {
    user: (user) => `https://api.github.com/users/${user}`,
    search: (searchString) => `https://api.github.com/search/users?q=${searchString}`,
    language: ({repoString, languageString}) => `https://api.github.com/search/repositories?q=${repoString}+language:${languageString}`
};