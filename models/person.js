// Your Person class goes here!
class Person {
  constructor(firstName, surname, dob){
    this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    this.surname = surname
    this.dob = dob
    this.emails = []
    this.phoneNumbers = []
  }

  fullName(){
    return this.firstName + ' ' + this.surname
  }

  addEmail(email){
    this.emails.push(email)
  }

  addPhoneNumber(number){
    this.phoneNumbers.push(number)
  }

  returnFormattedDetails(){
    const emailsList = "- " + this.emails.join(`\n      - `)
    const numbersList = "- " + this.phoneNumbers.join(`\n      - `)
    const dashs = "-".repeat(this.fullName().length)
    return `
      ${this.firstName} ${this.surname}
      ${dashs}
      DOB: ${this.dob}

      Email Addresses:
      ${emailsList}

      Phone Numbers:
      ${numbersList}
      `
  //  return `${this.firstName} ${this.surname} \n------------\n DOB: ${this.dob}\n\nEmail Addresses:\n- ${this.emails[0]}\n- ${this.emails[1]}\n\nPhone Numbers:\n- ${this.phoneNumbers[0]}\n- ${this.phoneNumebers[1]}`
  }
}

module.exports = Person
