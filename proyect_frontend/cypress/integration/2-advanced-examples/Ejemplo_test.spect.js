describe('Buscar test',function(){
    it('Buscar test',function(){
        cy.visit('https://pr-front-end.web.app');
        cy.get('#searchbox > .btn').click();
    })
})