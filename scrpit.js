/* ==========================
   MEMORYIIT - SCRIPT PRINCIPAL
   ========================== */

/* ----- Rolagem suave nos links de navegação ----- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // ajusta pelo header fixo
        behavior: "smooth",
      })
    }
  })
})

/* ----- Validação simples do formulário de contato ----- */
const form = document.querySelector(".contact-form")
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault()

    const name = form.querySelector('input[type="text"]')
    const email = form.querySelector('input[type="email"]')
    const message = form.querySelector("textarea")

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    if (!/\S+@\S+\.\S+/.test(email.value)) {
      alert("Por favor, insira um e-mail válido.")
      return
    }

    alert("Mensagem enviada com sucesso! (aqui entraria a integração backend)")
    form.reset()
  })
}

/* ----- Menu responsivo (opcional) ----- */
const nav = document.querySelector(".nav ul")
const burger = document.createElement("div")
burger.classList.add("burger")
burger.innerHTML = "☰"
document.querySelector(".header .container").prepend(burger)

burger.addEventListener("click", () => {
  nav.classList.toggle("active")
})

/* Estilo dinâmico para o menu mobile */
const style = document.createElement("style")
style.innerHTML = `
  .burger {
    display: none;
    font-size: 1.8rem;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .burger { display: block; }
    .nav ul {
      display: none;
      flex-direction: column;
      gap: 16px;
      background: #fff;
      padding: 20px;
      position: absolute;
      top: 70px;
      right: 20px;
      box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
    }
    .nav ul.active { display: flex; }
  }
`
document.head.appendChild(style)
