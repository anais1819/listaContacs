class ContactList {
    constructor() {
      this.contacts = [
        { fullName: "Juan Pérez" },
        { fullName: "María García" },
        { fullName: "Carlos López" }
      ];
    }
  
    addContact(fullName) {
      this.contacts.push({ fullName });
    }
  
    deleteContact(fullName) {
      this.contacts = this.contacts.filter(contact => contact.fullName !== fullName);
    }
  
    displayContacts() {
      console.log("Lista de Contactos:");
      this.contacts.forEach((contact, index) => {
        console.log(`${index + 1}. Nombre completo: ${contact.fullName}`);
      });
    }
  }
  
  // Ejemplo de uso
  const myContacts = new ContactList();
  myContacts.addContact("Laura Martínez");
  myContacts.deleteContact("María García");
  myContacts.displayContacts();
  
  
