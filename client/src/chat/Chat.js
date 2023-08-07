import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Chat.css';

import Aside from './Aside';
import Main from './Main';

const Chat = () => {

  const [isAsideBoxAppeared, setIsAsideBoxAppeared] = useState(false);

  const [isAsideCollapsed, setIsAsideCollapsed] = useState(() => {
    const isCollapsed = JSON.parse(localStorage.getItem('sidebarCollapsed'));
    return isCollapsed !== null ? isCollapsed : false;
  });

  const handleAsideToggle = useCallback((e) => {
    e.preventDefault();
    setIsAsideCollapsed((prevState) => {
      const newState = !prevState;
      localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
      return newState;
    });
  }, []);

  const handleAsideBoxAppeared = useCallback(() => {
    setIsAsideBoxAppeared(true);
  }, []);

  const handleAsideBoxDisappeared = useCallback(() => {
    setIsAsideBoxAppeared(false);
  }, []);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const [messages, setMessages] = useState([]);

  const [prompts, setPrompts] = useState([]);

  // const [botResponseText, setBotResponseText] = useState('');

  const botMessageRef = useRef();

  const typeText = useCallback((element, text) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const prompt = e.target.elements.prompt.value.trim();

    if (!prompt) { return };

    const token = user?.token;

    if (token) {

      try {

        const response = await fetch('http://localhost:4000/user/chat', {

          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ prompt }),

        });

        const responseData = await response.json();

        if (response.ok && responseData && responseData.chatData) {

          const responseText = responseData.chatData.bot;

          if (botMessageRef.current) {
            botMessageRef.current.innerHTML = '';
            typeText(botMessageRef.current, responseText);
          };

          const newMessage = { user: prompt, bot: responseText, createdAt: new Date() };

          setMessages((prevMessages) => [...prevMessages, newMessage]);

          if (!prompts.some((item) => item.prompt === prompt)) {
            setPrompts((prevPrompts) => [...prevPrompts, { prompt, createdAt: new Date() }]);
          };

        } else { alert('Invalid API Response.'); };

      } catch (error) { alert('Failed To Get Response From The API.', error.message); };

    };

    e.target.elements.prompt.value = '';

  };

  const fetchChatData = useCallback(async () => {

    try {

      const token = user?.token;

      if (token) {

        const response = await fetch('http://localhost:4000/user/chat', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const responseData = await response.json();

        if (response.ok && responseData) {

          const newMessages = responseData.map(({ prompt, bot, createdAt }) => ({ user: prompt, bot, createdAt: new Date(createdAt) }));

          setMessages((prevMessages) => [...prevMessages, ...newMessages]);

          const uniquePrompts = newMessages.reduce((promptsArr, message) => {

            if (!promptsArr.some((item) => item.prompt === message.user)) {
              promptsArr.push({ prompt: message.user, createdAt: message.createdAt });
            };

            return promptsArr;

          }, []);

          setPrompts(uniquePrompts);

        } else { alert("Failed To Fetch Chat Data"); };

      };

    }

    catch (error) { alert("The Request Is Invalid.", error.message) };

  }, [user?.token]);

  useEffect(() => {

    fetchChatData();

  }, [fetchChatData]);

  return (
    <>

      <Aside
        isAsideCollapsed={isAsideCollapsed}
        handleAsideToggle={handleAsideToggle}
        handleAsideBoxAppeared={handleAsideBoxAppeared}
        handleAsideBoxDisappeared={handleAsideBoxDisappeared}
        prompts={prompts} />

      <Main
        isAsideCollapsed={isAsideCollapsed}
        isAsideBoxAppeared={isAsideBoxAppeared}
        handleAsideToggle={handleAsideToggle}
        messages={messages}
        user={user}
        handleSubmit={handleSubmit}
        botMessageRef={botMessageRef} />

    </>
  );
};

export default Chat;