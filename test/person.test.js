const chai = require('chai')
const expect = chai.expect

// Your Person test goes here!

const Person = require('../models/person.js')

describe('Person', ()=> {
  it('should initialize properly', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1998')
    expect(person.firstName).to.equal('Joe')
    expect(person.surname).to.equal('Bloggs')
    expect(person.dob).to.equal('1 Jan 1998')

    expect(person.emails).to.deep.equal([])
    expect(person.phoneNumbers).to.deep.equal([])
  })

  it('should capatalize firstName', ()=> {
    var person = new Person('amy', 'Nother', '1 Jan 1998')
    expect(person.firstName).to.equal('Amy')
  })

  it('should return a full name', ()=> {
    var person = new Person('amy', 'Nother', '1 Jan 1998')
    expect(person.fullName()).to.equal('Amy Nother')
  })

  it('should accept new emails and add them to the array', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1998')

    person.addEmail('joe@example.com')
    person.addEmail('joe.bloggs@workexample.com')
    expect(person.emails).to.deep.equal(['joe@example.com', 'joe.bloggs@workexample.com'])
  })

  it('should accept new phone numbers and add them to the array', ()=> {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1998')

    person.addPhoneNumber('123456789')
    person.addPhoneNumber('987654321')
    expect(person.phoneNumbers).to.deep.equal(['123456789', '987654321'])

  })

    it('should return formatted details', ()=> {
      var person = new Person('Joe', 'Bloggs', '1 Jan 1998')
      person.addEmail('joe@example.com')
      person.addEmail('joe.bloggs@workexample.com')
      person.addPhoneNumber('123456789')
      person.addPhoneNumber('987654321')
      expect(person.returnFormattedDetails()).to.equal(`
      Joe Bloggs
      ----------
      DOB: 1 Jan 1998

      Email Addresses:
      - joe@example.com
      - joe.bloggs@workexample.com

      Phone Numbers:
      - 123456789
      - 987654321
      `)
    })
})
