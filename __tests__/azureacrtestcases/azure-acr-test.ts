import * as t2d2 from '@t2d2/core';

describe("resources", () => {
  let profile: t2d2.Profile;
  let currentState: t2d2.ParsedTFPlan;

  beforeAll(async () => { 
    profile = await t2d2.init({
      profileName: 'azure-acr-test',
      workspaceDir: '././src/azure-example/azure_acr',
    })

    currentState = await t2d2.plan(profile, {
      vars: {
        location: "East US",
        'rg-name': 't2d2',
		    'acr-name': 't2d2acr'
      }
    })
  })

  describe('resource group', () => {
    test("should create main resource group", () => { 
      expect(currentState.getResourceByAddress("azurerm_resource_group.rg"));
    })
})

describe('azure container registry', () => {
    test("should create main resource group", () => { 
      expect(currentState.getResourceByAddress("azurerm_container_registry.acr"));
    })
})

})