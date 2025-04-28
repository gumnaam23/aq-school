import jwt from 'jsonwebtoken'
const key = process.env.SECRET_KEY ||'12345'

export const setUser = async (token) => {
    
    return jwt.sign(
        { id: token._id, email: token.email },
        key,
        { expiresIn: '7d' }
    )
}
export const getUser = async (token) => {
    
    return jwt.verify(token, key)
}
