# Edge with no Tabs

## Original Mission:
With recent updates to Edge, it appears that any link that used to open in it's own window will now open as a tab in the current window.  This pleases a lot of people but I personally hate tabs when browsing.  Accordingly, I often hold down the Shift key when clicking on a link - as this always opens a new window - but there are times I forget or didn't realized a new tab would open.  Essentially, I wanted to never open a tab and always open a new window no matter what I clicked on so I decided to create an Edge Extension.

## Project Description
This project is a pretty basic Edge Extension that is tasked with one simple job:
* Watch for then new tabs are opened in the current Edge window
* Grabs the URL of this new tab
* Opens a new Edge window with the new URL
* Closes the newly created tab

## Where can I get the compiled version?
You can find it in the Microsoft Store: https://www.microsoft.com/en-us/store/p/edgewithnotabs/9NGFHJ14514L

## What if I want to run a local version?
I'm not going to get into how to build an APPX locally because that requires a lot of different utilities and keys and signing.  I did a quick search online and found a whole bunch of support docs on how to make APPX's and even Edge Extensions as APPX so you should be fine.  That said, Edge will allow to run an Extension even if it hasn't been bundled:
* Open Edge and open the URL about:flags
* Check the checkbox that says "Enable extension developer features"
* Restart Edge
* Open the Extensions panel and you'll find at the bottom a new button "Load extension"
* Point the Load extension dialog to the Extension direction in this repo
* The extension should now be loaded

## What if I want to make changes?
Take a look at the code and make Pull requests!  Always happen to add code here.  I can't promise it will make it into the officially compiled edition but that's always possible.
