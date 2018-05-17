// used when adding a new tab
function handleCreated(tab) {
    // ignore the first tab in each window
    if (tab.index === 0)  {
        return;
    }
}

// used when clicking on a link on a page (it has to load first)
function handleUpdated(tabId, changeInfo, tab) {
    // ignore the first tab in each window
    //Note that the tab's URL may not be given its final value at the time this event fired. 
    //In particular, Edge opens a new tab with the URL "about:blank" before loading the new page into it
    if (tab.index === 0 || tab.url === "about:blank")  {
        return;
    }

    // open the current URL in the new window
    browser.windows.create({ url: tab.url });

    // close the current tab in the current window
    browser.tabs.remove(tab.id);
}

function handleAttached(tabId, attachInfo) {
    if (tab.index === 0) {
        return;
    }
   else { 
        //Open this tab in new window
        browser.tabs.get(tabId, function(tab) {
            handleUpdated(tabId, "", tab)
        });   
    }
}

browser.tabs.onCreated.addListener(handleCreated);
browser.tabs.onUpdated.addListener(handleUpdated);
browser.tabs.onAttached.addListener(handleAttached);