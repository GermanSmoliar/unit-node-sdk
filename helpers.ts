import {State, Address, FullName, Phone, Status, Title, Officer, BeneficialOwner, BusinessContact, AuthorizedUser, Counterparty, Coordinates} from './types/common'
export function createAddress(street: string, street2: string | null, city: string, state: State | null, postalCode: string, country: string): Address {
    return {
        street,
        ...(street2 && { street2 }),
        city,
        ...(state && { state }),
        postalCode,
        country
    }
}

export function createFullName(first: string, last: string): FullName {
    return {
        first,
        last
    }
}

export function createPhone(countryCode: string, number: string): Phone {
    return {
        countryCode,
        number
    }
}

export function createOfficer(status: Status | null, fullName: FullName, title: Title | null, ssn: string | null, passport: string | null,
    nationality: string | null, dateOfBirth: string, address: Address, phone: Phone, email: string): Officer {
    return {
        ...(status && { status }),
        fullName,
        ...(title && { title }),
        ...(ssn && { ssn }),
        ...(passport && { passport }),
        ...(nationality && { nationality }),
        dateOfBirth,
        address,
        phone,
        email,
    }
}

export function createBeneficialOwner(status: Status | null, fullName: FullName, ssn: string | null, passport: string | null,
    nationality: string | null, dateOfBirth: string, address: Address, phone: Phone, email: string, percentage: string | null): BeneficialOwner {
    return {
        ...(status && { status }),
        fullName,
        ...(ssn && { ssn }),
        ...(passport && { passport }),
        ...(nationality && { nationality }),
        dateOfBirth,
        address,
        phone,
        email,
        ...(percentage && { percentage }),
    }
}

export function createBusinessContact(fullName: FullName, email: string, phone: Phone): BusinessContact {
    return {
        fullName,
        email,
        phone
    }
}

export function createAuthorizedUser(fullName: FullName, email: string, phone: Phone): AuthorizedUser {
    return {
        fullName,
        email,
        phone
    }
}

export function createCounterparty(routingNumber: string, accountNumber: string, accountType: string, name: string): Counterparty {
    return {
        routingNumber,
        accountNumber,
        accountType,
        name
    }
}

export function createCoordinates(longitude: number, latitude: number): Coordinates {
    return {
        longitude,
        latitude
    }
}