describe('cypress.io tests for cypress cloud', ()=>{

    beforeEach(()=>{
        cy.visit('/');
        cy.viewport(1800, 2000);
    })

    it('User is able to click on "Product" and then "visual review"', ()=>{
        cy.contains('[data-cy=dropdown-product]', 'Product').trigger('mouseover');
        cy.contains('Visual Reviews').click();
        cy.url('https://www.cypress.io/cloud#visual_reviews');
        cy.contains(' Visual Reviews ');
    })

    it('User is able to click on "Product" and then "Smart Orchestration”, then scroll down to “Test Analytics” and see that the green circle is around “Test Analytics”', ()=>{
        cy.contains('[data-cy=dropdown-product]', 'Product').trigger('mouseover');
        cy.contains('Smart Orchestration').click();
        cy.get('a[href="#test_analytics"]').as('testAnalyticsLink');
        // test that circle is invisible
        cy.get('@testAnalyticsLink').should('have.css', 'border-color', 'rgba(0, 0, 0, 0)');
        cy.get('[title="Project Health"]').click();
        // test that circle is visible
        cy.get('@testAnalyticsLink').should('have.class', 'rounded-full');
        // test that it's green in color. This makes this test more brittle though, i.e. if styling changes (e.g. christmas theme?), the test will fail.
        // Including this step since we have a requirement to test. Ideally I would like such tests to be covered through UI/UX testing (if available)
        cy.get('@testAnalyticsLink').should('have.css', 'border-color', 'rgb(163, 231, 203)');
    })
})