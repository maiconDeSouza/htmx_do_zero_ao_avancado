document.addEventListener('htmx:afterRequest', e => {
    e.preventDefault()
    if(e.target.id === "busca-usuario"){
        const response = JSON.parse(e.detail.xhr.responseText)
        const userUL = document.querySelector("#usuarios-data")

        response.forEach(user => {
            const li = document.createElement("li")
            li.textContent = `${user.name} -> ${user.email}`
            userUL.appendChild(li)
        })
    }
})

document.addEventListener('htmx:load', e => {
    console.log(e)
})

document.addEventListener('htmx:responseError', e => {
    const tagError = document.querySelector(`#${e.detail.target.id}`)
    const msgError = e.detail.xhr.responseText
    const codeError = e.detail.xhr.status
    tagError.textContent = `${msgError} - ${codeError}`
})