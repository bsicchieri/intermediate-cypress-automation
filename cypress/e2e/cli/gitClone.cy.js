/// <reference types="Cypress" />

//ssh-keygen -R localhost

import { faker } from '@faker-js/faker'

describe('Git clone', () => {
  const project = {
    name: `project-${faker.datatype.uuid()}`,
    description: faker.random.words(5)
  }

  beforeEach(() => {
    //cy.api_deleteProjects()
    cy.api_createProject(project)
  })

  it('Successfully', () => {
    cy.cloneViaSSH(project)

    cy.readFile(`cypress/downloads/${project.name}/README.md`)
      .should('contain', `# ${project.name}`)
      .and('contain', project.description)
  })
})