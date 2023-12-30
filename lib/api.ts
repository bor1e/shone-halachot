import {HALACHOT} from '../_posts/halachot.js'

export function getPostByNumber(number: string) {
  console.log(number)
  return HALACHOT.filter(x => x.number == number)[0]
  // return HALACHOT.find((post) => post.number === number)
}

export function getAllHallachot(fields: string[] = []) {
  return HALACHOT.sort((post1, post2) => (post1.number > post2.number ? -1 : 1));
}
