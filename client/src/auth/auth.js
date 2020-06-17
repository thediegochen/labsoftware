import cookie from  'js-cookie';

export const setCookie = (key, value) => {
    if (window !== 'undefined') {
         cookie.set(key, value)
    }
}
export const removeCookie = key => {
    if (window !== 'undefined') {
        cookie.remove(key, {
            expires: 1
        });
    }
};
export const getCookie = key => {
    console.log('entrou');
    if (window !== 'undefined') {
        return cookie.get(key);
    }
};
export const signOut = next => {
    removeCookie('jwt');
    removeCookie('role');
    removeCookie('email');
};
