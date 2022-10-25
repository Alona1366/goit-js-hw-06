const refs = {
    mainUI: document.querySelector('#categories'),
    secondUI: document.querySelectorAll('.item')
}

console.log(`Number of categories:${refs.secondUI.length}`)

for (let i = 0; i < refs.secondUI.length; i += 1){
    console.log(`Category:${refs.secondUI[i].querySelector('h2').textContent}`)
    console.log(`Elements:${refs.secondUI[i].querySelectorAll('ul li').length}`)
}