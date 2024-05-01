const express = require('express')

const User = require('./model/user')

async function handleUserSignUp(req, res){
    const{name, email, password} = req.body;

    await User.create({
        name,
        email,
        password
    })

    return res.redirect('/home');
}

async function handleUserLogin(req, res){
    const {email, password} = req.body;
    
    const user = await User.findOne({email, password});

    if(!user){
        return res.render("login", {
            error: "username or password wrong"
        })
    }

    return res.redirect('/')
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}