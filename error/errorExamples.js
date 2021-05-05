class HadanieError extends Error {
    constructor(){
        super()
        this.name = "HadanieError"
        this.message = "Neuhadol si"
    }
}

const tipujem = function(tip) {
    const hadaneCislo = 5

    try {
        if (tip !== hadaneCislo){
            throw new HadanieError
        }
        console.log("Uhadol si")
        } catch (error) {
            console.log(error.message)
        } finally {
            console.log("koniec hadania")
        }
}

tipujem(15)
