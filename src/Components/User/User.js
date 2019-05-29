import React from "react";

const User = ({user = {}}) => {
    return (user && (
        <React.Fragment>
            <div
                data-testid="user"
                style={{
                    color: "darkblue",
                    opacity: "0.86",
                    textDecoration: "none",
                    marginTop: "10px"
                }}>
                {user.avatar_url && <a href={user.html_url} target="_blank"
                rel="noopener noreferrer"><img src={user.avatar_url}
                    title={user.login}
                    alt={user.login}
                    style={{width: 200, marginTop: "2rem" }}
                /></a>}
                <h2>
                    <a href={user.html_url} target="_blank"
                    rel="noopener noreferrer" style={{textDecoration: 'none'}}>{user.login}</a>
                </h2>
            </div>
        </React.Fragment>
    )) || "";
}

export default User;
