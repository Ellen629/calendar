
Cypress.Commands.add('generateRandomName', (length) => { 
    let result = '';
     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     const charactersLength = characters.length;
     let counter = 0;
     while (counter < length) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
       counter += 1;
     }
     return `test${result}`;
 }) 

 
Cypress.Commands.add('addedPetId', (response) => {
  cy.wrap(response.body.id).as('petId');
});
