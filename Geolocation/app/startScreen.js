/*
 * JS for startScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '59cd47aa-6959-464f-8303-664abc0a47ee';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}];

function startScreen_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'button_back': 'startScreen_button_back',
        'mobilelist_22': 'startScreen_mobilelist_22',
        'mobilelistitem_23': 'startScreen_mobilelistitem_23',
        'mobilelistitembutton_24': 'startScreen_mobilelistitembutton_24',
        'mobilelistitem_25': 'startScreen_mobilelistitem_25',
        'mobilelistitembutton_26': 'startScreen_mobilelistitembutton_26',
        'mobilelistitem_27': 'startScreen_mobilelistitem_27',
        'mobilelistitembutton_28': 'startScreen_mobilelistitembutton_28',
        'mobilelistitem_29': 'startScreen_mobilelistitem_29',
        'mobilelistitembutton_30': 'startScreen_mobilelistitembutton_30',
        'mobilelistitem_31': 'startScreen_mobilelistitem_31',
        'mobilelistitembutton_32': 'startScreen_mobilelistitembutton_32',
        'mobilelistitem_33': 'startScreen_mobilelistitem_33',
        'mobilelistitembutton_34': 'startScreen_mobilelistitembutton_34',
        'mobilelistitem_35': 'startScreen_mobilelistitem_35',
        'mobilelistitembutton_36': 'startScreen_mobilelistitembutton_36',
        'mobilelistitem_37': 'startScreen_mobilelistitem_37',
        'mobilelistitembutton_38': 'startScreen_mobilelistitembutton_38',
        'mobilelistitem_39': 'startScreen_mobilelistitem_39',
        'mobilelistitembutton_40': 'startScreen_mobilelistitembutton_40'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'startScreen';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var startScreen_onLoad = function() {
            startScreen_elementsExtraJS();

            startScreen_deviceEvents();
            startScreen_windowEvents();
            startScreen_elementsEvents();
        };

    // screen window events


    function startScreen_windowEvents() {

        $('#startScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function startScreen_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function startScreen_elementsExtraJS() {
        // screen (startScreen) extra code

        /* mobilelist_22 */

        listView = $("#startScreen_mobilelist_22");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#startScreen_mobilelist_22 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_23 */

        /* mobilelistitem_25 */

        /* mobilelistitem_27 */

        /* mobilelistitem_29 */

        /* mobilelistitem_31 */

        /* mobilelistitem_33 */

        /* mobilelistitem_35 */

        /* mobilelistitem_37 */

        /* mobilelistitem_39 */

    };

    // screen elements handler


    function startScreen_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#startScreen_mobileheader [name="button_back"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="startScreen_Panel_navbar"]').panel("open");

                }
            },
        }, '#startScreen_mobileheader [name="button_back"]');

    };

    $(document).off("pagebeforeshow", "#startScreen").on("pagebeforeshow", "#startScreen", function(event, ui) {
        Apperyio.CurrentScreen = "startScreen";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    startScreen_onLoad();
};

$(document).off("pagecreate", "#startScreen").on("pagecreate", "#startScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    startScreen_js();
});