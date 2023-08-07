import React from 'react';

import ChatContainer from './ChatContainer';

const Main = ({ 
    isAsideCollapsed, 
    isAsideBoxAppeared, 
    handleAsideToggle, 
    messages, 
    user, 
    handleSubmit, 
    botMessageRef,
    botResponseText }) => {

    return (

        <div className={isAsideCollapsed ? 'main active' : 'main'} id="main">

            <button className={isAsideBoxAppeared ? 'aside_collapse_box' : 'aside_collapse_box hidden'}>
                <span>Hide</span>
                <span>sidebar</span>
            </button>

            <div className={isAsideCollapsed ? 'toggle-btn active' : 'toggle-btn'}>
                <button className={isAsideCollapsed ? 'aside_toggle active' : 'aside_toggle'} id="aside_toggle" onClick={handleAsideToggle}>
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="aside_toggle_svg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                        <line x1={9} y1={3} x2={9} y2={21} />
                    </svg>
                </button>

                <button className="aside_toggle_box">
                    <span>Show</span>
                    <span>sidebar</span>
                </button>

            </div>

            <ChatContainer messages={messages} user={user} botMessageRef={botMessageRef} botResponseText={botResponseText} />

            <form className={isAsideCollapsed ? 'form-container active' : 'form-container'} onSubmit={handleSubmit}>

                <div className="form-elements">

                    <textarea className="form-textarea" tabIndex={0} name="prompt" rows={1} placeholder="Send a message." />

                    <button type="submit" id="form-svg" className="form-svg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="none"
                            id="form-textarea-svg"
                            className="form-textarea-svg"
                            strokeWidth={2}>
                            <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>

                <div className="form-footer">AI Genix Searcher. Chatbot may produce inaccurate information about people, places,&nbsp;or&nbsp;facts.</div>

            </form>

        </div>

    )

}

export default Main;