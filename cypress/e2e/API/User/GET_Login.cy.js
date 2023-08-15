import { newUser, invalidNewUser } from "../../../fixtures/createUser.json"

describe("Login the system", () => {
    it("Verify the user successfully logins his account", () => {
        cy.request({
            method: "GET",
            url: `${Cypress.env('mainUrl')}${"/user/login"}`,
            auth: newUser
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.code).to.equal(200);
            expect(response.body.type).to.equal('unknown');
            expect(response.body.token).to.be.a('string')
        })
    });
    it.only("Verify the user can't login without the username and password", () => {
        cy.request({
            method: "GET",
            url: `${Cypress.env('mainUrl')}${"/user/login"}`,
            auth: invalidNewUser
        }).then((response) => {
            expect(response.status).to.equal(400);
        })
    })
});