console.log('hello');

const wrapper = document.querySelector('.wrapper');
console.log('wrapper', wrapper);



fetch('https://picsum.photos/v2/list')
    .then(function(response){
        return response.json();
    })
    .then((data) => {
        console.log(data)
    });

setTimeout(() => {
    wrapper.innerHTML = '<div>hello<div>';
}, 2000);

});


function createCard(CardObject){
    return 
}
