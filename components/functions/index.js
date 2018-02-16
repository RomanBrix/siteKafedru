import trnas from '../../Data/translate.json';

export function getLanguage(state) {
    console.log("in func");
    let translate = {};
    switch (state){
        case 'ua':
             translate = trnas.ua;
            break;
        case 'eng':
             translate = trnas.eng;
            break;
    }
    return translate;
}
export function getCookie(name){
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1])  : undefined;
}


export function setCookie(name, value, options){
    options = options || {};

    let expires = options.expires;
    if( typeof expires === 'number' && expires){
        let date = new Date();
        date.setTime(date.getTime() + expires * 1000 * 60 * 60);
        expires = options.expires = date;
    }
    if(expires && expires.toUTCString()){
        options.expires = expires.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + "="+ value;
    for( let propName in options){
        updatedCookie += "; " + propName;
        let propValue = options[propName];
        if(propValue !== true ){
            updatedCookie += "=" + propValue;
        }
    }
    document.cookie = updatedCookie;
}
