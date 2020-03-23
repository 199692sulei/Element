this.onmessage = function (e) {
    // this.console.log(e);
    let result = 0;
    for (let i = 0; i < e.data.num; i++) {
        result += i;
    }
}