import { heroes } from "../data/heroes"

export const getHeroesById = (heroId) => {
  
    return heroes.find( hero => hero.id === heroId );

}
