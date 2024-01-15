describe('cypress.io tests for about us page', ()=>{

    beforeEach(()=>{
        cy.visit('/');
        cy.viewport(1800, 2000);
    })

    it('User is able to click on Company and then on “About Cypress"', ()=>{
        cy.contains('[data-cy=dropdown-company]', 'Company').trigger('mouseover');
        cy.get('a[href="/about-us"]').eq(0).click();
        cy.url('https://www.cypress.io/about-us');
        cy.contains(' About us ');
    })

})