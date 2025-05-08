{

    function formatString(input: string, toUpper: boolean = true): string{
        if(!toUpper){
            return input?.toLowerCase()
        }else{
            return input?.toUpperCase()
        }
    }

    const stringFormat = formatString("ljlfkjd")

console.log(stringFormat)
}