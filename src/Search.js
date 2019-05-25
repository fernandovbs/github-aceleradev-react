import React, { useEffect, useState, Fragment } from 'react'
import { SearchInput, Autocomplete } from "evergreen-ui"
import { connect } from 'react-redux'
import { searchUsers } from './redux/reducers/users';
 
const Search = (props) => {
    const [searchString, setSearchString] =  useState('');
    const { dispatch } = props;

    useEffect(() => {
        dispatch(searchUsers(searchString))  
    }, [searchString, dispatch])

return (<Fragment>
        <SearchInput
            onChange={(e) => {setSearchString(e.target.value)}}
            placeholder="Digite o nome do usuário..."
            marginTop={20}
            height={40}
            width={500}
            autoFocus
        />
        <ul style={{
            display: 'inline-block', 
            position:'absolute', 
            top:'50px', 
            listStyle: 'none',
            left: '50%',
            marginRight: '-200px',
            width: '400px', 
            zIndex:'100'
        }}>
            {props.users.suggestions.map(user => <li key={user.id}>{user.login}</li>)}
        </ul>
    </Fragment>
    )

}

const mapStateToProps = (state) => { 
    return { 
      ...state
    }
  }

export default connect(mapStateToProps, null)(Search)