---
sidebar_position: 1
---

# Getting Started

In this article you will learn how you can add QuaBot to a server, block certain users from using commands and how to use the dashboard. Everything will be explained step-by-step with images to detail everything more clearly. If you want to skip a section you can jump to different parts of the article using the sidebar on the right.

## Inviting the bot

In order to use QuaBot you must invite it first. To do that click on the following link: [discord.com](https://discord.com/oauth2/authorize?client_id=995243562134409296&permissions=274878426206&redirect_uri=https%3A%2F%2Fapi.quabot.net%2Fauth&response_type=code&scope=bot%20applications.commands%20guilds%20identify). If you are not logged in to Discord on the web, you can do that now. You should see this webpage:

<img src='https://i.imgur.com/aUEjzgG.png' style={{ borderRadius: '5px', maxWidth: '400px' }} />
<br />
<br />

Click on the dropdown that says 'Select a server'. The dropdown will open and show a list of servers. In order for a server to show up in that list you need to be the server owner or have either administrator or manage server permissions on the server. If you do not have these permissions please ask someone that does have them to add QuaBot. When opened, the dropdown will look like this:

<img src='https://i.imgur.com/s9IumKV.png' style={{ borderRadius: '5px' }} />
<br />
<br />

Scroll though the dropdown to find the server you want to add QuaBot to. Once you've located the server, click on it. You should see this:

<img src='https://i.imgur.com/MQ7sjCA.png' style={{ borderRadius: '5px' }} />
<br />
<br />

Now click on the 'Continue' button. You will see a list of permissions that QuaBot will be given once it's added to the server. These permissions are all required if you wish to use all of QuaBot's features. For a full list of permissions and their descriptions: visit [discord.com](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags). Once you're done and you've reviewed all the permissions, click on 'Continue' or 'Authorize'. If you have 2FA enabled, you will now have to enter your 2FA code. Afterwards, click on 'Authorize'.

<img src='https://i.imgur.com/vPg9RGy.png' style={{ borderRadius: '5px' }} />
<br />
<br />

You will now be redirected to our dashboard. If you go to Discord, QuaBot will be in your Discord server.


## Changing command permissions using Discord

If you wish to change some of the default permissions of QuaBot, follow these steps. This can be used to block certain commands from being used and being seen by users without the required permissions. So how do you change this? First, click on the server name of the server you're trying to configure. A dropdown will open below the server name.

<img src='https://i.imgur.com/0S4Wcv4.png' style={{ borderRadius: '5px' }} />
<br />
<br />

Click on 'Server Settings'. The page shown below should be opened. Click on 'Integrations'.


<img src='https://i.imgur.com/NbCAvz3.png' style={{ borderRadius: '5px' }} />
<br />
<br />

You will see some sections about webhooks, Twitch and Youtube. Scroll down to the Bots and Apps section. You can click on QuaBot to configure it.

<img src='https://i.imgur.com/w2TyvLf.png' style={{ borderRadius: '5px' }} />
<br />
<br />

The page shown below should be opened. You can click on commands to change who can use them and where (which channels) they can use them. 

<img src='https://i.imgur.com/1tQgLu4.png' style={{ borderRadius: '5px' }} />
<br />
<br />

If you want to block people with the Member role (can be any other role or a specific user) from using the /8ball command for example, you can click on 'Add members or roles', select the Member role (this can be any role) and click on the red 'X' to deny them access to the command. After clicking on save, people with the Member role will no longer see the command in their commands list.

<img src='https://i.imgur.com/MYfzqML.png' style={{ borderRadius: '5px' }} />
<br />
<br /> 


## Configuring QuaBot using the dashboard
There is an advanced dashboard that you can use to configure all of the settings QuaBot has to offer. After inviting QuaBot you should be logged in automatically. If you are not logged in yet/anymore, this is how you do it:

### Logging in

Go to the website at [quabot.net](https://quabot.net). Click on the Login button on the top-right.

<img src='https://i.imgur.com/zuu7hDz.png' style={{ borderRadius: '5px' }} />
<br />
<br />

You will be redirected to Discord. Click 'Authorize' to login.

<img src='https://i.imgur.com/jQ7LULw.png' style={{ borderRadius: '5px' }} />
<br />
<br />

You will now see your server list in front of you.


### Server list

The server list will contain all the servers that you have access to. In order to see a server in this list, you need to be server owner or have either administrator or manage server permissions. If QuaBot is not in a server yet, you will see the server with an 'Invite QuaBot' button. If it's already invited you will just see an arrow.
In order to select a server: click on it and you will be sent to the configuration page.

> If your server is not showing up, make sure you are logged into the correct account and have permission to manage the server as described above. Click on the 'Fetch servers' button to reload the server list.


An example of the server page:

<img src='https://i.imgur.com/FmQndU5.png' style={{ borderRadius: '5px' }} />
<br />
<br />

### Configuring QuaBot

To configure the rest of QuaBot, go to one of these pages to configure it:

- [General settings](/docs/dashboard/general) - General settings like embed color, bot language and nickname.
- [Command settings](/docs/dashboard/commands) - Toggle & view all the bot commands.
- [Statistics](/docs/dashboard/statistics) - View statistics about your server.
- [Module settings](/docs/dashboard/modules) - Configure the 15+ modules QuaBot has to offer.
- [Logs](/docs/dashboard/logs) - View the recent changes made on the dashboard.


## Further Questions

Need further help with QuaBot? Join our Discord server and our community will be happy to help, either by text, jumping in a voice channel and more! Join [here](https://discord.quabot.net).