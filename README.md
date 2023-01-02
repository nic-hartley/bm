# userscripts

A collection of bookmarklets.
Each has:

- Autoupdates, so you get the latest version every time you run it
- Its full source code right here in this repo
- No dependencies and simple, vanilla JS for rapid loading

## Installation

Each item's header is a link. If you right-click that link, you should see an option to bookmark it. You can then run the bookmarklet from your bookmarks bar, and it should apply to whatever page you're looking at.

# [CCdel](javascript:fetch%28%22https%3A%2F%2Fgithub.com%2Fnic-hartley%2Fuserscripts%2Fblob%2Frelease%2FREADME.md%22%29.then%28r%3D%3Er.body%28%29%29.then%28b%3D%3Eeval%28b%29%29)

Deletes the constant barrage of "(user) redeemed (n) Crowd Control Coins" from popular streams that use it. Doesn't touch any other messages, redeems, etc, just the Crowd Control ones.

The way this works is by finding and deleting them, around 10 times a second. Because of that you may see the messages flickering. This is fixable, but not without a *lot* more code that I just don't feel like writing. Sorry if it bothers you.
