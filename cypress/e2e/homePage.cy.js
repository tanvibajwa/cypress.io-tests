describe('cypress.io tests for home page', ()=>{

    beforeEach(()=>{
        cy.visit('/');
        cy.viewport(1800, 2000);
    })

    it('Users are able to visit the website and able to scroll down to “Loved by OSS, trusted by Enterprise” and see the weekly downloads number', ()=>{
        cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView();
        cy.contains('Weekly downloads')
        .parent('.grow')
        .find('.font-bold')
        .invoke('text')
        .then((weeklyDownloadsText) => {
            const numericValue = parseInt(weeklyDownloadsText.match(/\d+/)[0], 10);    // parse the number part, taking only the first match
            cy.expect(numericValue).to.not.equal(0);                                   // the test will work as long as we have non zero weekly downloads
    });
    })

    it('User is able to click on "Install" and then on "npm install cypress" and make sure the copied text is "npm intsall cypress --save-dev"', ()=>{
        cy.get('[data-cy="header-install"]').click();
        cy.get('[data-cy="modal-install-copy"]').click();
        cy.assertValueCopiedToClipboard('npm install cypress --save-dev')
    })

})
