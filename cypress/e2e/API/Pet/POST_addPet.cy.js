import { newPetData, secondPetData, thirdPetData} from "../../../fixtures/newPet.json"

describe("Add a new pet to the list", () => {
    it.only("Verify that the response body matches with the given body", () => {
        cy.request({
            method: "POST",
            url: `${Cypress.env('mainUrl')}${"/pet"}`,
            body: newPetData
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal(newPetData.status);
            expect(response.body.name).to.equal(newPetData.name);
            expect(response.body.photoUrls[0]).to.equal(newPetData.photoUrls[0]);
            cy.addedPetId(response);
        })
    })
});
    it("Verify that the user can add multiple pets at the same time successfully", () => {
        const pets = [newPetData, secondPetData, thirdPetData];
        cy.wrap(pets).each((pet) => {
            cy.request({
            method: "POST",
            url: `${Cypress.env('mainUrl')}${"/pet"}`,
            body: pet,
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal(pet.status);          
        })
    })    
});