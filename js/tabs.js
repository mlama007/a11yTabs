(function () {
  var tablist = $('[role="tablist"]')[0],
    tab = $('[role="tab"]'),
    tabpanels = $('[role="tabpanel"]');

  // Add aria attributes, tabindex and hidden attributes
  tab
    .attr('aria-selected', 'false')
    .attr('tabindex', '-1')
    .first()
      .attr('aria-selected', 'true')
      .attr('tabindex', '0');
  
  tabpanels
    .attr('tabindex', '-1')
    .attr('aria-expanded', 'false')
    .attr('aria-hidden', 'true')
    .attr('hidden', 'hidden')
    .first()
      .attr('tabindex', '0')
      .attr('aria-expanded', 'true')
      .attr('aria-hidden', 'false')
      .removeAttr('hidden');

  // Add controls and ids
  tab.each(function onEachTab(idx, el) {
    var eachTab = $(el),
      tabId = 'tabID' + idx,
      panelId = 'panelId' + idx;

    eachTab
      .attr('id', tabId)
      .attr('aria-controls', panelId);

    tabpanels.eq(idx)
      .attr('id', panelId)
      .attr('aria-labelledby', tabId);
  });

  tab.click(function(event) {
    focusTab($(event.currentTarget));
    event.preventDefault(); 
  });


  // Unselect active tab, select the new tab, show panel
  var focusTab = function(newTab) {
    var oldTab = $(tablist).find('[aria-selected=true]');

    // Unselect active tab
    oldTab
      .attr('aria-selected', 'false')
      .attr('tabindex', '-1');

    // Hide active panel
    $("#" + oldTab.attr("aria-controls"))
      .attr('tabindex', '-1')
      .attr('aria-expanded', 'false')
      .attr('aria-hidden', 'true')
      .attr('hidden', 'hidden');

    // Select the new tab
    newTab
      .attr('aria-selected', 'true')
      .attr('tabindex', '0');

    // Show the controlled panel 
    $("#" + newTab.attr("aria-controls"))
      .attr('tabindex', '0')
      .attr('aria-expanded', 'true')
      .attr('aria-hidden', 'false')
      .removeAttr('hidden');
    
    newTab.focus();
  };

    // Capture key events on tabs
  $(tablist).find("[role='tab']").keydown(function(event) {
    var firstTab = $(event.currentTarget).siblings().first(),
      lastTab = $(event.currentTarget).siblings().last(),
      prevTab = $(event.currentTarget).prev(),
      nextTab = $(event.currentTarget).next();

    // left arrow key
    if (event.which === 37) {
      if (prevTab.length > 0) {
        focusTab(prevTab);
        event.preventDefault();
      }
      else{
        focusTab(lastTab);
        event.preventDefault();
      }
    }
    // right arrow key
    else if (event.which === 39) {
      if (nextTab.length > 0) {
        focusTab(nextTab);
        event.preventDefault();
      }
      else{
        focusTab(firstTab);
        event.preventDefault();
      }
    }
    // home key
    else if (event.which === 36) {
      focusTab(firstTab);
      event.preventDefault();
    }
    // end key
    else if (event.which === 35) {
      focusTab(lastTab);
      event.preventDefault();
    }

  });
}());