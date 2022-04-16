const btn = document.querySelector('#btn')
const content = document.querySelector('#content')
const body = document.querySelector('body')

const hex = ['A','B','C',1,2,3,4,5,'E','F',6,7,8,9]


let randomColor = (args) => {
    let result = ''
    for(let i=0; i < 6; i++){
        result += args[Math.floor(Math.random() * args.length)]
    }
    return result
}

btn.addEventListener('click',function() {
    body.style.background = '#'+randomColor(hex)
    content.innerHTML = `HEX:#${randomColor(hex)}`
}
)


console.log(randomColor(hex))