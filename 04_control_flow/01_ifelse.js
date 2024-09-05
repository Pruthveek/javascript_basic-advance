// AND =&&, OR =||, Not = !
let age = 12
let hasLicense = true
let hasCar = false

if (age >= 18) {
    if (hasLicense && !hasCar) {
        console.log("You can drive, but you need a car")
    } else if (hasLicense && hasCar) {
        console.log("You can drive your own car")
    } else if (!hasLicense) {
        console.log("You cannot drive because you don't have a license")
    }
} else {
    if (age < 18 || !hasLicense) {
        console.log("You're too young to drive or you don't have a license")
    }
}
