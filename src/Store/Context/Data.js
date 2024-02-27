import session from "../Session"

const Data = {
    name: 'Joshua',
    isLogin: session.get('isLogin'),
    token: session.get('token') ??  ''
}

export default Data