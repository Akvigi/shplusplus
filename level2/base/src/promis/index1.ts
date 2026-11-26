const NAMES: string[] = [
    "Alice", "Bob", "Charlie", "Diana", "Ethan",
    "Fiona", "George", "Hannah", "Ivan", "Julia"
];

function getRandomName(minDelay = 500, maxDelay = 3000): Promise<{name: string | undefined, delay: number}> {
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];

    return new Promise((resolve) => {
        setTimeout(() => resolve({ name, delay }), delay);
    });
}

const getName = async (): Promise<string> => {
    const response = await getRandomName();
    return response.name || '';
}

// const getRandomNames = async (count: number) => {
//     const fetchRes: Promise<String>[] = []
//     for (let i = 0; i < count; i++) {
//         fetchRes.push(getName())
//     }
//     const result: string[] = []
//
//     for (let i = 0; i < fetchRes.length; i++) {
//         const res = await fetchRes[i] as string | undefined
//         result.push(res || '')
//     }
//
//     return result;
// }
const getRandomNames = (count: number) => {
    return new Promise<string[]>((resolve) => {
        const result: string[] = []
        if (!count) {
            resolve(result)
        }
        for (let i = 0; i < count; i++) {
            getName().then((item) => {
                result.push(item)
                if(result.length >= count) {
                    resolve(result)
                }}
            )
        }
    });
}

async function main() {
    // console.log(await getName())
    console.log(await getRandomNames(3))
}

main()