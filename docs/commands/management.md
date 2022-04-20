# Management Commands

> Last edited: 1/23/2022 at 1:36PM

Management commands are used to lock channels, setup core systems and more.

#### `/clear [amount]`
Clear an amount of messages.
#### Example
- `/clear 100`

#### `/config`
Configure quabot.

#### `/lock (channel) (reason) (duration)`
Lock a channel.
#### Example
- `/lock` - Locks the current channel indefinately.
- `/lock #general Raid` - Lock #general indefinately with the reason 'Raid'.
- `/lock #general Cleaning 1m` - Lock #general for 1 minute with the reason 'Cleaning'.
- `/lock #general 1w` - Lock #general for 1 week.
- `/lock 1h` - Lock the current channel for 1 hour.

#### `/channel create [name] (description) (slowmode)`
Create a channel.
#### Example
- `/channel create spamming-lol For spam 3` - Creates a channel called "spamming-lol" with a description "For Spam" with a 3s slowmode.
- `/channel create general` - Creates a channel called general.

#### `/channel delete [channel]`
Delete a channel.
#### Example
- `/channel delete #general`

#### `/channel slowmode [channel] [slowmode]`
Set a channel slowmode.
#### Example
- `/channel slowmode #spamming-lol 0`

> [!WARNING]
> The Role module is getting changed soon.
#### `/role create [name] (color)`
Create a role.
#### Example
- `/role create Member #1Df1f8`

#### `/role delete [role-name]`
Delete a role.
#### Example
- `/role delete Member`

#### `/role add [user] [role-name]`
Give a role.
#### Example
- `/role add @Joa_sss Developer`

#### `/role add [user] [role-name]`
Give a role.
#### Example
- `/role add @Joa_sss Developer`

#### `/role remove [user] [role-name]`
Remove a role.
#### Example
- `/role remove @Joa_sss Stupid`

#### `/mention `
Mention everyone.

#### `/unlock (channel)`
Unlock a channel
#### Example
- `/unlock #spamming-lol`

#### `/reactionrole create [channel] [message] [role] [emoji] (mode)`
Create a reaction role.
#### Example
- `/reactionrole create #roles 934782021757186153 @Minecraft ⛏️ normal `

#### `/reactionrole list`
List the reaction roles.