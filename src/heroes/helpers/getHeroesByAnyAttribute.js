import { heroes } from "../data/heroes";

export const getHeroesByAnyAttribute = (attribute = '') => {

    attribute = attribute.toLocaleLowerCase().trim();
    if (attribute.length === 0) return [];

    return heroes.filter(
        hero => {
            if (hero.id.toLocaleLowerCase().includes(attribute)
                || hero.superhero.toLocaleLowerCase().includes(attribute)
                || hero.publisher.toLocaleLowerCase().includes(attribute)
                || hero.alter_ego.toLocaleLowerCase().includes(attribute)
                || hero.first_appearance.toLocaleLowerCase().includes(attribute)
                || hero.characters.toLocaleLowerCase().includes(attribute)
            ) {
                return hero;
            }
        }
    );

}