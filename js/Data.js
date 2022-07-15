import { GithubUser } from './Github.js'


export function Data() {

  const ul = document.querySelectorAll('.info ul .info-container li')
ul.forEach(li=>{
    console.log(li);
  });
  async function load() {
    const user = await GithubUser.search('luiszkm')
    console.log(user);
  }
  load()
}