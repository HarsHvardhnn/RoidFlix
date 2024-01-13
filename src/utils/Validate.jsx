const validateData = (email,password) => {
    const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isPassWordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    if(!isEmailValid) return 'Enter correct email';
    if(!isPassWordValid) return 'password is weak.'
    if(isEmailValid && isPassWordValid) return null;
}

export default validateData;