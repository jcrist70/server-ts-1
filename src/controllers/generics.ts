
// Using generics to type after declaration
export function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}
export function getRandomFromArray<T>(items: T[]): T {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}

// let numArr = getArray<number>([1,2,3,4]);
// let strArr = getArray<string>(['Mike', 'Tina', 'Mary'])
