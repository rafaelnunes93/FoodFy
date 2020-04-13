const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let card of cards){
    card.addEventListener("click",function(){
        const recipeId = card.getAttribute("id");
        window.location.href = `/recipe?id=${recipeId}`

    })
}

const showHides = document.getElementsByClassName('topic');

for (let showHide of showHides) {
  const buttonSpan = showHide.querySelector('span');

  buttonSpan.addEventListener('click', function() {
    if (buttonSpan.innerHTML == "ESCONDER") {
      showHide.querySelector('.topic-content').classList.add('hidden');
      buttonSpan.innerHTML = "MOSTRAR"   
    } else {
      showHide.querySelector('.topic-content').classList.remove('hidden');
      buttonSpan.innerHTML = "ESCONDER"
    }
  });
}


