// Animação suave para links de navegação
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os links
  const links = document.querySelectorAll('a[href^="#"]')

  // Adiciona evento de clique para cada link
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Obtém o alvo do link
      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        // Rola suavemente até o elemento
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Efeito de hover nos cards de projeto
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.transition = "transform 0.3s ease"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Adiciona funcionalidade aos botões do GitHub
  const githubButtons = document.querySelectorAll(".github-btn, .primary-btn")
  githubButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Substitua pela URL do seu perfil GitHub
      
    })
  })

  // Adiciona funcionalidade aos botões de projeto
  const projectLinks = document.querySelectorAll(".project-link")
  projectLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      // Aqui você pode adicionar a URL específica de cada projeto
      alert("Redirecionando para o repositório do projeto...")
       const url = link.getAttribute("href") // pega o href do link clicado
    window.open(url, "_blank")
    })
  })
})
