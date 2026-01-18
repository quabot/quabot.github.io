# Linked Roles

Automatically assign and remove roles based on other roles members have.

## Overview

Linked roles allow you to automatically link a set of roles. If a user has all the roles of the set, a number of roles can be added or removed. It has support for blocked roles, to ensure full control. These roles are automatically given once the user gets the required roles. Example:

> User has the @Booster and @Donator role. They will be given the @Supporter role, and the @Booster and @Donator roles are removed.

## Setting it up

You have a couple of settings to confiure.

- **Enabled** controls if the entire module should be enabled.
- **Notify users via DM** users will get a DM if their roles are updated by the module.

You can add a linked role at the bottom of the page as outlined in red below. You can click **Edit** to start changing the settings and **Remove** the role with their respective buttons. Each linked roles has the following settings:

- **Name** used to identify the linked role.
- **Required Roles**: the roles needed to add/remove the roles.
- **Blocked Roles**: the roles that the user cannot have in order to add/remove the roles. If the user has any of these, the roles are not changed.
- **Add Roles**: the roles that are added if the above conditions are met.
- **Remove Roles**: the roles that are removed if the above conditions are met.

## Frequently Asked Questions

### **The roles are not given!**

If the conditions are met and the roles are not given, ensure the bot has the correct [permissions](../permissions) and
the [role position](../permissions) is configured correctly.

### **When are these roles given?**

Immediately once their roles have been updated. Once the user meets the conditions the roles are applied. It does **not** retroactively apply when you create a set later on.

### **How many linked roles can I create?**

- Free servers: **10**
- Premium servers: **100**

## Need Help?

Join our [Discord server](https://discord.quabot.net) for support, bug reports, and setup help.
