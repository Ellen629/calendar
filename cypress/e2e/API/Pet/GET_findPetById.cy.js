import { newPetData, secondPetData, thirdPetData} from "../../../fixtures/newPet.json";
import '../../../support/commands';

describe("Find pet by its id", () => {
    it("Verify that the user can add the stored pet id in the url", () => {
        cy.get('@petId').then((petId) => {
            cy.request({
                  method: 'GET',
                  url: `${Cypress.env('mainUrl')}/${petId}`,
                }).then((response) => {
                  expect(response.status).to.equal(200);
                });
        })
   })
});