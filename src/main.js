let demo = document.querySelector('#demo')
let style = document.querySelector('#style')

let str = `
/* 你好，我叫qq
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:360px;
    height:360px;
}
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圈
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(95,224,251,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%, rgba(95,224,251,1) 100%);
}
/* 
 * 加两个乾坤圈
*/
#div1::before{
    width:180px;
    height:180px;
    left:50%;
    top:0;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
#div1::after{
    width:180px;
    height:180px;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
`
let str2 = ''
let n = 0
let step = () => {
    setTimeout(() => {
        if (str[n] === '\n') {
            str2 += '<br>'
        } else if (str[n] === ' ') {
            str2 += '&nbsp;'
        } else {
            str2 += str[n]
        }
        demo.innerHTML = str2
        style.innerHTML = str.substring(0, n)
        window.scrollTo(0, 9999)
        demo.scrollTo(0, 9999)
        if (n < str.length - 1) {
            n += 1
            step()
        }
    }, 50);
}
step()
