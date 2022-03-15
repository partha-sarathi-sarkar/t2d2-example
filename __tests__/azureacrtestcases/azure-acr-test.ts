import * as t2d2 from '@t2d2/core';

describe("resources", () => {
  let profile: t2d2.Profile;
  let currentState: t2d2.ParsedTFPlan;
  let location: string = "eastus"
  let resourceGroupName: string = "t2d2"
  let acrName: string = "t2d2acr"
  let environment: string = "alpha"
  let sku: string = "Standard"

  beforeAll(async () => { 
    profile = await t2d2.init({
      profileName: 'azure-acr-test',
      workspaceDir: '././src/azure-example/azure_acr',
    })

    currentState = await t2d2.plan(profile, {
      vars: {
        location: location,
        'rg-name': resourceGroupName,
		    'acr-name': acrName,
        environment: environment,
        sku: sku
      }
    })
  })

  describe('resource group', () => {
    test("should create main resource group", () => { 
      expect(currentState.getResourceByAddress("azurerm_resource_group.rg"));
    })
})

describe('azure container registry', () => {
    test("should create main resource ", () => { 
      expect(currentState.getResourceByAddress("azurerm_container_registry.acr"));
    })

    test('should use acr-name in the acr', () => {
      const rg = currentState.getResourceByAddress("azurerm_container_registry.acr")
      expect((rg as any).values.name).toMatch(acrName)
    })

    test('should use env in the acr', () => {
      const rg = currentState.getResourceByAddress("azurerm_container_registry.acr")
      expect((rg as any).values.tags.Environment).toMatch(environment)
    })

    test('should check sku  in the acr', () => {
      const rg = currentState.getResourceByAddress("azurerm_container_registry.acr")
      expect((rg as any).values.sku).toMatch(sku)
    })
})

})