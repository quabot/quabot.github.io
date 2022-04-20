# Tickets Module

> Last edited: 1/23/2022 at 12:21AM

QuaBot has an advanced tickets system, operated with buttons, fully database based. In this article i will explain how you set it up, some important things to note and some more things.

### How does it work?
The bot searches for the Closed tickets and opened tickets category, more info on those later, and will create a channel with the name #ticket-id (id being the actual ticket id.). It has a system with buttons, to close the ticket. Once it's closed, the user will be locked out of the ticket. They can reopen the ticket, delete it, and download the transcript when the ticket is closed.

### Setup
The module is enabled by default, and the default category names are Tickets and Closed Tickets. In order to make sure nobody sees the tickets, setup the category permissions how you want them to be: Support roles can see them; regular members can't. When tickets are created they will be given those permissions, and add the user to it. To change the category names, do `/config`, and go to the Change Channels section. If the bot cannot find the categories, it will create them. 
> [!ATTENTION]
> We have disabled the feature to create static ticket messages, it will be re-added later.

### Things to know
* When a ticket is reopened, any users added with `add` will not be re-added, this is scheduled but not inplemented.
* Transcripts are not logged automatically, this will be changed in the 2.1 release.
* Any user can manage anyone's ticket, so make sure you setup your permissions correctly.
* It is impossible to use `/delete` or `/close` outside of tickets, so don't worry.
* First time using tickets will give an error, that is normal and is a sign that the database was updated.

*If you still have questions, or are experiencing errors, go to our [Support Discord](https://discord.quabot.net).*