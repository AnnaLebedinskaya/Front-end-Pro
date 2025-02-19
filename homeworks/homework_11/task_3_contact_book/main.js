const contactBook = {
  contacts: [
    { name: "Анна", phone: "+380501234567", email: "anna@example.com" },
    { name: "Олег", phone: "+380671234567", email: "oleg@example.com" },
  ],

  findContact(name) {
    return (
      this.contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      ) || "Контакт не знайдено"
    );
  },

  addContact(name, phone, email) {
    this.contacts.push({ name, phone, email });
    console.log(`Контакт ${name} додано!`);
  },
};

console.log(contactBook.findContact("Анна"));
contactBook.addContact("Марія", "+380931234567", "maria@example.com");
console.log(contactBook.findContact("Марк"));
console.log(contactBook.contacts);
