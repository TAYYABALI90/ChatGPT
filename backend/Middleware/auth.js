import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {

    try {

        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ error: 'Authentication failed. Missing token.' });
        };

        let decodedData;

        try {
            decodedData = jwt.verify(token, 'test');
        } catch (error) {
            return res.status(401).json({ error: 'Authentication failed. Invalid token.' });
        };

        if (!decodedData || !decodedData.id) {
            return res.status(401).json({ error: 'Authentication failed. Invalid token data.' });
        };

        req.userId = decodedData.id;

        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({ error: 'Authentication failed.' });

    };

};

export default auth;