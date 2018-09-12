"use strict";



;define('design-app/app', ['exports', 'design-app/resolver', 'ember-load-initializers', 'design-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('design-app/components/app-comp/index-form/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const {
        Component
    } = Ember;

    exports.default = Component.extend({
        init() {
            this._super(...arguments);
        },
        didInsertElement() {
            var menuItems = [].slice.call(document.querySelectorAll('.menu__item')),
                menuSubs = [].slice.call(document.querySelectorAll('.dropdown-menu')),
                selectedMenu = undefined,
                subBg = document.querySelector('.dropdown__bg'),
                subBgBtm = document.querySelector('.dropdown__bg-bottom'),
                subArr = document.querySelector('.dropdown__arrow'),
                subCnt = document.querySelector('.dropdown__wrap'),
                header = document.querySelector('.main-header'),
                closeDropdownTimeout,
                startCloseTimeout = function startCloseTimeout() {
                closeDropdownTimeout = setTimeout(function () {
                    return closeDropdown();
                }, 50);
            },
                stopCloseTimeout = function stopCloseTimeout() {
                clearTimeout(closeDropdownTimeout);
            },
                openDropdown = function openDropdown(el) {

                //- get menu ID
                var menuId = el.getAttribute('data-sub');
                //- get related sub menu
                var menuSub = document.querySelector('.dropdown-menu[data-sub="' + menuId + '"]');
                //- get menu sub content
                var menuSubCnt = menuSub.querySelector('.dropdown-menu__content');
                //- get bottom section of current sub
                var menuSubBtm = menuSubCnt.querySelector('.bottom-section').getBoundingClientRect();
                //- get height of top section
                var menuSubTop = menuSubCnt.querySelector('.top-section').getBoundingClientRect();

                //var minus = ($("body").innerWidth() - $(".container").innerWidth()) / 2;
                var minus = 0;
                //- get menu position
                var menuMeta = el.getBoundingClientRect();
                //- get sub menu position
                var subMeta = menuSubCnt.getBoundingClientRect();

                //- set selected menu
                selectedMenu = menuId;

                //- Remove active Menu
                menuItems.forEach(function (el) {
                    return el.classList.remove('active');
                });
                //- Set current menu to active
                el.classList.add('active');

                //- Remove active sub menu
                menuSubs.forEach(function (el) {
                    return el.classList.remove('active');
                });
                //- Set current menu to active
                menuSub.classList.add('active');

                //- Set dropdown menu background style to match current submenu style
                subBg.style.opacity = 1;
                subBg.style.left = menuMeta.left - minus - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
                subBg.style.width = subMeta.width + 'px';
                subBg.style.height = subMeta.height + 'px';
                //- Set dropdown menu bottom section background position
                subBgBtm.style.top = menuSubTop.height + 'px';
                console.log(menuSubBtm);

                //- Set Arrow position
                subArr.style.opacity = 1;
                subArr.style.left = menuMeta.left - minus + menuMeta.width / 2 - 10 + 'px';

                //- Set sub menu style
                subCnt.style.opacity = 1;
                subCnt.style.left = menuMeta.left - minus - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
                subCnt.style.width = subMeta.width + 'px';
                subCnt.style.height = subMeta.height + 'px';

                //- Set current sub menu style
                menuSub.style.opacity = 1;

                header.classList.add('dropdown-active');
            },
                closeDropdown = function closeDropdown() {

                //- Remove active class from all menu items
                menuItems.forEach(function (el) {
                    return el.classList.remove('active');
                });
                //- Remove active class from all sub menus
                menuSubs.forEach(function (el) {
                    el.classList.remove('active');
                    el.style.opacity = 0;
                });
                //- set sub menu background opacity
                subBg.style.opacity = 0;
                //- set arrow opacity
                subArr.style.opacity = 0;

                // unset selected menu
                selectedMenu = undefined;

                header.classList.remove('dropdown-active');
            };

            //- Binding mouse event to each menu items
            menuItems.forEach(function (el) {

                //- mouse enter event
                el.addEventListener('mouseenter', function () {
                    stopCloseTimeout();
                    openDropdown(this);
                }, false);

                //- mouse leave event
                el.addEventListener('mouseleave', function () {
                    return startCloseTimeout();
                }, false);
            });

            //- Binding mouse event to each sub menus
            menuSubs.forEach(function (el) {

                el.addEventListener('mouseenter', function () {
                    return stopCloseTimeout();
                }, false);
                el.addEventListener('mouseleave', function () {
                    return startCloseTimeout();
                }, false);
            });

            $("#testimonial-slider").owlCarousel({
                items: 1,
                itemsDesktop: [1199, 1],
                itemsDesktopSmall: [979, 1],
                itemsTablet: [768, 1],
                pagination: true,
                autoPlay: true
            });

            $(window).scroll(function () {
                if ($(window).scrollTop() >= 70) {
                    $('header').addClass('nav-sticky');
                } else {
                    $('header').removeClass('nav-sticky');
                }
            });
        }
    });
});
;define("design-app/components/app-comp/index-form/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wfC7cMbI", "block": "{\"symbols\":[],\"statements\":[[7,\"header\"],[11,\"class\",\"main-header main-container\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container-centered\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"style\",\"font-weight:bolder;font-size:24px;\"],[9],[7,\"a\"],[11,\"href\",\"#\"],[9],[0,\"LOGO\"],[10],[10],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"menu align-right\"],[9],[0,\"\\n      \"],[7,\"li\"],[11,\"class\",\"menu__item\"],[11,\"data-sub\",\"product\"],[11,\"style\",\"font-weight:600;\"],[9],[7,\"a\"],[11,\"href\",\"#\"],[9],[0,\"Product\"],[10],[10],[0,\"\\n      \"],[7,\"li\"],[11,\"class\",\"menu__item\"],[11,\"data-sub\",\"developer\"],[11,\"style\",\"font-weight:600;\"],[9],[7,\"a\"],[11,\"href\",\"#\"],[9],[0,\"Developer\"],[10],[10],[0,\"\\n      \"],[7,\"li\"],[11,\"class\",\"menu__item\"],[11,\"data-sub\",\"company\"],[11,\"style\",\"font-weight:600;\"],[9],[7,\"a\"],[11,\"href\",\"#\"],[9],[0,\"Company\"],[10],[10],[0,\"\\n      \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"log-in\"],[9],[0,\"Log in\"],[10],[10],[0,\"\\n      \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"sign-up\"],[9],[0,\"Sign Up\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"dropdown-holder\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"dropdown__arrow\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"dropdown__bg\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"dropdown__bg-bottom\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"dropdown__wrap\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"dropdown-menu\"],[11,\"id\",\"product\"],[11,\"data-sub\",\"product\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"dropdown-menu__content\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"top-section\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-2\"],[9],[0,\"\\n              \"],[7,\"ul\"],[9],[0,\"\\n                \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[0,\"Payment\"],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\" Lorem ipsum dolor sit amet, consectetur adipisicing elit.\"],[10],[10],[10],[0,\"\\n                \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[0,\"Connect\"],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\" consectetur adipisicing elit nesciunt! Assumenda, adipisci.\"],[10],[10],[10],[0,\"\\n                \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[0,\"Atlas\"],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\" ipsum dolor sit amet, consectetur adipisicing elit. .\"],[10],[10],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"ul\"],[9],[0,\"\\n                \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[0,\"Subscription\"],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\" Lorem ipsum dolor sit amet, consectetur \"],[10],[10],[10],[0,\"\\n                \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[0,\"Relay\"],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"  amet, consectetur adipisicing elit. Nisi, sequi!\"],[10],[10],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"bottom-section\"],[9],[0,\"\\n            \"],[7,\"ul\"],[9],[0,\"\\n              \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Payment\"],[10],[10],[0,\"\\n              \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Connect\"],[10],[10],[0,\"\\n              \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Atlas\"],[10],[10],[0,\"\\n              \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Connect\"],[10],[10],[0,\"\\n              \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Atlas\"],[10],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"dropdown-menu\"],[11,\"id\",\"developer\"],[11,\"data-sub\",\"developer\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"dropdown-menu__content\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"top-section\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-2\"],[9],[0,\"\\n              \"],[7,\"div\"],[9],[0,\"\\n                \"],[7,\"h2\"],[11,\"class\",\"menu-title\"],[9],[0,\"Front End\"],[10],[0,\"\\n                \"],[7,\"ul\"],[9],[0,\"\\n                  \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Payment\"],[10],[10],[0,\"\\n                  \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Connect\"],[10],[10],[0,\"\\n                  \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Atlas\"],[10],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[9],[0,\"\\n                \"],[7,\"h2\"],[11,\"class\",\"menu-title\"],[9],[0,\"Back End\"],[10],[0,\"\\n                \"],[7,\"ul\"],[9],[0,\"\\n                  \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Payment\"],[10],[10],[0,\"\\n                  \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Connect\"],[10],[10],[0,\"\\n                  \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Atlas\"],[10],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"bottom-section info\"],[9],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit totam officia molestias\"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"dropdown-menu\"],[11,\"data-sub\",\"company\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"dropdown-menu__content\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"top-section\"],[9],[0,\"\\n            \"],[7,\"ul\"],[9],[0,\"\\n              \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Payment\"],[10],[10],[0,\"\\n              \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Connect\"],[10],[10],[0,\"\\n              \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"\"],[9],[0,\"Atlas\"],[10],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"bottom-section\"],[9],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"__section bg-primary\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container-centered\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"A new product for designing your ideas\"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"vision-text\"],[9],[0,\"We believe that we are on the face of the earth to make great products and that’s not changing. We are constantly focusing on innovating. We believe in the simple not the complex.\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"__section container-centered\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-12\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-offset-1 col-sm-10\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"id\",\"testimonial-slider\"],[11,\"class\",\"owl-carousel\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"testimonial\"],[9],[0,\"\\n                        \"],[7,\"p\"],[11,\"class\",\"description\"],[9],[0,\"\\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec velit dui. Pellentesque volutpat faucibus risus, ac accumsan purus.\\n                        \"],[10],[0,\"\\n \\n                        \"],[7,\"div\"],[11,\"class\",\"testimonial-review\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"pic\"],[9],[0,\"\\n                                \"],[7,\"span\"],[11,\"class\",\"Name-Icon\"],[9],[0,\"W\"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                            \"],[7,\"h4\"],[11,\"class\",\"testimonial-title\"],[9],[0,\"\\n                                williamson\\n                                \"],[7,\"small\"],[9],[0,\"Web Developer\"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n \\n                    \"],[7,\"div\"],[11,\"class\",\"testimonial\"],[9],[0,\"\\n                        \"],[7,\"p\"],[11,\"class\",\"description\"],[9],[0,\"\\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec velit dui. Pellentesque volutpat faucibus risus, ac accumsan purus.\\n                        \"],[10],[0,\"\\n \\n                        \"],[7,\"div\"],[11,\"class\",\"testimonial-review\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"pic\"],[9],[0,\"\\n                                \"],[7,\"span\"],[11,\"class\",\"Name-Icon\"],[9],[0,\"K\"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                            \"],[7,\"h4\"],[11,\"class\",\"testimonial-title\"],[9],[0,\"\\n                                kristiana\\n                                \"],[7,\"small\"],[9],[0,\"Web Desginer\"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"footer\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container-centered\"],[9],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n      \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#\"],[9],[0,\"Terms and Conditions\"],[10],[10],[0,\"\\n      \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#\"],[9],[0,\"Privacy Notice\"],[10],[10],[0,\"\\n      \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#\"],[9],[0,\"About\"],[10],[10],[0,\"\\n      \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#\"],[9],[0,\"Contact Us\"],[10],[10],[0,\"\\n    \"],[10],[0,\" \\n    \"],[7,\"p\"],[11,\"class\",\"footer-copyrights-text\"],[9],[0,\"Copyright © XXX Inc. All Rights Reserved\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "design-app/components/app-comp/index-form/template.hbs" } });
});
;define('design-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('design-app/helpers/app-version', ['exports', 'design-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('design-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('design-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('design-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'design-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('design-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('design-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('design-app/initializers/export-application-global', ['exports', 'design-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define("design-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('design-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('design-app/router', ['exports', 'design-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
;define('design-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("design-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ootNPIsn", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[9],[0,\"\\n\"],[1,[21,\"app-comp/index-form\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "design-app/templates/application.hbs" } });
});
;

;define('design-app/config/environment', [], function() {
  var prefix = 'design-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("design-app/app")["default"].create({"name":"design-app","version":"0.0.0+cb69eb33"});
          }
        
//# sourceMappingURL=design-app.map
