//sidbar
function sidbar() {
  const menuItens = document.querySelector('.menu-item');
  function ativarNot() {
   const not = document.querySelector('.notification-popup')
   not.classList.toggle('ativo')
  }
  menuItens.addEventListener('click', ativarNot);
}
sidbar();
/********  message ********/
  const messageNotification = document.getElementById('messages-notifications');
  const messages = document.querySelector('.messages');
  const message = document.querySelectorAll('.message');
  const messageSearch = document.querySelector('#messages-search');
  
  messageNotification.addEventListener('click', () => {
    messages.classList.toggle('ativo')
  });



  function searchMessage() {
    const val = messageSearch.value.toLowerCase();
  
    message.forEach((user) => {
      let name = user.querySelectorAll('h5')[0].textContent.toLowerCase();
  
      if (name.indexOf(val) != -1) {
        user.style.display = 'flex';
      } else {
        user.style.display = 'none';
      }
    });
  }
  
  messageSearch.addEventListener('keyup', searchMessage);

  /****************** end message *******************/