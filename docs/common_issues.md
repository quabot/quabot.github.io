---
sidebar_position: 8
title: Common Issues
hide_title: true
---

# Common Issues

Having issues with QuaBot? These are common issues that users have and that show up on the issues page frequently.

## Roles

### Role not found!

That means that role QuaBot is trying to assign is invalid and could not be located. It has most likely been deleted and the configuration has not been updated. Ensure the role you are trying to give exists, by reconfiguring the role(s) and checking them all. If the issue persists, [contact us](#do-you-need-additional-support).

### Lacks permissions to assign or remove role (for user)

That means the bot misses some permissions. Ensure the [Permissions](./permissions.md) are setup correctly and the bot has the **Manage Roles** permission. Check that the [QuaBot Role Position](./permissions.md#quabot-role-position) has been configured correctly. **If the role position is not configured correctly, QuaBot cannot assign this role to users. Read through the Role Position section to ensure you have configured it correctly.** If the issue persists, [contact us](#do-you-need-additional-support).

## Channels

### Channel not found!

That means the channel QuaBot is trying to find and send a message in, is invalid and could not be located. It has most likely been deleted and the configuration has not been updated since. Ensure the channel exists and reconfigure the channel. You can also create a new one. If the issue persists, [contact us](#do-you-need-additional-support).

### Lacks permissions to send messages in channel

That means the bot misses some permissions for that channel. Ensure the [Permissions](./permissions.md) are setup correctly and the bot has the **Send Messages** permission in that channel or category through any of it's roles. More information about Discord Permissions can be found in [Discord's official FAQ here](https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ). If the issue persists, [contact us](#do-you-need-additional-support).

### Lacks permissions to delete messages in channel

That means the bot does not have the **Manage Messages** permission (in the channel) and cannot delete messages in the channel. Ensure the [Permissions](./permissions.md) are setup correctly and the bot has the permission through (one of) it's roles or the channel. More information about Discord Permissions can be found in [Discord's official FAQ here](https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ). If the issue persists, [contact us](#do-you-need-additional-support).

### Lacks permissions to edit channel

That means the bot does not have the **Manage Channels** permission and cannot edit the channel. Ensure the [Permissions](./permissions.md) are setup correctly and the bot has the permission through (one of) it's roles or the channel. If the bot needs to edit Role-specific permissions for a channel, for lockdown commands for example, it also needs **Manage Roles**. More information about Discord Permissions can be found in [Discord's official FAQ here](https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ). If the issue persists, [contact us](#do-you-need-additional-support).

## Moderation

### Lacks permissions to ban users

That means the bot does not have the **Ban Members** permission to ban users. Ensure the [Permissions](./permissions.md) are setup correctly and the bot has the permission through (one of) it's roles. Read the [Permissions page](./permissions.md) for more information about moderation permissions. More information about Discord Permissions can be found in [Discord's official FAQ here](https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ). If the issue persists, [contact us](#do-you-need-additional-support).

### Lacks permissions to kick users

That means the bot does not have the **Kick Members** permission to kick users. Ensure the [Permissions](./permissions.md) are setup correctly and the bot has the permission through (one of) it's roles. Read the [Permissions page](./permissions.md) for more information about moderation permissions. More information about Discord Permissions can be found in [Discord's official FAQ here](https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ). If the issue persists, [contact us](#do-you-need-additional-support).

### Lacks permissions to timeout users

That means the bot does not have the **Timeout Members** (Moderate Members) permission to timeout users. Ensure the [Permissions](./permissions.md) are setup correctly and the bot has the permission through (one of) it's roles. Read the [Permissions page](./permissions.md) for more information about moderation permissions. More information about Discord Permissions can be found in [Discord's official FAQ here](https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ). If the issue persists, [contact us](#do-you-need-additional-support).

## Do you need additional support?

Most commands should have either of these two ways to manage permissions, but some commands might only have one of them. If you have any questions or need help, feel free to reach out to our [support server](https://discord.quabot.net). We're here to help you get the most out of QuaBot!
