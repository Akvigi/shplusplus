const caller = (callback: (v: string) => void) => {
    callback('ip')
}

const resulter = async () => {
    return new Promise<string>((resolve) => {
        setTimeout(
            () =>
                caller((v) => resolve(v)),
            1000
            )
    })
}

async function main() {
    console.log(
        await resulter()
    )
}

main()