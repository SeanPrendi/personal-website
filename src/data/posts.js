import posts from "./postlist"
function makeExports () {
    let exp = {}
    posts.map((val, idx) => {
        exp[val] = require('../posts/' + val + '.md')
        return exp
    });
    return exp
}

export default makeExports()
