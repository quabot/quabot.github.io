# Auto Role

Automatically assign roles on join, over time, or for server tags.

## Join Roles

Give any number of roles to users that join your server, to have all members with a members role. This can be used in conjunction with the [Verification Module](./verification.md).

![Roles](../img/Welcomer-Roles.png)

## Timed Roles

You can give/remove roles to and from users a while after they joined with Timed Roles. You can add up to 10 timed roles and you can customize the following:

- The role to add/remove
- The action (Remove/Add)
- The after - after how long the role should be added/removed.
- DM Notifications - send a dm to the user when the roles are added or removed.
  - Message - the message that is sent.
- Message Notifications - send a message in the server when roles are added or removed.
  - Message Channel - the channel that the message will be sent in.
  - Message - the message that will be sent.

This can be used to give users more roles the longer they are in the server!

![Timed](../img/AutoRole-Timed.png)

![Timed Messages](../img/AutoRole-TimedMessageNotifications.png)

## Server Tag Roles

You can give users a number of role(s) when they display your server's tag next to their name.

You can also send a custom DM or a custom message to any channel in the server when the tag roles are given to a user. The following settings are available:

- DM Notifications Enabled
- DM Message
- Server message enabled
- Server message channel
- Server message to send

![Tag Example](../img/AutoRole-TagExample.png)

![Tag](../img/AutoRole-ServerTag.png)

You can choose your tag in the user profile settings:

![Settings](../img/AutoRole-TagSettings.png)

### Additional Info

- If your server's boosts run out the roles will **not** be removed and it will only be removed once the user clears or changes their tag. This is because your server is still their 'Primary server'.
- You need boost tier 2 to configure a server tag.

## Sticky Roles

When a user re-joins the server and Sticky Roles is enabled, QuaBot will restore their roles to how they were before.

You have two settings to configure for Sticky Roles:

- **Enable Sticky Roles**: if disabled roles are not restored
- **Sticky Roles**: a list of roles to restore upon re-join. If the list is empty, all roles are restored. If roles are defined, only those roles are restored.

![Sticky Roles](../img/AutoRole-StickyRoles.png)

## Need Help?

Join our [Discord server](https://discord.quabot.net) for support, bug reports, and setup help.
