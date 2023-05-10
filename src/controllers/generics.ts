
// Using generics to type after declaration
export function getArray<T>(items: T[]): T[] {
    const arr: T[] = [...items];
    // return new Array().concat(items);
    return arr;
}
export function getRandomFromArray<T>(items: T[]): T {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}