#---------------------------------------------------------------------------------------------------------------------
# ENVIRONMENT VARIABLES
# Define these secrets as environment variables
# ---------------------------------------------------------------------------------------------------------------------

# ARM_CLIENT_ID

# variable "ARM_CLIENT_ID" {
#   default = ""
# }
# ARM_CLIENT_SECRET

# variable ARM_CLIENT_SECRET {
#   default = ""
# }
# ARM_SUBSCRIPTION_ID

# variable ARM_SUBSCRIPTION_ID {
#   default = ""
# }
# ARM_TENANT_ID

# variable "ARM_TENANT_ID" {
#   default = ""
# }

# ---------------------------------------------------------------------------------------------------------------------
# REQUIRED PARAMETERS
# You must provide a value for each of these parameters.
# ---------------------------------------------------------------------------------------------------------------------

# ---------------------------------------------------------------------------------------------------------------------
# OPTIONAL PARAMETERS
# These parameters have reasonable defaults.
# ---------------------------------------------------------------------------------------------------------------------

variable "rg-name" {
  description = "Resource Group Name"
  type        = string
  default     = "resource"
}

variable "location" {
  description = "The Azure region in which to deploy your resources to"
  type        = string
  default     = "East US"
}


variable "environment" {
  description = "Env"
  type = string
  default = "Development"
}