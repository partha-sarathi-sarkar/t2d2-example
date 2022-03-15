import * as t2d2 from '@t2d2/core';

describe("resources", () => {
  let profile: t2d2.Profile;
  let currentState: t2d2.ParsedTFPlan;

  beforeAll(async () => { 
    profile = await t2d2.init({
      profileName: 'azure-resource-group-test',
      workspaceDir: '././src/azure-example/azure_rg',
    })

    currentState = await t2d2.plan(profile, {
      vars: {
        location: "East US",
        'rg-name': 't2d2',
      }
    })
  })

  describe('resource group', () => {
    test("should create main resource group", () => { 
      expect(currentState.getResourceByAddress("azurerm_resource_group.rg"));
    })

    test('should use rg-name in the resource group name', () => {
      const rg = currentState.getResourceByAddress("azurerm_resource_group.rg")
      expect((rg as any).values.name).toMatch(/^t2d2/)
    })

  test('should use location in the resource group name', () => {
    const rg = currentState.getResourceByAddress("azurerm_resource_group.rg")
    expect((rg as any).values.location).toMatch(/^eastus/)
  }) 
})

})