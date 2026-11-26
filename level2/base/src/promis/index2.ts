type Gender = 'f' | 'm'

const getRandomPerson = (delay = Math.random() * 1000): Promise<{ gender: Gender }> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({ gender: Math.random() < 0.5 ? 'f' : 'm' })
        }, delay)
    })
const getGender = async (): Promise<Gender> => {
    const response = await getRandomPerson();
    console.log(response)
    return response.gender;
}
//
// const getParticularGenderTries = (g: Gender) => {
//     return new Promise<number>((resolve) => {
//         let result = 0
//         const tryGenderGet = () => {
//             getGender().then((item) => {
//                 result++
//                 if(item === g) {
//                     resolve(result)
//                 } else {
//                     tryGenderGet()
//                 }
//             })
//         }
//         tryGenderGet()
//     });
// }

const getParticularGenderTries = async (g: Gender) => {
    let result = 1
    while (await getGender() !== g) {
        result++
    }
    return result
}

async function main() {
    console.log(await getParticularGenderTries('f'))
}

main()