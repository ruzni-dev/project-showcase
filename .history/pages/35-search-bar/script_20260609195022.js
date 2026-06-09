function searchTagList(obj, ev) {
    var container = $(obj).closest('.search-weapon');
    if (!container.hasClass('active')) {
        container.addClass('active');
        ev.preventDefault();
    }
    else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
        container.removeClass('active');
        container.find('.search-input').val('');
    }
}

// Note: This requires jQuery to be loaded before this script