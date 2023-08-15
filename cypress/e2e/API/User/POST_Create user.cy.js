import { newUser } from "../../../fixtures/createUser.json"

describe("Create user", () => {
    it("Verify that the user is created without any obstacles", () => {
        cy.request({
            method: "POST",
            url: `${Cypress.env('mainUrl')}${"/user"}`,
            body: newUser
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.username).to.equal(newUser.username);
            expect(response.body.firstName).to.equal(newUser.firstName);
            expect(response.body.lastName).to.equal(newUser.lastName);
        })
    })
});