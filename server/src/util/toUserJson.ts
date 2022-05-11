function toUserJson(user: any) {
    delete user.passwordHash;
    delete user.passwordSalt;
    return user;
}

export default toUserJson;
