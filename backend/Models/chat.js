import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const chatSchema = mongoose.Schema(

    {
        _id: { type: String, default: () => uuidv4() },

        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

        prompt: { type: String, required: true },

        bot: { type: String, required: true },

        createdAt: { type: Date, default: Date.now },

    },

    {
        toObject: { virtuals: true }, toJSON: { virtuals: true }
    }

);

chatSchema.virtual('id').get(function () { return this._id; });

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;