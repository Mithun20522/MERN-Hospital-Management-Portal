import jwt  from 'jsonwebtoken';

export const verifyToken = async(req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if(!token){
            return res.status(401).json({message:'Access denied'});
        }
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if(err || !user.isAdmin){
                return res.status(401).json({message:'Access denied'});
            }
            req.user = user;
            next();
            
        })
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}