import * as t2d2 from '@t2d2/core';

describe("resources", () => {
  let profile: t2d2.Profile;
  let currentState: t2d2.ParsedTFPlan;
  let location: string = "eastus"
  let resourceGroupName: string = "t2d2"

  beforeAll(async () => { 
    profile = await t2d2.init({
      profileName: 'azure-resource-group-test',
      workspaceDir: '././src/azure-example/azure_rg',
    })

    currentState = await t2d2.plan(profile, {
      vars: {
        location: location,
        'rg-name': resourceGroupName,
      }
    })
  })

  describe('resource group', () => {
    test("should create main resource group", () => { 
      expect(currentState.getResourceByAddress("azurerm_resource_group.rg"));
    })

    test('should use rg-name in the resource group name', () => {
      const rg = currentState.getResourceByAddress("azurerm_resource_group.rg")
      expect((rg as any).values.name).toMatch(resourceGroupName)
    })

  test('should use location in the resource group name', () => {
    const rg = currentState.getResourceByAddress("azurerm_resource_group.rg")
    expect((rg as any).values.location).toMatch(location)
  }) 
})

})