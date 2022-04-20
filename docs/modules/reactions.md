# Reaction Roles Module

> Last edited: 1/23/2022 at 12:46AM

QuaBot has a reaction roles system with multiple modes, like normal, verify and unique.

### How does it work?
Users react to a message with an emoji and will then (depending on the reaction mode) recieve a role. (or be removed one if they take the reaction away.) They are alerted of this via a dm that gets deleted after a few seconds.

### Setup
You send a message to a channel where you want the role to be setup in. You also prepare the role. You then run the command `/reactionrole create`. For the channel you give the channel where the message is located. For message give the message id, to get this you must [enable developer mode](/enable-dev-mode.md). For the role give the role you want to create it for, and for emoji give the built in emoji to used for the reaction role. Mode is optional and you can pick them out of the list. Normal is both remove and adding, unqiue is that users can only pick one, drop is they can only remove it, and verify is add only.

### Things to know
* More modes are coming soon.
* Use `/reactionrole delete` to remove the reactionrole.
* The dashboard will ease the createion, but it's unavailable at this time.


*If you still have questions, or are experiencing errors, go to our [Support Discord](https://discord.quabot.net).*