const bcrypt = require('bcryptjs');
const validateUserInput = (email,password) => {
    //Email varsa ve password varsa 
    return email && password;
};
const comparePassword = (password,hashedPassword) => {
    //Bu ikisini decode edip karşılaştır aynıysa true değilse false dön
    return bcrypt.compareSync(password,hashedPassword);
}
module.exports = {
    validateUserInput,
    comparePassword
}