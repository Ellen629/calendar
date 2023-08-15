import { newUser, updatedUser } from "../../../fixtures/createUser.json"

describe("Update the user info", () => {
    const username = newUser.username
    it("Verify the user info is successfully updated", () => {
        cy.request({
            method: "PUT",
            url: `${Cypress.env('mainUrl')}/user/${username}`,
            auth: {username},
            body: updatedUser
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.firstName).to.equal(updatedUser.firstName)
    });
});
})