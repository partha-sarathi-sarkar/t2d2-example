# ---------------------------------------------------------------------------------------------------------------------
# DEPLOY A RESOURCE GROUP
# ---------------------------------------------------------------------------------------------------------------------

resource "azurerm_resource_group" "rg" {
  name     = var.rg-name
  location = var.location
}

# ---------------------------------------------------------------------------------------------------------------------
# DEPLOY AN AZURE CONTAINER REGISTRY
# ---------------------------------------------------------------------------------------------------------------------

resource "azurerm_container_registry" "acr" {
  name                = var.acr-name
  location            = var.location
  resource_group_name = var.rg-name

  sku           = var.sku
  admin_enabled = true

  tags = {
    Environment = var.environment
  }
}