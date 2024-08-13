import React, { useState } from 'react'
import { UserContext } from './UserContext'
import { useEffect } from 'react';

export const UserProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('activeUser')) || '')
    useEffect(() => {
        // Guardar el valor actual en localStorage cuando la variable cambia
        localStorage.setItem('activeUser', JSON.stringify(usuario));
    }, [usuario]);

    const [postId, setPostId] = useState(JSON.parse(localStorage.getItem('PostId')) || '')
    useEffect(() => {
        // Guardar el valor actual en localStorage cuando la variable cambia
        localStorage.setItem('PostId', JSON.stringify(postId));
    }, [postId]);

    const [userPostId, setUserPostId] = useState(JSON.parse(localStorage.getItem('UserPostId')) || '')
    useEffect(() => {
        // Guardar el valor actual en localStorage cuando la variable cambia
        localStorage.setItem('UserPostId', JSON.stringify(userPostId));
    }, [userPostId]);

    return (
        <UserContext.Provider value={{ usuario, setUsuario, postId, setPostId, userPostId, setUserPostId }}>
            {children}
        </UserContext.Provider>
    )
}