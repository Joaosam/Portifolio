/// <reference types="cypress" />

describe("Get API", () => {
  it("should be able get projects the github API", () => {
    cy.request({
      method: "GET",
      url: "https://api.github.com/users/joaosam/repos?sort=created&per_page=6",
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).to.have.length(6);
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("created_at");
      expect(response.body[0]).to.have.property("default_branch");
      expect(response.body[0]).to.have.property("description");
      expect(response.body[0]).to.have.property("homepage");
      expect(response.body[0]).to.have.property("html_url");
    });
  });
});
