import { GithubUser } from './Github.js'


export function Data() {
  let infoUser = []
  //const userGithub = prompt("digite seu nome de usuário do GitHub")
  
  const avatar = document.querySelector('.avatar')
  const li = document.querySelectorAll('.info ul .info-container li')
  li.forEach(li=>{
    infoUser.push(li)
  })



  async function load() {
    const user = await GithubUser.search('luiszkm')
    document.querySelector('header h1').innerHTML = `${user.login}`
    infoUser[0].innerHTML = `${user.followers} Seguidores`
    infoUser[1].innerHTML = `${user.following} Seguindo`
    infoUser[2].innerHTML = `${user.public_repos} Repositórios`
    infoUser[3].innerHTML = `${user.company} `
    infoUser[4].innerHTML = `${user.location}` 

    avatar.src = `https://github.com/${user.login}.png`
    console.log(avatar);
  }
  load()
}