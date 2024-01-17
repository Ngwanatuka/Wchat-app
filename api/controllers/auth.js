import { db } from "../connect.js";

export const login = (req, res) => {

    // Check if the user exists

    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data)=> {
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json('User already exists')
    })

    // Create a new user
        // hash the password
        
};

export const register = (req, res) => {};

export const logout = (req, res) => {};