const numeral_to_roman = require('../numeral_to_roman');
describe('Le programme doit', () => {
    test('renvoyer "I" pour 1 en input' , () => {
       expect(numeral_to_roman(1)).toBe("I")
    })

    test('renvoyer "II" pour 2 en input' , () => {
        expect(numeral_to_roman(2)).toBe("II")
    })

    test('renvoyer "III" pour 3 en input' , () => {
        expect(numeral_to_roman(3)).toBe("III")
    })

    test('renvoyer "IV" pour 4 en input' , () => {
        expect(numeral_to_roman(4)).toBe("IV")
    })

    test('renvoyer "V" pour 5 en input' , () => {
         expect(numeral_to_roman(5)).toBe("V")
    })

    test('renvoyer "VI" pour 6 en input' , () => {
        expect(numeral_to_roman(6)).toBe("VI")
    })

    test('renvoyer "X" pour 10 en input' , () => {
        expect(numeral_to_roman(10)).toBe("X")
    })

    test('renvoyer "IX" pour 9 en input' , () => {
        expect(numeral_to_roman(9)).toBe("IX")
    })

    test('renvoyer "L" pour 50 en input' , () => {
        expect(numeral_to_roman(50)).toBe("L")
    })

    test('renvoyer "XL" pour 40 en input' , () => {
        expect(numeral_to_roman(40)).toBe("XL")
    })

    test('renvoyer "C" pour 100 en input' , () => {
        expect(numeral_to_roman(100)).toBe("C")
    })

    test('renvoyer "XC" pour 90 en input' , () => {
        expect(numeral_to_roman(90)).toBe("XC")
    })

    test('renvoyer "D" pour 500 en input' , () => {
        expect(numeral_to_roman(500)).toBe("D")
    })

    test('renvoyer "CD" pour 400 en input' , () => {
        expect(numeral_to_roman(400)).toBe("CD")
    })

    test('renvoyer "M" pour 1000 en input' , () => {
        expect(numeral_to_roman(1000)).toBe("M")
    })

    test('renvoyer "CM" pour 900 en input' , () => {
        expect(numeral_to_roman(900)).toBe("CM")
    })

})

describe('special case', () => {
    test('0 devrait renvoyer chaine vide', () => {
        expect(numeral_to_roman(0)).toBe("")
    })

    test('un nombre négatif doit lever une exception', () => {
        expect(() => {numeral_to_roman(-2)}).toThrow()
    })

    test('un chaine doit lever une exception', () => {
        expect(() => {numeral_to_roman("Throw error")}).toThrow();
    })

    test('undefined doit lever une exception', () => {
        expect(() => {numeral_to_roman(undefined)}).toThrow();
    })

    test('boolean doit lever une exception', () => {
        expect(() => {numeral_to_roman(true)}).toThrow();
    })

    test('float doit lever une exception', () => {
        expect(() => {numeral_to_roman(1.3)}).toThrow();
    })
})