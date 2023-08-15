import { newPetData, secondPetData, thirdPetData, updatedPetData} from "../../../fixtures/newPet.json";

describe("Update the existing pet information", () => {
    it.only("Verify that the response shows the updated version of the given data", () => {
        cy.request({
            method: "PUT",
            url: `${Cypress.env('mainUrl')}${"/pet"}`,
            body: updatedPetData
        }).then((response) => {
            expect(response.status).to.equal(200);
        })
    })
});