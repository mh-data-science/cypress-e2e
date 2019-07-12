export const captureViewCall = (url, dummyCondition = false) => {
  cy.server();
  //define tracking call you want to monitor
  cy.route('POST', 'https://prod.mhtr.be/v').as('viewCall');
  //open homepage
  cy.visit(url);

  cy.wait('@viewCall', { requestTimeout: 10000 });
  cy.get('@viewCall').should(xhr => {
    console.log('xhr', xhr);
    expect(xhr.status).to.eq(200);
    expect(xhr.responseBody).to.have.property('cId');
    dummyCondition ? expect(xhr.responseHeaders).to.be.true : null;
  });
};
