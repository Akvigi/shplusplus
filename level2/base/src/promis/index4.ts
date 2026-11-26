const f1 = () => {
    return new Promise<string>((resolve) =>
        setTimeout(() => resolve('ip'), 500)
    )
}

const f2 = async (callback: (v: string) => void) => {
    const ip = await f1()
    callback(ip)
}

async function main() {
    await f2(console.log)
}

main()