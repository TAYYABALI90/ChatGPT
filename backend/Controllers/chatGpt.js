import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';
import chatSchema from '../Models/chat.js';

import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const configuration = new Configuration({ apiKey: process.env.OpenAI_API_KEY });

const openai = new OpenAIApi(configuration);

export const chatGPT = async (prompt) => {

  if (!prompt || prompt.trim() === "") {
    throw new Error('Invalid request. The prompt field is required and should not be empty');
  };

  console.log("Prompt:", prompt);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens: 3000,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  console.log("API Response:", response);

  const botResponse = response.data.choices[0].text;

  if (!botResponse) {
    throw new Error('Invalid API response format. The API response does not contain the expected data');
  };

  return { user: prompt, bot: botResponse };

};

export const saveChatData = async (userId, prompt, bot) => {

  try {

    if (!userId || !prompt || !bot) {
      throw new Error('User ID, prompt are required to save chat data.');
    };

    const newChatData = new chatSchema({
      _id: uuidv4(),
      userId: userId,
      prompt: prompt,
      bot: bot,
      createdAt: new Date().toISOString(),
    });

    console.log("New Chat Data:", newChatData);

    await newChatData.save();

    return newChatData;

  } catch (error) {

    console.log("Something went wrong.", error.message);
    throw new Error('Failed to save chat data.');

  };

};