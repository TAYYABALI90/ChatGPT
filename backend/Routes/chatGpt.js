import express from 'express';
import auth from '../Middleware/auth.js';
import { chatGPT, saveChatData } from '../Controllers/chatGpt.js';
import chatSchema from '../Models/chat.js';

const router = express.Router();

router.post('/chat', auth, async (req, res) => {

  try {

    const userId = req.userId;

    const prompt = req.body.prompt;

    const response = await chatGPT(prompt);

    const chatData = await saveChatData(userId, prompt, response.bot);

    res.status(200).json({ message: 'The API Has Successfully Sent The Response', chatData });

  } catch (error) {

    console.error("Something went wrong.", error.message);

    res.status(500).json({
      error: 'Something went wrong while processing the request',
      message: 'For Some Reason The API Failed To Send The Response'
    });

  };

});

router.get('/chat', auth, async (req, res) => {

  try {

    const userId = req.userId;

    const chatData = await chatSchema.find({ userId });

    res.status(200).json(chatData);

  } catch (error) {

    console.error("Something went wrong.", error.message);

    res.status(500).json({
      error: 'Something went wrong while processing the request',
      message: 'Failed to fetch chat data'
    });

  };

});

export default router;