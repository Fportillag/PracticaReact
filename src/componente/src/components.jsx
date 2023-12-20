import {TwitterFollowCard } from './componentes2.jsx'
import { Button } from './componentsButton.jsx'

export function App (){
   const editInfo = (userName)=>`@${userName}`;
    return (
        <>
            <TwitterFollowCard  Button = {Button} edit = {editInfo} isFollowing = {false} userName="midudev">
                Fredy Portilla Guerrero
            </TwitterFollowCard>
            <TwitterFollowCard  Button = {Button} edit = {editInfo} isFollowing userName="mrbeast">
            Fredy Portilla Guerrero
            </TwitterFollowCard>
            <TwitterFollowCard  Button = {Button} edit = {editInfo} isFollowing = {false} userName="midudev">
            Fredy Portilla Guerrero
            </TwitterFollowCard>
        </>
    )

}
