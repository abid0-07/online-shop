function createUserSession(req, user, action){
    req.session.uid = user._id.toSring();
    req.session.save(action);
}

module.exports = {
    createUserSession: createUserSession
};