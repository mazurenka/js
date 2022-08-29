export type StreetType = {
    title: string
}
export type AddressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentAddressType = {
    street: { title: string }
}

export type BuildType = {
    type: string
    budget: number
    staffCount: number
    address: GovernmentAddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<BuildType>
    citizensNumber: number
}