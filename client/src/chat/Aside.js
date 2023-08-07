import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as actionType from '../constants/actionTypes';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Aside = ({ isAsideCollapsed, handleAsideToggle, handleAsideBoxAppeared, handleAsideBoxDisappeared, prompts }) => {

    const [isLogoutClick, setIsLogoutClick] = useState(false);

    const [selectedPromptIndex, setSelectedPromptIndex] = useState({});

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        try {
            dispatch({ type: actionType.LOGOUT });
            setIsLogoutClick(false);
            setUser(null);
            navigate('/auth');
            console.log('You have been successfully redirected to /auth');
        } catch (error) {
            console.error('Navigation error:', error);
        };
    };

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const handleLogoutClick = () => {
        setIsLogoutClick((prevState) => !prevState);
    };

    const handleBgChange = (formattedDate, index) => {
        setSelectedPromptIndex({ [formattedDate]: index });
    };

    const formatDate = (dateString) => {

        if (!dateString) {
            return '';
        };

        const date = new Date(Date.parse(dateString));
        const currentDate = new Date();
        const diffInDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));

        if (isSameDate(currentDate, date)) {
            return 'Today';
        } else if (isSameDate(new Date(currentDate - 86400000), date)) {
            return 'Yesterday';
        } else if (diffInDays >= 2 && diffInDays <= 30) {
            return `Previous ${diffInDays} days`;
        } else {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString(undefined, options);
        };

    };

    const isSameDate = (date1, date2) => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    };

    const getFormattedPrompt = (prompt) => {

        if (!prompt || typeof prompt !== "string") {
            return "";
        };

        const words = prompt.split(" ");
        const firstThreeWords = words.slice(0, 3).join(" ");

        const maxLength = 20;

        if (firstThreeWords.length > maxLength) {
            return words.slice(0, 2).join(" ");
        } else {
            return firstThreeWords;
        };

    };

    const renderPromptsGroupedByDate = () => {

        const groupedPrompts = {};

        prompts.forEach((prompt) => {
            const formattedDate = formatDate(prompt.createdAt);
            if (!groupedPrompts[formattedDate]) {
                groupedPrompts[formattedDate] = [];
            };
            groupedPrompts[formattedDate].unshift(prompt);
        });

        const sortedGroupedPrompts = Object.entries(groupedPrompts).sort((a, b) => {
            if (a[0] === 'Today') return -1;
            if (b[0] === 'Today') return 1;
            if (a[0] === 'Yesterday') return -1;
            if (b[0] === 'Yesterday') return 1;
            const aDays = parseInt(a[0].replace(/\D/g, ''));
            const bDays = parseInt(b[0].replace(/\D/g, ''));
            return aDays - bDays;
        });

        return sortedGroupedPrompts.map(([date, prompts]) => (

            <React.Fragment key={date}>

                <div className="stored-prompts">
                    <h3>{date}</h3>
                </div>

                {prompts.map((prompt, index) => (

                    <a
                        key={index}
                        className={index === selectedPromptIndex[date] ?
                            'prompt-container-btn prompt-container-btn-bg' :
                            'prompt-container-btn active'}
                        onClick={() => handleBgChange(date, index)}
                    >

                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="aside-btn-icon"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>

                        <div className="prompt-container-text">
                            <span>{getFormattedPrompt(prompt.prompt)}</span>
                        </div>

                        <div className="prompt-container-icons">

                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="prompt-container-svg1"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>

                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="prompt-container-svg2"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1={10} y1={11} x2={10} y2={17} />
                                <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>

                        </div>

                    </a>

                ))}

            </React.Fragment>
        ));
    };

    return (
        <>
            <aside className={isAsideCollapsed ? 'aside close' : 'aside'} id="aside">

                <div className="anchor-group">

                    <a className="aside-btn">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="aside-btn-icon"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                        New chat
                    </a>

                    <a
                        className="aside-collapse"
                        id="aside_collapse"
                        onClick={handleAsideToggle}
                        onMouseEnter={handleAsideBoxAppeared}
                        onMouseLeave={handleAsideBoxDisappeared}>
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"

                            className="aside-collapse-svg"

                            height="1em"

                            width="1em"

                            xmlns="http://www.w3.org/2000/svg">
                            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                            <line x1={9} y1={3} x2={9} y2={21} />
                        </svg>
                    </a>

                </div>

                <div className="prompt-container">
                    <ol>{renderPromptsGroupedByDate()}</ol>
                </div>

                {user?.result && (

                    <div className="person">

                        {user?.result.imageUrl ?
                            <img className="person-img" src={user?.result.imageUrl} alt={user?.result.name} />
                            : <div className="person-initials">{user?.result.name?.charAt(0)}</div>}

                        <div className="person-name">{user?.result.name}</div>

                        <svg
                            onClick={handleLogoutClick}
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="person-svg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                            <circle cx={5} cy={12} r={1} />
                        </svg>

                        <div className={isLogoutClick ? 'logout active' : 'logout'}>
                            <button type="button" className="logout-elements border-0" onClick={logout}>
                                <div className="text-decoration-none" id="">
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="logout-svg mx-2"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" />
                                        <line x1={21} y1={12} x2={9} y2={12} />
                                    </svg>
                                    <span>Log out</span>
                                </div>
                            </button>
                        </div>

                    </div>
                )}

            </aside>
        </>
    );
};

export default Aside;