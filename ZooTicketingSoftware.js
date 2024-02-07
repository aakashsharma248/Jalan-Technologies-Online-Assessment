class ZooTicketingSystem {
  constructor() {
    this.tickets = [];
  }

  issueTicket(numGuests, guestAges) {
    if (numGuests !== guestAges.length) {
      console.log("Error: Number of guests and ages do not match");
      return;
    }

    const ticket = {
      guests: [],
      totalCharges: 0,
    };

    guestAges.map((age, idx) => {
      const charge = this.calculateEntranceCharge(age);
      ticket.guests.push({ person: idx + 1, age: age });
      ticket.totalCharges += charge;
    });

    this.tickets.push(ticket);
    console.log("Entrance ticket issued successfully!");
    console.log("Total charges as per the guest ages: ", ticket.totalCharges);
  }

  validateTicket(ticketIndex) {
    if (ticketIndex < 0 || ticketIndex >= this.tickets.length) {
      console.log("Error: Invalid ticket index");
      return;
    }

    const ticket = this.tickets[ticketIndex];
    console.log("Ticket Details:");
    ticket.guests.forEach((guest) => {
      console.log(`Guest ${guest.person} (age: ${guest.age})`);
    });
  }

  calculateEntranceCharge(age) {
    if (age <= 2) return 0;
    else if (age < 18) return 100;
    else if (age < 60) return 500;
    else return 300;
  }
}

const zooSystem = new ZooTicketingSystem();

// Enter details of guests
const numberOfGuest = prompt("Kindly enter the number of guest: ");

let ageOfGuest = [];
for (let i = 0; i < numberOfGuest; i++) {
  ageOfGuest[i] = prompt("Kindly enter the age of a person: ");
}
const ageOfGuestInNumber = ageOfGuest.map(Number);

// Issue ticket for the guest
zooSystem.issueTicket(Number(numberOfGuest), ageOfGuestInNumber);

// Validate the ticket (display details for security personnel)
zooSystem.validateTicket(0);
