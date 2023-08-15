import { newUser } from "../../../fixtures/createUser.json"

describe("Get the user by his user name", () => {
    const username = newUser.username
    it("Verify the user info is loaded only having the user name", () => {
        cy.request({
            method: "GET",
            url: `${Cypress.env('mainUrl')}/user/${username}`,
            auth: {username}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.firstName).to.equal(newUser.firstName)
    });
  });
})