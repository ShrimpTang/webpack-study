let login = (username, password) => {
    if (username !== 'admin' || password !== 'admin') {
        console.log('error login');
    } else {
        console.log('success login');
    }
};

login('admin', 'admin');
