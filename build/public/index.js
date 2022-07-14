const btn = document.querySelector('.btn')
const newsBtn = document.querySelector('.newsBtn')

const url = '/api/v1/users/62cb1a46af327fdde8ce0656'

newsBtn.addEventListener('click', () => {
  window.location.href = './news.html'
})

const saveUser = async (data) => {
  const request = await fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const jsonR = await request.json()
  console.log(jsonR)
  console.log(request.status)
}

btn.addEventListener('click', async () => {
  const data = {
    email: 'diegopolorada@gmail.com',
    password: '1231231321',
    wallet: 'dsdd',
    rol: 'user',
    hola: 'aaa'
  }
  await saveUser(data)
})
