import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Dropdown(id) {
    function onClick(e) {
        e.preventDefault()
    }
    return (
        <Menu>
        <MenuButton class="m-3 h-9 w-9" as={Button}>
            <img class="h-9 w-9 border-solid border-black rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg" alt="" />
        </MenuButton>
        <MenuList class="bg-light m-2">
            <Link to={'/profile/' + id}>
                <MenuItem>Mi perfil</MenuItem>
            </Link>
            <Link to="/createTalent">
                <MenuItem>Publicar</MenuItem>
            </Link>
            <Link to='/faq'>
            <MenuItem>Preguntas frecuentes</MenuItem>
            </Link>
            <MenuDivider/>
            <MenuItem onClick={onClick}>Cerrar sesion</MenuItem>
        </MenuList>
        </Menu> 
    )
}

