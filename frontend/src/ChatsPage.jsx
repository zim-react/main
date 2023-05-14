import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
    '9bfb34dd-805d-4f7d-b702-2f478757cf34',
    props.user.username, 
    props.user.secret
    );
    return (
    <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style ={{ height: '100%'}}/>
    </div>
    )
}
export default ChatsPage