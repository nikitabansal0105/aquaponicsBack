import expressJwt from 'express-jwt';

export const requireSignin = expressJwt({
    //secret, expire date
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
});