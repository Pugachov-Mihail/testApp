import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchUser} from "../store/actions/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypeSelector(state => state.users)
    const {fetchUser} = useActions()

    useEffect(()=>{
        fetchUser()
    },[])

    if(loading){
        return <h1>Загрузка...</h1>
    }
    if (error){
        return <h1>{error}</h1>
    }

    return(
        <div>
            {users.map(user=>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    )
}

export default UserList