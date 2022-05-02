const chatCont = document.querySelector('#conv-cont');
const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('.chat-input');

chatForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = chatInput.value;
  if (!msgText) return;

  appendMessage(msgText);
  chatInput.value = "";
});
function appendMessage(text) {

  const msgHTML = `
  <div class="conv conv-right">
  <div class="conv-bubble">
      <div class="msg-info">
          <div class="msg-info-name">
              John
          </div>
          <div class="msg-info-time">
              20:11
          </div>
      </div>
      <div class="msg-text">
          ${text}
      </div>
    </div>
  </div>
    `;
  chatCont.insertAdjacentHTML('beforeend', msgHTML);
  chatCont.scrollTop += 98;
}