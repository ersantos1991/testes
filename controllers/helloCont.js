var 



module.exports.hello = function (req, res) {
    res.sendFile('hello.html', { root: 'views' })
};


module.exports.hello2 = function (req, res) {
    res.send('this is my frist test');
};