import React from "react";

const User = ({user = {}}) => {
    return (user && (
        <React.Fragment>
            <a href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="user"
                style={{
                    color: "darkblue",
                    opacity: "0.86",
                    textDecoration: "none",
                    marginTop: "10px"
                }}>
                {user.avatar_url && <img src={user.avatar_url} 
                    title={user.login} 
                    alt={user.login} 
                    style={{width: 200, marginTop: "2rem" }}
                />}
                <h2>
                    {user.login}
                </h2>
            </a>
        </React.Fragment>
    )) || "";
}

export default User;