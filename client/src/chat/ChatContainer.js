import React from 'react';

import botImg from '../assets/chat/bot.png';

const ChatContainer = ({ messages, user, botMessageRef }) => {

    return (

        <div className="chat_container">

            {messages ?

                (messages.map((message, index) => (

                    <React.Fragment key={index}>

                        <div className="wrapper">
                            <div className="chat">
                                <div className="profile">
                                    {user?.result.imageUrl ? (
                                        <>
                                            <img className="person-img" src={user?.result.imageUrl} alt={user?.result.name} />
                                        </>
                                    ) : (
                                        <>
                                            <div className="person-initials">{user?.result.name?.charAt(0)}</div>
                                        </>
                                    )}
                                </div>
                                <div className="user-message">
                                    {message.user}
                                </div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="chat">
                                <div className="profile" style={{ background: "#10a37f" }}>
                                    <img src={botImg} alt="bot" />
                                </div>
                                <div ref={botMessageRef} className="bot-message">
                                    {message.bot}
                                </div>
                            </div>
                        </div>

                    </React.Fragment>

                ))

                ) : (
                    <div>Loading...</div>
                )}

        </div>

    )

}

export default ChatContainer;