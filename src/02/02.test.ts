import {CityType} from "./02_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'NewYork',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "WhiteSt"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "HappySt"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "WhiteSt"
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'hospital',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {title: "CentralSt"}
                }

            }, {
                type: 'fire-station',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {title: "SouthSt"}
                }
            }],
        citizensNumber: 1000000
    }
})

test("test city should be content 3 houses", () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe("WhiteSt")

    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe("HappySt")

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe("WhiteSt")

})

test('test city should contains hospital and firestation', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('hospital')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe("CentralSt")

    expect(city.governmentBuildings[1].type).toBe('fire-station')
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe("SouthSt")
})


