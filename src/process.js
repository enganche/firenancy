const vie = {
    nav: {
        home: 'Trang chủ',
        exchange: 'Đổi tiền',
        interest: 'Lãi suất',
        about: 'About',
    },
    header: {
        home: 'Trang chủ',
        exchange: 'Quy đổi đơn vị',
        interest: 'Tính lãi suất ngân hàng',
        about: 'Về developer',
    }
}

export function language(condition) {
    if (condition === 'vie') {
        return vie;
    }
    if (condition === 'eng') {
        return vie;
    }
    return 'Please choose language';
}

export function request() {

}

export function validate(value) {
    if (!isNaN(value)) {
        return parseFloat(value);
    }
    if (value.includes('k')) {
        return parseFloat(value.replace('k', '000'));
    }
    if (value.includes(' lít')) {
        return parseFloat(value.replace(' lít', '00000'));
    }
    if (value.includes(' củ')) {
        return parseFloat(value.replace(' củ', '000000'));
    }
    if (value.includes('m')) {
        return parseFloat(value.replace('m', '000000'));
    }
    /*
    if(value.includes(',')) {
        return parseFloat(value.slice(',').join(''));
    }
    */
    alert("Nhập sai!");
    return 0;
}