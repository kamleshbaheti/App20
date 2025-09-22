document.addEventListener('DOMContentLoaded', () => {
  console.log("App20 page ready with animations.");

  const testimonials = document.querySelectorAll('.testimonial-card');
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }

  showTestimonial(current);
  setInterval(nextTestimonial, 4000);
});

const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
const chatClose = document.getElementById('chat-close');
const chatSend = document.getElementById('chat-send');
const chatText = document.getElementById('chat-text');
const chatMessages = document.querySelector('.chat-messages');

chatToggle.addEventListener('click', () => {
  chatBox.style.display = "flex";
  chatToggle.style.display = "none";
});

chatClose.addEventListener('click', () => {
  chatBox.style.display = "none";
  chatToggle.style.display = "block";
});

chatSend.addEventListener('click', sendMessage);
chatText.addEventListener('keypress', (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = chatText.value.trim();
  if (!text) return;
  
  const userMsg = document.createElement('div');
  userMsg.classList.add('msg', 'user');
  userMsg.textContent = text;
  chatMessages.appendChild(userMsg);

  chatText.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.classList.add('msg', 'bot');
    botMsg.textContent = "Thanks for your message! Our support will contact you soon.";
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);
}
