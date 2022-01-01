const vie = {
    nav: {
        home: 'Trang chủ',
        exchange: 'Đổi tiền',
        interest: 'Lãi suất',
        about: 'Tôi là ai?',
    },
    header: {
        home: 'Trang chủ',
        exchange: 'Quy đổi đơn vị',
        interest: 'Tính lãi suất ngân hàng',
        about: 'Về developer',
    }
}

export default function language(condition) {
    if (condition === 'vie') {
        return vie;
    }
    if (condition === 'eng') {
        return vie;
    }
    return 'Please choose language';
}