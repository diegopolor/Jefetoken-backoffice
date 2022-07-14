const form = document.querySelector('.form')
const url = '/api/v1/news'

const saveNews = async (data) => {
  const request = await fetch(url, {
    method: 'POST',
    body: data
  })
  const jsonR = await request.json()
  console.log(jsonR)
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const file = e.target.image.files
  console.log(file)
  const data = new FormData(form)
  data.append('images', file[0])
  await saveNews(data)
})
