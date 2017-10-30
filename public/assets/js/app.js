webpackJsonp([1],{

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_vue@2.4.4@vue/dist/vue.common.js
var vue_common = __webpack_require__(1);
var vue_common_default = /*#__PURE__*/__webpack_require__.n(vue_common);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/components/layouts/Sidebar.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Sidebar = ({
  name: 'v-sideBar',
  components: {},
  props: ['collapse'],
  computed: {},
  data: function data() {
    return {
      defaultActive: ''
    };
  },
  created: function created() {},

  methods: {},
  mounted: function mounted() {
    this.defaultActive = this.$route.path;
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-2ed21d08","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/components/layouts/Sidebar.vue
var Sidebar_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-menu",
    {
      staticClass: "sidebar",
      attrs: {
        theme: "dark",
        collapse: _vm.collapse,
        "default-active": _vm.defaultActive,
        router: true
      }
    },
    [
      _c("el-menu-item", { attrs: { index: "/" } }, [
        _c("i", { staticClass: "el-icon-menu" }),
        _vm._v(" "),
        _c("span", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("首页")])
      ]),
      _vm._v(" "),
      _c(
        "el-submenu",
        { attrs: { index: "1" } },
        [
          _c("template", { attrs: { slot: "title" }, slot: "title" }, [
            _c("i", { staticClass: "el-icon-picture" }),
            _vm._v(" "),
            _c("span", { attrs: { slot: "title" }, slot: "title" }, [
              _vm._v("图片")
            ])
          ]),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "/image/loop" } }, [
            _vm._v("首页轮播")
          ]),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "/image/banner" } }, [
            _vm._v("banner图")
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "el-submenu",
        { attrs: { index: "2" } },
        [
          _c("template", { attrs: { slot: "title" }, slot: "title" }, [
            _c("i", { staticClass: "el-icon-star-on" }),
            _vm._v(" "),
            _c("span", { attrs: { slot: "title" }, slot: "title" }, [
              _vm._v("番剧")
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-menu-item-group",
            { attrs: { title: "番剧" } },
            [
              _c("el-menu-item", { attrs: { index: "/bangumi/list" } }, [
                _vm._v("番剧列表")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-menu-item-group",
            { attrs: { title: "标签" } },
            [
              _c("el-menu-item", { attrs: { index: "/bangumi/tag" } }, [
                _vm._v("标签列表")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-menu-item-group",
            { attrs: { title: "合集" } },
            [
              _c("el-menu-item", { attrs: { index: "/bangumi/collection" } }, [
                _vm._v("合集列表")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-menu-item-group",
            { attrs: { title: "视频" } },
            [
              _c("el-menu-item", { attrs: { index: "/bangumi/video" } }, [
                _vm._v("视频列表")
              ])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "el-submenu",
        { attrs: { index: "3" } },
        [
          _c("template", { attrs: { slot: "title" }, slot: "title" }, [
            _c("i", { staticClass: "el-icon-setting" }),
            _vm._v(" "),
            _c("span", { attrs: { slot: "title" }, slot: "title" }, [
              _vm._v("设置")
            ])
          ]),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "/admin/user" } }, [
            _vm._v("管理员")
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
Sidebar_render._withStripped = true
var esExports = { render: Sidebar_render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layouts_Sidebar = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2ed21d08", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/components/layouts/Sidebar.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(38)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2ed21d08"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Sidebar,
  layouts_Sidebar,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/components/layouts/Sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Sidebar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ed21d08", Component.options)
  } else {
    hotAPI.reload("data-v-2ed21d08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_layouts_Sidebar = (Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/components/layouts/Header.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Header = ({
  name: 'v-header',
  components: {},
  props: ['collapse'],
  watch: {
    '$route': function $route(router) {
      this.breadcrumb = router.name;
    }
  },
  computed: {},
  data: function data() {
    return {
      breadcrumb: this.$route.name
    };
  },
  created: function created() {},

  methods: {
    toggleCollapse: function toggleCollapse() {
      this.$emit('update:collapse', !this.collapse);
    },
    logout: function logout() {
      this.$http.post('/auth/logout').then(function () {
        return window.location = '/';
      });
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-0c1017c6","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/components/layouts/Header.vue
var Header_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-menu",
    {
      staticClass: "header",
      class: { "header-collapse": _vm.collapse },
      attrs: { mode: "horizontal" }
    },
    [
      _c("el-menu-item", { attrs: { index: "0" } }, [
        _c("button", {
          staticClass: "collapse-btn",
          class: [
            _vm.collapse ? "el-icon-d-arrow-right" : "el-icon-d-arrow-left"
          ],
          on: { click: _vm.toggleCollapse }
        })
      ]),
      _vm._v(" "),
      _c("span", {
        staticClass: "breadcrumb",
        domProps: { textContent: _vm._s(_vm.breadcrumb) }
      }),
      _vm._v(" "),
      _c(
        "el-submenu",
        { staticClass: "user-panel", attrs: { index: "9" } },
        [
          _c("template", { attrs: { slot: "title" }, slot: "title" }, [
            _c("img", {
              staticClass: "avatar",
              attrs: { src: __webpack_require__(40), alt: "avatar" }
            })
          ]),
          _vm._v(" "),
          _c(
            "el-menu-item",
            { attrs: { index: "9-1" }, on: { click: _vm.logout } },
            [_vm._v("退出")]
          )
        ],
        2
      )
    ],
    1
  )
}
var Header_staticRenderFns = []
Header_render._withStripped = true
var Header_esExports = { render: Header_render, staticRenderFns: Header_staticRenderFns }
/* harmony default export */ var layouts_Header = (Header_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0c1017c6", Header_esExports)
  }
}
// CONCATENATED MODULE: ./frontend/components/layouts/Header.vue
var Header_disposed = false
function Header_injectStyle (ssrContext) {
  if (Header_disposed) return
  __webpack_require__(39)
}
var Header_normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var Header___vue_styles__ = Header_injectStyle
/* scopeId */
var Header___vue_scopeId__ = "data-v-0c1017c6"
/* moduleIdentifier (server only) */
var Header___vue_module_identifier__ = null
var Header_Component = Header_normalizeComponent(
  Header,
  layouts_Header,
  Header___vue_styles__,
  Header___vue_scopeId__,
  Header___vue_module_identifier__
)
Header_Component.options.__file = "frontend/components/layouts/Header.vue"
if (Header_Component.esModule && Object.keys(Header_Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Header_Component.options.functional) {console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c1017c6", Header_Component.options)
  } else {
    hotAPI.reload("data-v-0c1017c6", Header_Component.options)
  }
  module.hot.dispose(function (data) {
    Header_disposed = true
  })
})()}

/* harmony default export */ var components_layouts_Header = (Header_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/app.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var app = ({
  name: 'v-index',
  components: {
    vHeader: components_layouts_Header, vSideBar: components_layouts_Sidebar
  },
  props: {},
  watch: {},
  computed: {},
  data: function data() {
    return {
      isCollapse: false
    };
  },

  methods: {},
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-ed47791c","hasScoped":false}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/app.vue
var app_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "__orz" } },
    [
      _c("v-header", {
        attrs: { collapse: _vm.isCollapse },
        on: {
          "update:collapse": function($event) {
            _vm.isCollapse = $event
          }
        }
      }),
      _vm._v(" "),
      _c("v-side-bar", { attrs: { collapse: _vm.isCollapse } }),
      _vm._v(" "),
      _c("router-view", {
        staticClass: "view",
        class: { "view-collapse": _vm.isCollapse }
      })
    ],
    1
  )
}
var app_staticRenderFns = []
app_render._withStripped = true
var app_esExports = { render: app_render, staticRenderFns: app_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_frontend_app = (app_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ed47791c", app_esExports)
  }
}
// CONCATENATED MODULE: ./frontend/app.vue
var app_disposed = false
function app_injectStyle (ssrContext) {
  if (app_disposed) return
  __webpack_require__(36)
}
var app_normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var app___vue_styles__ = app_injectStyle
/* scopeId */
var app___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var app___vue_module_identifier__ = null
var app_Component = app_normalizeComponent(
  app,
  selectortype_template_index_0_frontend_app,
  app___vue_styles__,
  app___vue_scopeId__,
  app___vue_module_identifier__
)
app_Component.options.__file = "frontend/app.vue"
if (app_Component.esModule && Object.keys(app_Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (app_Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed47791c", app_Component.options)
  } else {
    hotAPI.reload("data-v-ed47791c", app_Component.options)
  }
  module.hot.dispose(function (data) {
    app_disposed = true
  })
})()}

/* harmony default export */ var frontend_app = (app_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vue-router@2.7.0@vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(19);

// CONCATENATED MODULE: ./frontend/router/index.js



vue_common_default.a.use(vue_router_esm["default"]);

/* harmony default export */ var router = (new vue_router_esm["default"]({
  mode: 'hash',
  scrollBehavior: function scrollBehavior() {
    return { y: 0 };
  },
  routes: [{
    path: '/',
    name: '首页',
    component: __webpack_require__(41).default
  }, {
    path: '/image/loop',
    name: '首页轮播',
    component: __webpack_require__(43).default
  }, {
    path: '/image/banner',
    name: 'banner 图',
    component: __webpack_require__(45).default
  }, {
    path: '/bangumi/list',
    name: '番剧列表',
    component: __webpack_require__(46).default
  }, {
    path: '/bangumi/tag',
    name: '番剧标签',
    component: __webpack_require__(47).default
  }, {
    path: '/bangumi/collection',
    name: '番剧合集',
    component: __webpack_require__(48).default
  }, {
    path: '/bangumi/video',
    name: '番剧视频',
    component: __webpack_require__(49).default
  }, {
    path: '/admin/user',
    name: '管理员',
    component: __webpack_require__(50).default
  }]
}));
// EXTERNAL MODULE: ./node_modules/_vuex@2.4.1@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(20);

// CONCATENATED MODULE: ./frontend/store/index.js



vue_common_default.a.use(vuex_esm["default"]);

/* harmony default export */ var store = (new vuex_esm["default"].Store({
  state: {
    login: null
  },

  mutations: {
    SET_LOGIN: function SET_LOGIN(state, _ref) {
      var bool = _ref.bool;

      state.login = bool;
    }
  },

  actions: {
    setLogin: function setLogin(_ref2, _ref3) {
      var commit = _ref2.commit;
      var bool = _ref3.bool;

      commit('SET_LOGIN', { bool: bool });
    }
  },

  getters: {
    isLogin: function isLogin(state) {
      return state.login;
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/_axios@0.16.2@axios/index.js
var _axios_0_16_2_axios = __webpack_require__(51);
var _axios_0_16_2_axios_default = /*#__PURE__*/__webpack_require__.n(_axios_0_16_2_axios);

// CONCATENATED MODULE: ./frontend/utils/api.js


var http = _axios_0_16_2_axios_default.a.create({
  headers: {
    'Accept': 'application/json',
    'X-CSRF-TOKEN': document.getElementById('_csrf') && document.getElementById('_csrf').getAttribute('content')
  },
  timeout: 10000
});

http.interceptors.request.use(function (config) {
  return document.getElementById('__orz') ? config : null;
});

http.interceptors.response.use(function (res) {
  return res && res.data;
}, function (err) {
  if (err.response && err.response.status === 401) {
    alert('登录超时，请重新登录');
    window.location = '/';
    return;
  }
  return err.response ? Promise.reject(err.response.data) : Promise.reject(err);
});

/* harmony default export */ var api = (http);
// EXTERNAL MODULE: ./node_modules/_deep-assign@2.0.0@deep-assign/index.js
var _deep_assign_2_0_0_deep_assign = __webpack_require__(70);
var _deep_assign_2_0_0_deep_assign_default = /*#__PURE__*/__webpack_require__.n(_deep_assign_2_0_0_deep_assign);

// CONCATENATED MODULE: ./frontend/utils/helpers.js


var Helpers = {};

Helpers.install = function (Vue, options) {
  Vue.prototype.$http = api;

  Vue.prototype.$deepAssign = _deep_assign_2_0_0_deep_assign_default.a;

  Vue.prototype.$resize = function (url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (url === '') {
      return '';
    }
    var canUseWebP = function canUseWebP() {
      if (Vue.prototype.$isServer) {
        return false;
      }
      if (window.supportWebP !== undefined) {
        return window.supportWebP;
      }

      var elem = document.createElement('canvas');

      if (elem.getContext && elem.getContext('2d')) {
        var support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        window.supportWebP = support;
        return support;
      }

      return false;
    };

    var format = canUseWebP() ? '/format/webp' : '';

    if (options.width && options.width > 0) {
      var width = '/w/' + options.width;
      var mode = options.mode === undefined ? 1 : options.mode;
      var height = options.height ? '/h/' + options.height : mode === 1 ? '/h/' + options.width : '';

      return url + '?imageMogr2/auto-orient/strip|imageView2/' + mode + width + height + format;
    }
    return url + '?imageMogr2/auto-orient/strip' + format;
  };
};

/* harmony default export */ var helpers = (Helpers);
// EXTERNAL MODULE: ./node_modules/_element-ui@1.4.6@element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__(72);
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/components/modal.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var modal = ({
  name: 'v-modal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: true
    },
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    },
    submitText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    headerText: {
      type: String,
      default: '标题'
    }
  },
  watch: {
    toggle: function toggle(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      this.toggle = val;
    }
  },
  data: function data() {
    return {
      toggle: this.value
    };
  },

  methods: {
    handleClose: function handleClose() {
      this.toggle = false;
    },
    handleSubmit: function handleSubmit() {
      this.$emit('submit');
    },
    handleCancel: function handleCancel() {
      this.$emit('cancel');
      this.handleClose();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-42a5a873","hasScoped":false}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/components/modal.vue
var modal_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _vm.toggle
      ? _c("section", { staticClass: "v-modal-wrap" }, [
          _c("div", {
            staticClass: "v-modal-mask",
            on: { click: _vm.handleClose }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "v-modal", on: { click: function($event) {} } },
            [
              _vm.header
                ? _c(
                    "header",
                    [
                      _vm._t("header", [
                        _c("h4", {
                          domProps: { textContent: _vm._s(_vm.headerText) }
                        }),
                        _vm._v(" "),
                        _vm.close
                          ? _c(
                              "a",
                              {
                                staticClass: "close",
                                on: { click: _vm.handleClose }
                              },
                              [_vm._v("×")]
                            )
                          : _vm._e()
                      ])
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("main", [_vm._t("default")], 2),
              _vm._v(" "),
              _vm.footer
                ? _c(
                    "footer",
                    [
                      _vm._t("footer", [
                        _c("button", {
                          staticClass: "submit",
                          domProps: { textContent: _vm._s(_vm.submitText) },
                          on: { click: _vm.handleSubmit }
                        }),
                        _vm._v(" "),
                        _c("button", {
                          staticClass: "cancel",
                          domProps: { textContent: _vm._s(_vm.cancelText) },
                          on: { click: _vm.handleCancel }
                        })
                      ])
                    ],
                    2
                  )
                : _vm._e()
            ]
          )
        ])
      : _vm._e()
  ])
}
var modal_staticRenderFns = []
modal_render._withStripped = true
var modal_esExports = { render: modal_render, staticRenderFns: modal_staticRenderFns }
/* harmony default export */ var components_modal = (modal_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-42a5a873", modal_esExports)
  }
}
// CONCATENATED MODULE: ./frontend/components/modal.vue
var modal_disposed = false
function modal_injectStyle (ssrContext) {
  if (modal_disposed) return
  __webpack_require__(113)
}
var modal_normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var modal___vue_styles__ = modal_injectStyle
/* scopeId */
var modal___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var modal___vue_module_identifier__ = null
var modal_Component = modal_normalizeComponent(
  modal,
  components_modal,
  modal___vue_styles__,
  modal___vue_scopeId__,
  modal___vue_module_identifier__
)
modal_Component.options.__file = "frontend/components/modal.vue"
if (modal_Component.esModule && Object.keys(modal_Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (modal_Component.options.functional) {console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42a5a873", modal_Component.options)
  } else {
    hotAPI.reload("data-v-42a5a873", modal_Component.options)
  }
  module.hot.dispose(function (data) {
    modal_disposed = true
  })
})()}

/* harmony default export */ var frontend_components_modal = (modal_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vee-validate@2.0.0-rc.18@vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__(114);

// CONCATENATED MODULE: ./frontend/utils/validate.js
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




var config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'vee-fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  classes: true,
  classNames: {
    touched: 'focus', // the control has been blurred
    untouched: 'blur', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: true,
  aria: false
};

vue_common_default.a.use(vee_validate_esm["a" /* default */], config);

vee_validate_esm["a" /* default */].Validator.extend('nickname', function (value, _ref) {
  var _ref2 = _slicedToArray(_ref, 1),
      range = _ref2[0];

  var result = value.replace(/([\u4e00-\u9fa5])/g, 'aa').trim().length;
  var length = range.split('-');
  return result >= length[0] && result <= length[1];
});

vee_validate_esm["a" /* default */].Validator.extend('len', function (value, len) {
  var result = value.trim().length;
  return result === parseInt(len[0], 10);
});
// EXTERNAL MODULE: ./node_modules/_lodash@4.17.4@lodash/lodash.js
var lodash = __webpack_require__(115);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// CONCATENATED MODULE: ./frontend/entry.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return entry_app; });










vue_common_default.a.use(element_ui_common_default.a);
vue_common_default.a.use(helpers);
vue_common_default.a.component(frontend_components_modal.name, frontend_components_modal);

var entry_app = new vue_common_default.a({
  router: router,
  store: store,
  render: function render(h) {
    return h(frontend_app);
  }
}).$mount('#app');

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/index.vue
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var views = ({
  name: 'v-page-index',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {},
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-46e31642","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/index.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h1", [_vm._v("index page")])])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_frontend_views = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-46e31642", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/index.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-46e31642"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  views,
  selectortype_template_index_0_frontend_views,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46e31642", Component.options)
  } else {
    hotAPI.reload("data-v-46e31642", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var frontend_views = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/image/loop.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaultCreateForm = {
  url: '',
  userId: '',
  bangumiId: ''
};
/* harmony default export */ var loop = ({
  name: 'v-page-image-loop',
  computed: {
    filter: function filter() {
      var begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
      return _.orderBy(this.list, 'created_at', 'desc').slice(begin, begin + this.pagination.pageSize);
    }
  },
  data: function data() {
    return {
      list: [],
      pagination: {
        totalPage: 0,
        pageSize: 12,
        curPage: 1
      },
      showCreateModal: false,
      createForm: defaultCreateForm,
      uploadHeaders: {
        token: '',
        key: ''
      }
    };
  },
  created: function created() {
    this.getLoops();
    this.getUptoken();
  },

  methods: {
    getLoops: function getLoops() {
      var _this = this;

      this.$http.get('/image/loop/list').then(function (data) {
        _this.pagination.totalPage = data.length;
        _this.list = data.map(function (item) {
          item.use = !item.deleted_at;
          return item;
        });
      });
    },
    getUptoken: function getUptoken() {
      var _this2 = this;

      this.$http.get('/image/uptoken').then(function (token) {
        _this2.uploadHeaders.token = token;
      });
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pagination.pageSize = val;
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pagination.curPage = val;
    },
    handleSwitch: function handleSwitch(item, index) {
      var _this3 = this;

      this.$confirm('确认要执行该操作吗?', '提示').then(function () {
        _this3.$http.post('/image/loop/toggle', {
          id: item.id,
          isDelete: !item.deleted_at
        }).then(function () {
          _this3.$message.success('操作成功');
        }).catch(function () {
          _this3.$message.error('操作失败');
          _this3.list[index + (_this3.pagination.curPage - 1) * _this3.pagination.pageSize].use = !item.deleted_at;
        });
      }).catch(function () {
        _this3.list[index + (_this3.pagination.curPage - 1) * _this3.pagination.pageSize].use = !item.deleted_at;
      });
    },
    beforeUpload: function beforeUpload(file) {
      var isFormat = file.type === 'image/jpeg' || file.type === 'image/png';
      var isLt2M = file.size / 1024 / 1024 < 2;

      if (!isFormat) {
        this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      this.uploadHeaders.key = 'loop/' + new Date().getTime() + '/' + Math.random().toString(36).substring(3, 6);
      return isFormat && isLt2M;
    },
    handleCreateLoopSuccess: function handleCreateLoopSuccess(res, file) {
      this.createForm.url = res.key;
    },
    saveLoop: function saveLoop() {
      var _this4 = this;

      this.$validator.validateAll('create-loop').then(function (result) {
        if (result) {
          _this4.$http.post('/image/loop/create', {
            url: _this4.createForm.url,
            bangumi_id: _this4.createForm.bangumi_id,
            user_id: _this4.createForm.user_id
          }).then(function (id) {
            _this4.list.unshift({
              id: id,
              url: _this4.createForm.url,
              bangumi_id: _this4.createForm.bangumi_id,
              user_id: _this4.createForm.user_id,
              use: true
            });
            _this4.createForm = defaultCreateForm;
            _this4.$message.success('操作成功');
          }).catch(function () {
            _this4.$message.error('操作失败');
          });
        } else {
          _this4.$message.warning('请先上传图片');
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-27456ed0","hasScoped":true}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/image/loop.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "header",
        [
          _c(
            "el-button",
            {
              attrs: { type: "primary", icon: "plus", size: "large" },
              on: {
                click: function($event) {
                  _vm.showCreateModal = true
                }
              }
            },
            [_vm._v("添加图片")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-view" },
        _vm._l(_vm.filter, function(item, index) {
          return _c("div", { staticClass: "loop" }, [
            _c("img", {
              attrs: {
                src: _vm.$resize(item.url, { width: 280, height: 173 }),
                alt: "loop"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "control" },
              [
                _c("el-switch", {
                  attrs: { "on-text": "", "off-text": "" },
                  on: {
                    change: function($event) {
                      _vm.handleSwitch(item, index)
                    }
                  },
                  model: {
                    value: item.use,
                    callback: function($$v) {
                      item.use = $$v
                    },
                    expression: "item.use"
                  }
                })
              ],
              1
            )
          ])
        })
      ),
      _vm._v(" "),
      _c(
        "v-modal",
        {
          attrs: { "header-text": "首页轮播图上传" },
          on: { submit: _vm.saveLoop },
          model: {
            value: _vm.showCreateModal,
            callback: function($$v) {
              _vm.showCreateModal = $$v
            },
            expression: "showCreateModal"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.createForm } },
            [
              _c(
                "el-col",
                { attrs: { span: 11 } },
                [
                  _c(
                    "el-form-item",
                    { attrs: { label: "番剧id", "label-width": "60px" } },
                    [
                      _c("el-input", {
                        attrs: { name: "bangumi_id", "auto-complete": "off" },
                        model: {
                          value: _vm.createForm.bangumiId,
                          callback: function($$v) {
                            _vm.createForm.bangumiId =
                              typeof $$v === "string" ? $$v.trim() : $$v
                          },
                          expression: "createForm.bangumiId"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 11, offset: 1 } },
                [
                  _c(
                    "el-form-item",
                    { attrs: { label: "用户id", "label-width": "60px" } },
                    [
                      _c("el-input", {
                        attrs: { name: "user_id", "auto-complete": "off" },
                        model: {
                          value: _vm.createForm.userId,
                          callback: function($$v) {
                            _vm.createForm.userId =
                              typeof $$v === "string" ? $$v.trim() : $$v
                          },
                          expression: "createForm.userId"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 21 } },
                [
                  _c(
                    "el-form-item",
                    { attrs: { label: "资源", "label-width": "60px" } },
                    [
                      _c(
                        "el-input",
                        {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: {
                                rules: "required",
                                scope: "create-loop"
                              },
                              expression:
                                "{\n                      rules: 'required',\n                      scope: 'create-loop'\n                    }"
                            }
                          ],
                          attrs: { name: "url", "auto-complete": "off" },
                          model: {
                            value: _vm.createForm.url,
                            callback: function($$v) {
                              _vm.createForm.url =
                                typeof $$v === "string" ? $$v.trim() : $$v
                            },
                            expression: "createForm.url"
                          }
                        },
                        [
                          _c(
                            "template",
                            { attrs: { slot: "prepend" }, slot: "prepend" },
                            [_vm._v("https://cdn.riuir.com/")]
                          )
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 2, offset: 1 } },
                [
                  _c(
                    "el-form-item",
                    [
                      _c(
                        "el-upload",
                        {
                          attrs: {
                            action: "http://up.qiniu.com",
                            data: _vm.uploadHeaders,
                            "show-file-list": false,
                            "on-success": _vm.handleCreateLoopSuccess,
                            "before-upload": _vm.beforeUpload
                          }
                        },
                        [_c("i", { staticClass: "el-icon-plus" })]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "footer",
        [
          _c("el-pagination", {
            attrs: {
              layout: "total, sizes, prev, pager, next, jumper",
              "current-page": _vm.pagination.curPage,
              "page-sizes": [12, 24, 48],
              "page-size": _vm.pagination.pageSize,
              pageCount: _vm.pagination.totalPage,
              total: _vm.list.length
            },
            on: {
              "size-change": _vm.handleSizeChange,
              "current-change": _vm.handleCurrentChange
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var image_loop = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-27456ed0", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/image/loop.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-27456ed0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  loop,
  image_loop,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/image/loop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27456ed0", Component.options)
  } else {
    hotAPI.reload("data-v-27456ed0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var views_image_loop = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/image/banner.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var banner = ({
  name: 'v-',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {},
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-2f659620","hasScoped":false}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/image/banner.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c(
      "header",
      [
        _c(
          "el-col",
          { attrs: { span: 8 } },
          [
            _c("el-alert", {
              attrs: {
                title: "展示规则：",
                type: "info",
                description: "如果所在时刻没有图或有多张图，则显示最后一张图.",
                closable: false
              }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "main-view" }),
    _vm._v(" "),
    _c("footer")
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var image_banner = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2f659620", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/image/banner.vue
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  banner,
  image_banner,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/image/banner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] banner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f659620", Component.options)
  } else {
    hotAPI.reload("data-v-2f659620", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var views_image_banner = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/list.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaultEditForm = {
  name: '',
  alias: '',
  released_at: '',
  released_video_id: '',
  tags: [],
  avatar: '',
  banner: '',
  season: '',
  summary: '',
  collection_id: '',
  update: false
};
var defaultCreateForm = {
  name: '',
  avatar: '',
  banner: '',
  alias: '',
  summary: ''
};
var defaultSeason = '{"name": ["xx", "xx"], "part": [0, "xx", -1], "time": ["xxxx.xx", "xxxx.xx"]}';
/* harmony default export */ var list = ({
  name: 'v-page-bangumi-list',
  computed: {
    filter: function filter() {
      var begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
      return this.list.slice(begin, begin + this.pagination.pageSize);
    }
  },
  data: function data() {
    return {
      list: [],
      tags: [],
      collections: [],
      pagination: {
        totalPage: 0,
        pageSize: 20,
        curPage: 1
      },
      showEditorModal: false,
      showCreateModal: false,
      dialogTitle: '',
      release_weekly: [{
        id: 0,
        name: '不连载'
      }, {
        id: 1,
        name: '周一'
      }, {
        id: 2,
        name: '周二'
      }, {
        id: 3,
        name: '周三'
      }, {
        id: 4,
        name: '周四'
      }, {
        id: 5,
        name: '周五'
      }, {
        id: 6,
        name: '周六'
      }, {
        id: 7,
        name: '周日'
      }],
      editIndex: 0,
      editForm: defaultEditForm,
      createForm: defaultCreateForm,
      uploadHeaders: {
        token: '',
        key: ''
      },
      CDNPrefixp: 'https://cdn.riuir.com/',
      loading: true
    };
  },
  created: function created() {
    this.getBangumis();
    this.getUptoken();
  },

  methods: {
    getBangumis: function getBangumis() {
      var _this = this;

      this.$http.get('/bangumi/list').then(function (data) {
        _this.list = data.bangumis;
        _this.tags = data.tags;
        _this.collections = data.collections;
        _this.pagination.totalPage = Math.ceil(_this.list.length / _this.pagination.pageSize);
        _this.loading = false;
      });
    },
    getUptoken: function getUptoken() {
      var _this2 = this;

      this.$http.get('/image/uptoken').then(function (token) {
        _this2.uploadHeaders.token = token;
      });
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pagination.pageSize = val;
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pagination.curPage = val;
    },
    handleEditOpen: function handleEditOpen(index, row) {
      var _this3 = this;

      this.dialogTitle = row.name;
      this.editIndex = index + (this.pagination.curPage - 1) * this.pagination.pageSize;

      var tags = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = row.tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tag = _step.value;

          tags.push(tag.name);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      Object.keys(row).forEach(function (key) {
        _this3.editForm[key] = row[key];
      });
      this.editForm.tags = tags;
      this.editForm.season = row.season || defaultSeason;
      this.editForm.released_video_id = row.released_video_id || 0;
      this.editForm.collection_id = row.collection_id || 0;
      this.editForm.update = false;
      this.showEditorModal = true;
    },
    beforeUpload: function beforeUpload(file) {
      var isFormat = file.type === 'image/jpeg' || file.type === 'image/png';
      var isLt2M = file.size / 1024 / 1024 < 2;

      if (!isFormat) {
        this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      this.uploadHeaders.key = 'bangumi/avatar-banner/' + new Date().getTime() + '/' + Math.random().toString(36).substring(3, 6);
      return isFormat && isLt2M;
    },
    getTagIdByName: function getTagIdByName(name) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.tags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var tag = _step2.value;

          if (tag.name === name) {
            return tag.id;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },
    handleEditDone: function handleEditDone() {
      var _this4 = this;

      var tags = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.editForm.tags[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var tag = _step3.value;

          tags.push(tag.id ? tag.id : this.getTagIdByName(tag));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var season = this.editForm.season === defaultSeason ? '' : this.editForm.season;
      if (season) {
        try {
          var tempSeason = JSON.parse(season);
          var name = tempSeason.name;
          var part = tempSeason.part;
          var time = tempSeason.time;
          if (time.every(function (eif) {
            return (/^\d{4}\.\d{1,2}$/.test(eif)
            );
          }) && part.some(function (item) {
            return typeof item !== 'number';
          })) {
            delete tempSeason.name;
            delete tempSeason.part;
            season = JSON.stringify(tempSeason);
          } else {
            if (!name || !part || !time) {
              this.$message.error('season 缺少 key');
              return;
            }
            if (name.length !== part.length - 1 || part.length < 2) {
              this.$message.error('season 信息不完整');
              return;
            }
            if (part.some(function (item) {
              return typeof item !== 'number';
            })) {
              this.$message.error('season 的 part 必须是数字');
              return;
            }
            if (!part.every(function (item, index, arr) {
              if (index) {
                if (index === arr.length - 1) {
                  return item === -1 || item > arr[index - 1];
                } else {
                  return item > arr[index - 1];
                }
              } else {
                return item === 0;
              }
            })) {
              this.$message.error('season part 要从 0 开始，升序排列，最后一项可为 -1');
              return;
            }
            if (time.every(function (eif) {
              return eif === 'xxxx.xx';
            })) {
              delete tempSeason.time;
              season = JSON.stringify(tempSeason);
            } else if (time.every(function (eif) {
              return !/^\d{4}\.\d{1,2}$/.test(eif);
            })) {
              this.$message.error('time 格式不正确');
              return;
            } else if (name.length !== time.length) {
              this.$message.error('time 数量不对');
              return;
            }
          }
        } catch (e) {
          this.$message.error('season 不是 JSON 格式');
          return;
        }
      }
      this.editForm.alias = this.editForm.alias ? this.editForm.alias.split(/,|，/).join(',') : '';
      this.$http.post('/bangumi/edit', Object.assign(this.editForm, { tags: tags, season: season })).then(function () {
        var newTags = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = _this4.tags[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _tag = _step4.value;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = tags[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var item = _step5.value;

                if (item === _tag.id) {
                  newTags.push(_tag);
                }
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        Object.keys(_this4.editForm).forEach(function (key) {
          _this4.list[_this4.editIndex][key] = _this4.editForm[key];
        });
        _this4.list[_this4.editIndex].tags = newTags;
        _this4.list[_this4.editIndex].season = season;
        _this4.showEditorModal = false;
        _this4.$message.success('操作成功');
      }, function (err) {
        _this4.$message.error('操作失败');
        console.log(err);
      });
    },
    handleDelete: function handleDelete(index, row) {
      var _this5 = this;

      var isDeleted = row.deleted_at !== null;
      this.$confirm('\u786E\u5B9A\u8981' + (isDeleted ? '恢复' : '删除') + '\u300A' + row.name + '\u300B\u5417?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this5.$http.post('/bangumi/delete', {
          id: row.id,
          isDeleted: isDeleted
        }).then(function () {
          _this5.list[index + (_this5.pagination.curPage - 1) * _this5.pagination.pageSize].deleted_at = isDeleted ? null : moment().format('YYYY-MM-DD H:m:s');
          _this5.$message.success('操作成功');
        }, function (err) {
          _this5.$message.error('操作失败');
          console.log(err);
        });
      });
    },
    handleEditAvatarSuccess: function handleEditAvatarSuccess(res, file) {
      this.editForm.avatar = res.key;
    },
    handleEditBannerSuccess: function handleEditBannerSuccess(res, file) {
      this.editForm.banner = res.key;
    },
    handleCreateAvatarSuccess: function handleCreateAvatarSuccess(res, file) {
      this.createForm.avatar = res.key;
    },
    handleCreateBannerSuccess: function handleCreateBannerSuccess(res, file) {
      this.createForm.banner = res.key;
    },
    handleCreateDone: function handleCreateDone() {
      var _this6 = this;

      this.$validator.validateAll('create-bangumi').then(function (result) {
        if (result) {
          _this6.$http.post('/bangumi/create', {
            name: _this6.createForm.name,
            avatar: _this6.createForm.avatar.replace(_this6.CDNPrefixp, ''),
            banner: _this6.createForm.banner.replace(_this6.CDNPrefixp, ''),
            alias: _this6.createForm.alias.split(/,|，/).join(','),
            summary: _this6.createForm.summary
          }).then(function (data) {
            _this6.list.push(Object.assign(defaultEditForm, {
              id: data,
              name: _this6.createForm.name,
              avatar: _this6.createForm.avatar,
              banner: _this6.createForm.banner,
              summary: _this6.createForm.summary,
              alias: _this6.createForm.alias.split(/,|，/).join(','),
              deleted_at: moment().format('YYYY-MM-DD H:m:s')
            }));
            _this6.showCreateModal = false;
            _this6.$message.success('操作成功');
            _this6.createForm = defaultCreateForm;
          }, function (err) {
            _this6.$message.error('操作失败');
            console.log(err);
          });
        } else {
          _this6.$message.warning('信息不完整');
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-6d7951d8","hasScoped":false}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/bangumi/list.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "header",
        [
          _c(
            "el-button",
            {
              attrs: { type: "primary", icon: "plus", size: "large" },
              on: {
                click: function($event) {
                  _vm.showCreateModal = true
                }
              }
            },
            [_vm._v("创建番剧")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticClass: "main-view",
          attrs: { data: _vm.filter, border: "", "highlight-current-row": "" }
        },
        [
          _c("el-table-column", {
            attrs: { type: "expand" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [
                    _c(
                      "el-form",
                      { attrs: { "label-position": "left", inline: "" } },
                      [
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "别名" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.alias)
                                }
                              })
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "横幅" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(
                                    "https://cdn.riuir.com/" + props.row.banner
                                  )
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "头像" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(
                                    "https://cdn.riuir.com/" + props.row.avatar
                                  )
                                }
                              })
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        props.row.tags.length
                          ? _c(
                              "div",
                              [
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "标签" } },
                                  _vm._l(props.row.tags, function(tag) {
                                    return _c("el-tag", {
                                      key: tag.id,
                                      staticStyle: { "margin-right": "10px" },
                                      attrs: { type: "gray" },
                                      domProps: {
                                        textContent: _vm._s(tag.name)
                                      }
                                    })
                                  })
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "简介" } }, [
                          _c("span", {
                            domProps: { innerHTML: _vm._s(props.row.summary) }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "关注人数" } }, [
                              _c("span", [
                                _vm._v(
                                  _vm._s(props.row.like ? props.row.like : 0)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "总评分数" } }, [
                              _c("span", [
                                _vm._v(
                                  _vm._s(props.row.score ? props.row.score : 0)
                                )
                              ])
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "创建时间" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.created_at)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "更新时间" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.updated_at)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            props.row.deleted_at
                              ? _c(
                                  "el-form-item",
                                  { attrs: { label: "删除时间" } },
                                  [
                                    _c("span", {
                                      domProps: {
                                        textContent: _vm._s(
                                          props.row.deleted_at
                                        )
                                      }
                                    })
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "id", sortable: "", label: "索引" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "番名" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { width: "200", label: "操作" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { size: "small", type: "primary", icon: "edit" },
                        on: {
                          click: function($event) {
                            _vm.handleEditOpen(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("编辑")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: {
                          size: "small",
                          icon: "delete",
                          type: scope.row.deleted_at ? "warning" : "danger"
                        },
                        on: {
                          click: function($event) {
                            _vm.handleDelete(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v(_vm._s(scope.row.deleted_at ? "恢复" : "删除"))]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-modal",
        {
          staticClass: "bangumi-editor-modal",
          attrs: { "header-text": "编辑番剧" },
          on: { submit: _vm.handleEditDone },
          model: {
            value: _vm.showEditorModal,
            callback: function($$v) {
              _vm.showEditorModal = $$v
            },
            expression: "showEditorModal"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.editForm } },
            [
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "番名", "label-width": "60px" } },
                        [
                          _c("el-input", {
                            attrs: { "auto-complete": "off" },
                            model: {
                              value: _vm.editForm.name,
                              callback: function($$v) {
                                _vm.editForm.name =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "editForm.name"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 16 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "别名", "label-width": "60px" } },
                        [
                          _c("el-input", {
                            attrs: { "auto-complete": "off" },
                            model: {
                              value: _vm.editForm.alias,
                              callback: function($$v) {
                                _vm.editForm.alias =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "editForm.alias"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "连载", "label-width": "60px" } },
                        [
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: { placeholder: "请选择" },
                              model: {
                                value: _vm.editForm.released_at,
                                callback: function($$v) {
                                  _vm.editForm.released_at = $$v
                                },
                                expression: "editForm.released_at"
                              }
                            },
                            _vm._l(_vm.release_weekly, function(item) {
                              return _c("el-option", {
                                key: item.id,
                                attrs: { label: item.name, value: item.id }
                              })
                            })
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "视频", "label-width": "60px" } },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "最新视频id",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.editForm.released_video_id,
                              callback: function($$v) {
                                _vm.editForm.released_video_id =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "editForm.released_video_id"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "更新连载", "label-width": "100px" } },
                        [
                          _c("el-switch", {
                            attrs: { "on-text": "", "off-text": "" },
                            model: {
                              value: _vm.editForm.update,
                              callback: function($$v) {
                                _vm.editForm.update = $$v
                              },
                              expression: "editForm.update"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 16 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "标签", "label-width": "60px" } },
                        [
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: { multiple: "", placeholder: "请选择" },
                              model: {
                                value: _vm.editForm.tags,
                                callback: function($$v) {
                                  _vm.editForm.tags = $$v
                                },
                                expression: "editForm.tags"
                              }
                            },
                            _vm._l(_vm.tags, function(item) {
                              return _c("el-option", {
                                key: item.id,
                                attrs: { label: item.name, value: item.name }
                              })
                            })
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "合集", "label-width": "60px" } },
                        [
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: { placeholder: "请选择" },
                              model: {
                                value: _vm.editForm.collection_id,
                                callback: function($$v) {
                                  _vm.editForm.collection_id = $$v
                                },
                                expression: "editForm.collection_id"
                              }
                            },
                            _vm._l(_vm.collections, function(item) {
                              return _c("el-option", {
                                key: item.id,
                                attrs: { label: item.name, value: item.id }
                              })
                            })
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 21 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "头像", "label-width": "60px" } },
                        [
                          _c(
                            "el-input",
                            {
                              attrs: { "auto-complete": "off" },
                              model: {
                                value: _vm.editForm.avatar,
                                callback: function($$v) {
                                  _vm.editForm.avatar =
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                },
                                expression: "editForm.avatar"
                              }
                            },
                            [
                              _c(
                                "template",
                                { attrs: { slot: "prepend" }, slot: "prepend" },
                                [_vm._v("https://cdn.riuir.com/")]
                              )
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 2, offset: 1 } },
                    [
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-upload",
                            {
                              attrs: {
                                action: "http://up.qiniu.com",
                                data: _vm.uploadHeaders,
                                "show-file-list": false,
                                "on-success": _vm.handleEditAvatarSuccess,
                                "before-upload": _vm.beforeUpload
                              }
                            },
                            [_c("i", { staticClass: "el-icon-plus" })]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 21 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "横幅", "label-width": "60px" } },
                        [
                          _c(
                            "el-input",
                            {
                              attrs: { "auto-complete": "off" },
                              model: {
                                value: _vm.editForm.banner,
                                callback: function($$v) {
                                  _vm.editForm.banner =
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                },
                                expression: "editForm.banner"
                              }
                            },
                            [
                              _c(
                                "template",
                                { attrs: { slot: "prepend" }, slot: "prepend" },
                                [_vm._v("https://cdn.riuir.com/")]
                              )
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 2, offset: 1 } },
                    [
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-upload",
                            {
                              attrs: {
                                action: "http://up.qiniu.com",
                                data: _vm.uploadHeaders,
                                "show-file-list": false,
                                "on-success": _vm.handleEditBannerSuccess,
                                "before-upload": _vm.beforeUpload
                              }
                            },
                            [_c("i", { staticClass: "el-icon-plus" })]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "季度", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      rows: 2,
                      placeholder: "请输入番剧季度信息，JSON格式，包含 part，time，name 字段"
                    },
                    model: {
                      value: _vm.editForm.season,
                      callback: function($$v) {
                        _vm.editForm.season =
                          typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "editForm.season"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "简介", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      rows: 4,
                      placeholder: "请输入番剧简介"
                    },
                    model: {
                      value: _vm.editForm.summary,
                      callback: function($$v) {
                        _vm.editForm.summary =
                          typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "editForm.summary"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-modal",
        {
          staticClass: "bangumi-create-modal",
          attrs: { "header-text": "创建番剧" },
          on: { submit: _vm.handleCreateDone },
          model: {
            value: _vm.showCreateModal,
            callback: function($$v) {
              _vm.showCreateModal = $$v
            },
            expression: "showCreateModal"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.createForm } },
            [
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "番名", "label-width": "60px" } },
                        [
                          _c("el-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: {
                                  rules: "required",
                                  scope: "create-bangumi"
                                },
                                expression:
                                  "{\n                        rules: 'required',\n                        scope: 'create-bangumi'\n                      }"
                              }
                            ],
                            attrs: {
                              placeholder: "番剧的名称",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.createForm.name,
                              callback: function($$v) {
                                _vm.createForm.name =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "createForm.name"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 16 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "别名", "label-width": "60px" } },
                        [
                          _c("el-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: {
                                  rules: "required",
                                  scope: "create-bangumi"
                                },
                                expression:
                                  "{\n                        rules: 'required',\n                        scope: 'create-bangumi'\n                      }"
                              }
                            ],
                            attrs: {
                              placeholder: "番剧的别名，以逗号分隔",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.createForm.alias,
                              callback: function($$v) {
                                _vm.createForm.alias =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "createForm.alias"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 21 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "头像", "label-width": "60px" } },
                        [
                          _c(
                            "el-input",
                            {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: {
                                    rules: "required",
                                    scope: "create-bangumi"
                                  },
                                  expression:
                                    "{\n                        rules: 'required',\n                        scope: 'create-bangumi'\n                      }"
                                }
                              ],
                              attrs: {
                                placeholder: "头像，2M 以内的jpg, png",
                                "auto-complete": "off"
                              },
                              model: {
                                value: _vm.createForm.avatar,
                                callback: function($$v) {
                                  _vm.createForm.avatar =
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                },
                                expression: "createForm.avatar"
                              }
                            },
                            [
                              _c(
                                "template",
                                { attrs: { slot: "prepend" }, slot: "prepend" },
                                [_vm._v("https://cdn.riuir.com/")]
                              )
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 2, offset: 1 } },
                    [
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-upload",
                            {
                              attrs: {
                                action: "http://up.qiniu.com",
                                data: _vm.uploadHeaders,
                                "show-file-list": false,
                                "on-success": _vm.handleCreateAvatarSuccess,
                                "before-upload": _vm.beforeUpload
                              }
                            },
                            [_c("i", { staticClass: "el-icon-plus" })]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 21 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "横幅", "label-width": "60px" } },
                        [
                          _c(
                            "el-input",
                            {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: {
                                    rules: "required",
                                    scope: "create-bangumi"
                                  },
                                  expression:
                                    "{\n                        rules: 'required',\n                        scope: 'create-bangumi'\n                      }"
                                }
                              ],
                              attrs: {
                                placeholder: "横幅，2M 以内的jpg, png",
                                "auto-complete": "off"
                              },
                              model: {
                                value: _vm.createForm.banner,
                                callback: function($$v) {
                                  _vm.createForm.banner =
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                },
                                expression: "createForm.banner"
                              }
                            },
                            [
                              _c(
                                "template",
                                { attrs: { slot: "prepend" }, slot: "prepend" },
                                [_vm._v("https://cdn.riuir.com/")]
                              )
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 2, offset: 1 } },
                    [
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-upload",
                            {
                              attrs: {
                                action: "http://up.qiniu.com",
                                data: _vm.uploadHeaders,
                                "show-file-list": false,
                                "on-success": _vm.handleCreateBannerSuccess,
                                "before-upload": _vm.beforeUpload
                              }
                            },
                            [_c("i", { staticClass: "el-icon-plus" })]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "简介", "label-width": "60px" } },
                [
                  _c("el-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: {
                          rules: "required",
                          scope: "create-bangumi"
                        },
                        expression:
                          "{\n            rules: 'required',\n            scope: 'create-bangumi'\n          }"
                      }
                    ],
                    attrs: {
                      type: "textarea",
                      rows: 5,
                      placeholder: "请输入番剧简介，尽量在200字以内"
                    },
                    model: {
                      value: _vm.createForm.summary,
                      callback: function($$v) {
                        _vm.createForm.summary =
                          typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "createForm.summary"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "footer",
        [
          _c("el-pagination", {
            attrs: {
              layout: "total, sizes, prev, pager, next, jumper",
              "current-page": _vm.pagination.curPage,
              "page-sizes": [20, 50, 100],
              "page-size": _vm.pagination.pageSize,
              pageCount: _vm.pagination.totalPage,
              total: _vm.list.length
            },
            on: {
              "size-change": _vm.handleSizeChange,
              "current-change": _vm.handleCurrentChange
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var bangumi_list = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6d7951d8", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/bangumi/list.vue
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  list,
  bangumi_list,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/bangumi/list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d7951d8", Component.options)
  } else {
    hotAPI.reload("data-v-6d7951d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var views_bangumi_list = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/tag.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tag = ({
  name: 'v-page-bangumi-tag',
  computed: {
    filter: function filter() {
      var begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
      return this.list.slice(begin, begin + this.pagination.pageSize);
    }
  },
  data: function data() {
    return {
      list: [],
      pagination: {
        totalPage: 0,
        pageSize: 20,
        curPage: 1
      },
      models: [{
        id: '0',
        name: '番剧'
      }],
      showEditorModal: false,
      showCreateModal: false,
      editForm: {
        index: '',
        name: '',
        id: '',
        model: ''
      },
      createForm: {
        name: '',
        model: ''
      },
      loading: true
    };
  },
  created: function created() {
    this.getTags();
  },

  methods: {
    getTags: function getTags() {
      var _this = this;

      this.$http.get('/bangumi/tags').then(function (data) {
        _this.list = data;
        _this.pagination.totalPage = Math.ceil(_this.list.length / _this.pagination.pageSize);
        _this.loading = false;
      });
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pagination.pageSize = val;
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pagination.curPage = val;
    },
    modelFormat: function modelFormat(key) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var model = _step.value;

          if (model.name === key) {
            return model.id;
          }
          if (model.id === key) {
            return model.name;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    handleEditOpen: function handleEditOpen(index, row) {
      this.editForm = {
        index: index,
        id: row.id,
        name: row.name,
        model: row.model
      };
      this.showEditorModal = true;
    },
    handleEditDone: function handleEditDone() {
      var _this2 = this;

      this.$http.post('/tag/edit', {
        id: this.editForm.id,
        name: this.editForm.name,
        model: this.editForm.model
      }).then(function () {
        var index = _this2.editForm.index + (_this2.pagination.curPage - 1) * _this2.pagination.pageSize;
        _this2.list[index] = _this2.editForm;
        _this2.showEditorModal = false;
        _this2.$message.success('操作成功');
      }, function (err) {
        _this2.$message.error('操作失败');
        console.log(err);
      });
    },
    handleCreateDone: function handleCreateDone() {
      var _this3 = this;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var tag = _step2.value;

          if (tag.name === this.createForm.name) {
            this.$message({
              message: '标签已存在',
              type: 'warning'
            });
            return;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.$http.post('/tag/create', {
        name: this.createForm.name,
        model: this.modelFormat(this.createForm.model)
      }).then(function (data) {
        _this3.list.push({
          id: data,
          name: _this3.createForm.name,
          model: _this3.modelFormat(_this3.createForm.model)
        });
        _this3.showCreateModal = false;
        _this3.$message.success('操作成功');
        _this3.createForm = {
          name: '',
          model: ''
        };
      }, function (err) {
        _this3.$message.error('操作失败');
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-6572ce94","hasScoped":false}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/bangumi/tag.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "header",
        [
          _c(
            "el-button",
            {
              attrs: { type: "primary", icon: "plus", size: "large" },
              on: {
                click: function($event) {
                  _vm.showCreateModal = true
                }
              }
            },
            [_vm._v("创建标签")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticClass: "main-view",
          attrs: { data: _vm.filter, border: "", "highlight-current-row": "" }
        },
        [
          _c("el-table-column", {
            attrs: { prop: "id", sortable: "", label: "索引" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "名称" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "类型" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.modelFormat(scope.row.model)) +
                        "\n      "
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", size: "small", icon: "edit" },
                        on: {
                          click: function($event) {
                            _vm.handleEditOpen(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("编辑")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-modal",
        {
          staticClass: "tag-editor-modal",
          attrs: { "header-text": "标签编辑" },
          on: { submit: _vm.handleEditDone },
          model: {
            value: _vm.showEditorModal,
            callback: function($$v) {
              _vm.showEditorModal = $$v
            },
            expression: "showEditorModal"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.editForm } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "名称", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.editForm.name,
                      callback: function($$v) {
                        _vm.editForm.name =
                          typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "editForm.name"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-modal",
        {
          staticClass: "tag-creator-modal",
          attrs: { "header-text": "创建标签" },
          on: { submit: _vm.handleCreateDone },
          model: {
            value: _vm.showCreateModal,
            callback: function($$v) {
              _vm.showCreateModal = $$v
            },
            expression: "showCreateModal"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.createForm } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "类型", "label-width": "60px" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择" },
                      model: {
                        value: _vm.createForm.model,
                        callback: function($$v) {
                          _vm.createForm.model = $$v
                        },
                        expression: "createForm.model"
                      }
                    },
                    _vm._l(_vm.models, function(model) {
                      return _c("el-option", {
                        key: model.id,
                        attrs: { value: model.name }
                      })
                    })
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "名称", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.createForm.name,
                      callback: function($$v) {
                        _vm.createForm.name =
                          typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "createForm.name"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "footer",
        [
          _c("el-pagination", {
            attrs: {
              layout: "total, sizes, prev, pager, next, jumper",
              "current-page": _vm.pagination.curPage,
              "page-sizes": [20, 50, 100],
              "page-size": _vm.pagination.pageSize,
              pageCount: _vm.pagination.totalPage,
              total: _vm.list.length
            },
            on: {
              "size-change": _vm.handleSizeChange,
              "current-change": _vm.handleCurrentChange
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var bangumi_tag = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6572ce94", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/bangumi/tag.vue
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  tag,
  bangumi_tag,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/bangumi/tag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6572ce94", Component.options)
  } else {
    hotAPI.reload("data-v-6572ce94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var views_bangumi_tag = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/collection.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var collection = ({
  name: 'v-page-collection',
  computed: {
    filter: function filter() {
      var begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
      return this.list.slice(begin, begin + this.pagination.pageSize);
    }
  },
  data: function data() {
    return {
      list: [],
      pagination: {
        totalPage: 0,
        pageSize: 20,
        curPage: 1
      },
      showEditorModal: false,
      showCreateModal: false,
      editForm: {
        index: '',
        name: '',
        id: '',
        title: ''
      },
      createForm: {
        name: '',
        title: ''
      },
      loading: true
    };
  },
  created: function created() {
    this.getData();
  },

  methods: {
    getData: function getData() {
      var _this = this;

      this.$http.get('/bangumi/collection/list').then(function (data) {
        _this.list = data;
        _this.pagination.totalPage = Math.ceil(_this.list.length / _this.pagination.pageSize);
        _this.loading = false;
      });
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pagination.pageSize = val;
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pagination.curPage = val;
    },
    handleEditOpen: function handleEditOpen(index, row) {
      this.editForm = {
        index: index,
        id: row.id,
        name: row.name,
        title: row.title
      };
      this.showEditorModal = true;
    },
    handleEditDone: function handleEditDone() {
      var _this2 = this;

      if (!this.editForm.title || !this.editForm.name) {
        this.$message({
          message: '不能有空值',
          type: 'warning'
        });
        return;
      }
      this.$http.post('/bangumi/collection/edit', {
        id: this.editForm.id,
        name: this.editForm.name,
        title: this.editForm.title
      }).then(function () {
        var index = _this2.editForm.index + (_this2.pagination.curPage - 1) * _this2.pagination.pageSize;
        _this2.list[index] = _this2.editForm;
        _this2.showEditorModal = false;
        _this2.$message.success('操作成功');
      }, function (err) {
        _this2.$message.error('操作失败');
        console.log(err);
      });
    },
    handleCreateDone: function handleCreateDone() {
      var _this3 = this;

      if (!this.createForm.title || !this.createForm.name) {
        this.$message({
          message: '不能有空值',
          type: 'warning'
        });
        return;
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.name === this.createForm.name || item.name === this.createForm.title || item.title === this.createForm.title || item.title === this.createForm.name) {
            this.$message({
              message: '合集已存在',
              type: 'warning'
            });
            return;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.$http.post('/bangumi/collection/create', {
        name: this.createForm.name,
        title: this.createForm.title
      }).then(function (data) {
        _this3.list.push({
          id: data,
          name: _this3.createForm.name,
          title: _this3.createForm.title
        });
        _this3.showCreateModal = false;
        _this3.$message.success('操作成功');
        _this3.createForm = {
          name: '',
          title: ''
        };
      }, function (err) {
        _this3.$message.error('操作失败');
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-5e613694","hasScoped":false}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/bangumi/collection.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "header",
        [
          _c(
            "el-button",
            {
              attrs: { type: "primary", icon: "plus", size: "large" },
              on: {
                click: function($event) {
                  _vm.showCreateModal = true
                }
              }
            },
            [_vm._v("创建合集")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticClass: "main-view",
          attrs: { data: _vm.filter, border: "", "highlight-current-row": "" }
        },
        [
          _c("el-table-column", {
            attrs: { prop: "id", sortable: "", label: "索引" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "名称" } }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "title", label: "标题" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", size: "small", icon: "edit" },
                        on: {
                          click: function($event) {
                            _vm.handleEditOpen(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("编辑")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-modal",
        {
          staticClass: "tag-editor-modal",
          attrs: { "header-text": "标签编辑" },
          on: { submit: _vm.handleEditDone },
          model: {
            value: _vm.showEditorModal,
            callback: function($$v) {
              _vm.showEditorModal = $$v
            },
            expression: "showEditorModal"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.editForm } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "名称", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "番剧名称的前缀", "auto-complete": "off" },
                    model: {
                      value: _vm.editForm.name,
                      callback: function($$v) {
                        _vm.editForm.name =
                          typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "editForm.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "标题", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "番剧页面的标题", "auto-complete": "off" },
                    model: {
                      value: _vm.editForm.title,
                      callback: function($$v) {
                        _vm.editForm.title =
                          typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "editForm.title"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-modal",
        {
          staticClass: "tag-creator-modal",
          attrs: { "header-text": "创建合集" },
          on: { submit: _vm.handleCreateDone },
          model: {
            value: _vm.showCreateModal,
            callback: function($$v) {
              _vm.showCreateModal = $$v
            },
            expression: "showCreateModal"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.createForm } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "名称", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "番剧名称的前缀", "auto-complete": "off" },
                    model: {
                      value: _vm.createForm.name,
                      callback: function($$v) {
                        _vm.createForm.name =
                          typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "createForm.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "标题", "label-width": "60px" } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "番剧页面的标题", "auto-complete": "off" },
                    model: {
                      value: _vm.createForm.title,
                      callback: function($$v) {
                        _vm.createForm.title =
                          typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "createForm.title"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "footer",
        [
          _c("el-pagination", {
            attrs: {
              layout: "total, sizes, prev, pager, next, jumper",
              "current-page": _vm.pagination.curPage,
              "page-sizes": [20, 50, 100],
              "page-size": _vm.pagination.pageSize,
              pageCount: _vm.pagination.totalPage,
              total: _vm.list.length
            },
            on: {
              "size-change": _vm.handleSizeChange,
              "current-change": _vm.handleCurrentChange
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var bangumi_collection = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5e613694", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/bangumi/collection.vue
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  collection,
  bangumi_collection,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/bangumi/collection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] collection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e613694", Component.options)
  } else {
    hotAPI.reload("data-v-5e613694", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var views_bangumi_collection = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/bangumi/video.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaultResource = {
  "video": {
    "720": {
      "useLyc": false,
      "src": ""
    },
    "1080": {
      "useLyc": false,
      "src": ""
    }
  },
  "lyric": {
    "zh": "",
    "en": ""
  }
};
var defaultCreateForm = {
  P720: {
    show: false,
    useLyc: false,
    src: 'bangumi/${name}/video/720/${n}.mp4'
  },
  P1080: {
    show: false,
    useLyc: false,
    src: 'bangumi/${name}/video/1080/${n}.mp4'
  },
  lyric: {
    zh: 'bangumi/${name}/lyric/zh/${n}.vtt',
    en: 'bangumi/${name}/lyric/en/${n}.vtt'
  },
  bangumiEnglishName: '',
  bname: '',
  name: '',
  part: '',
  url: 'bangumi/${name}/video/${n}.mp4',
  poster: 'bangumi/${name}/poster/${n}.jpg'
};
/* harmony default export */ var video = ({
  name: 'v-page-bangumi-video',
  computed: {
    filter: function filter() {
      var begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
      return this.list.slice(begin, begin + this.pagination.pageSize);
    }
  },
  data: function data() {
    return {
      loading: true,
      list: [],
      bangumis: [],
      pagination: {
        totalPage: 0,
        pageSize: 24,
        curPage: 1
      },
      showEditorModal: false,
      showCreateModal: false,
      dialogTitle: '',
      editIndex: 0,
      editForm: {
        id: '',
        bangumi_id: '',
        bname: '',
        name: '',
        part: '',
        poster: '',
        url: '',
        resource: defaultResource
      },
      createForm: defaultCreateForm,
      CDNPrefixp: 'https://cdn.riuir.com/'
    };
  },
  created: function created() {
    this.getVideos();
  },

  methods: {
    getVideos: function getVideos() {
      var _this = this;

      this.$http.get('/bangumi/videos').then(function (data) {
        _this.list = data.videos;
        _this.bangumis = data.bangumis;
        _this.pagination.totalPage = Math.ceil(_this.list.length / _this.pagination.pageSize);
        _this.loading = false;
      });
    },
    handleSizeChange: function handleSizeChange(val) {
      this.pagination.pageSize = val;
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pagination.curPage = val;
    },
    handleEditOpen: function handleEditOpen(index, row) {
      var _this2 = this;

      this.dialogTitle = row.name;
      this.editIndex = index + (this.pagination.curPage - 1) * this.pagination.pageSize;

      Object.keys(row).forEach(function (key) {
        _this2.editForm[key] = row[key];
      });
      this.editForm.resource = row.resource ? this.$deepAssign(defaultResource, row.resource) : defaultResource;

      this.showEditorModal = true;
    },
    preview: function preview(url) {
      if (url) {
        window.open("" + this.CDNPrefixp + url);
      }
    },
    computedBangumiId: function computedBangumiId(bname) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.bangumis[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var bangumi = _step.value;

          if (bangumi.name === bname) {
            return bangumi.id;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return 0;
    },
    handleEditDone: function handleEditDone() {
      var _this3 = this;

      this.$http.post('/video/edit', this.editForm).then(function () {
        Object.keys(_this3.editForm).forEach(function (key) {
          _this3.list[_this3.editIndex][key] = _this3.editForm[key];
        });
        _this3.showEditorModal = false;
        _this3.$message.success('操作成功');
      }, function () {
        _this3.$message.error('操作失败');
      });
    },
    handleDelete: function handleDelete(index, row) {
      var _this4 = this;

      var isDeleted = row.deleted_at !== null;
      this.$confirm("\u786E\u5B9A\u8981" + (isDeleted ? '恢复' : '删除') + "\u300A" + row.name + "\u300B\u5417?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this4.$http.post('/video/delete', {
          id: row.id,
          isDeleted: isDeleted
        }).then(function () {
          _this4.list[index].deleted_at = isDeleted ? null : moment().format('YYYY-MM-DD H:m:s');
          _this4.$message.success('操作成功');
        }, function (err) {
          _this4.$message.error('操作失败');
          console.log(err);
        });
      });
    },
    handleCreateCancel: function handleCreateCancel() {
      this.createForm = defaultCreateForm;
      this.showCreateModal = false;
    },
    handleCreateDone: function handleCreateDone() {
      var _this5 = this;

      var part = this.createForm.part.split('-');
      if (!this.createForm.bname) {
        this.$message.warning('先选择番剧');
        return;
      }
      if (part.length !== 2) {
        this.$message.warning('集数不符合规范');
        return;
      }
      var begin = part[0] - 0,
          end = part[1] - 0;

      var length = end - begin + 1;
      if (length <= 0 || begin <= 0) {
        this.$message.warning('集数不符合规范');
        return;
      }
      var bangumiEnglishName = this.createForm.bangumiEnglishName.toLowerCase();
      if (bangumiEnglishName === '') {
        this.$message.warning('未填写番剧英文名');
        return;
      }
      var names = this.createForm.name.split('\n');
      if (names.length !== length) {
        this.$message.warning('名称个数不对');
        return;
      }
      var arr = [],
          j = 0;
      var bangumi_id = this.computedBangumiId(this.createForm.bname);
      var use720P = this.createForm.P720.show;
      var use1080P = this.createForm.P1080.show;
      var use720Lyc = this.createForm.P720.useLyc;
      var use1080Lyc = this.createForm.P1080.useLyc;
      var useOuterResource = !(use720P || use1080P);
      var useLyric = use720Lyc || use1080Lyc;
      for (var i = begin; i <= end; i++) {
        var resource = useOuterResource ? '' : {
          "video": {
            "720": {
              "useLyc": false,
              "src": ""
            },
            "1080": {
              "useLyc": false,
              "src": ""
            }
          },
          "lyric": {
            "zh": "",
            "en": ""
          }
        };
        if (!useOuterResource) {
          if (use720P) {
            resource.video['720'] = {
              src: this.createForm.P720.src.replace('${n}', i).replace('${name}', bangumiEnglishName),
              useLyc: use720Lyc
            };
          }
          if (use1080P) {
            resource.video['1080'] = {
              src: this.createForm.P1080.src.replace('${n}', i).replace('${name}', bangumiEnglishName),
              useLyc: use1080Lyc
            };
          }
        }
        if (useLyric) {
          // 这里默认只写入中文字体
          resource.lyric = {
            'zh': this.createForm.lyric.zh.replace('${n}', i).replace('${name}', bangumiEnglishName)
          };
        }
        arr.push({
          'resource': resource,
          'bangumi_id': bangumi_id,
          'part': i,
          'name': names[j++],
          'poster': this.createForm.poster.replace('${n}', i).replace('${name}', bangumiEnglishName),
          'url': useOuterResource ? this.createForm.url.replace('${n}', i).replace('${name}', bangumiEnglishName) : ''
        });
      }
      this.$http.post('/video/create', { arr: arr }).then(function () {
        _this5.$message.success('操作成功');
        _this5.handleCreateCancel();
      }, function (err) {
        _this5.$message.error('操作失败');
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-0b9e0b16","hasScoped":false}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/bangumi/video.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "header",
        [
          _c(
            "el-button",
            {
              attrs: { type: "primary", icon: "plus", size: "large" },
              on: {
                click: function($event) {
                  _vm.showCreateModal = true
                }
              }
            },
            [_vm._v("新建视频")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticClass: "main-view",
          attrs: { data: _vm.filter, border: "", "highlight-current-row": "" }
        },
        [
          _c("el-table-column", {
            attrs: { type: "expand" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [
                    _c(
                      "el-form",
                      { attrs: { "label-position": "left", inline: "" } },
                      [
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "视频 ID" } }, [
                              _c("span", {
                                domProps: { textContent: _vm._s(props.row.id) }
                              })
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "番剧 ID" } }, [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(props.row.bangumi_id)
                                }
                              })
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "海报" } }, [
                              _c("span", {
                                staticStyle: { cursor: "pointer" },
                                domProps: {
                                  textContent: _vm._s(
                                    "https://cdn.riuir.com/" + props.row.poster
                                  )
                                },
                                on: {
                                  click: function($event) {
                                    _vm.preview(props.row.poster)
                                  }
                                }
                              })
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "播放量" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.count_played)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "评论数" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.count_comment)
                                }
                              })
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("el-form-item", { attrs: { label: "创建时间" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.created_at)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("el-form-item", { attrs: { label: "更新时间" } }, [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(props.row.updated_at)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            props.row.deleted_at
                              ? _c(
                                  "el-form-item",
                                  { attrs: { label: "删除时间" } },
                                  [
                                    _c("span", {
                                      domProps: {
                                        textContent: _vm._s(
                                          props.row.deleted_at
                                        )
                                      }
                                    })
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "id", sortable: "", width: "100", label: "索引" }
          }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "bname", label: "番名" } }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "名称" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "part", width: "100", label: "集数" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              sortable: "",
              width: "110",
              prop: "count_played",
              label: "播放量"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              sortable: "",
              width: "110",
              prop: "count_comment",
              label: "评论数"
            }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { width: "200", label: "操作" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { size: "small", type: "primary", icon: "edit" },
                        on: {
                          click: function($event) {
                            _vm.handleEditOpen(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("编辑")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: {
                          size: "small",
                          icon: "delete",
                          type: scope.row.deleted_at ? "warning" : "danger"
                        },
                        on: {
                          click: function($event) {
                            _vm.handleDelete(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v(_vm._s(scope.row.deleted_at ? "恢复" : "删除"))]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-modal",
        {
          staticClass: "video-editor-modal",
          attrs: { "header-text": "视频编辑" },
          on: { submit: _vm.handleEditDone },
          model: {
            value: _vm.showEditorModal,
            callback: function($$v) {
              _vm.showEditorModal = $$v
            },
            expression: "showEditorModal"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.editForm } },
            [
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 9 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "番剧", "label-width": "85px" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: { placeholder: "请选择" },
                              model: {
                                value: _vm.editForm.bname,
                                callback: function($$v) {
                                  _vm.editForm.bname = $$v
                                },
                                expression: "editForm.bname"
                              }
                            },
                            _vm._l(_vm.bangumis, function(item) {
                              return _c("el-option", {
                                key: item.id,
                                attrs: {
                                  value: item.name,
                                  disabled: !!item.deleted_at
                                }
                              })
                            })
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 5 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "集数", "label-width": "85px" } },
                        [
                          _c("el-input", {
                            attrs: { "auto-complete": "off" },
                            model: {
                              value: _vm.editForm.part,
                              callback: function($$v) {
                                _vm.editForm.part =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "editForm.part"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 10 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "名称", "label-width": "85px" } },
                        [
                          _c("el-input", {
                            attrs: { "auto-complete": "off" },
                            model: {
                              value: _vm.editForm.name,
                              callback: function($$v) {
                                _vm.editForm.name =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "editForm.name"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "720P 资源", "label-width": "85px" } },
                  [
                    _c(
                      "el-col",
                      { attrs: { span: 18 } },
                      [
                        _c(
                          "el-input",
                          {
                            attrs: { "auto-complete": "off" },
                            model: {
                              value: _vm.editForm.resource.video[720].src,
                              callback: function($$v) {
                                _vm.editForm.resource.video[720].src =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "editForm.resource.video[720].src"
                            }
                          },
                          [
                            _c(
                              "template",
                              { attrs: { slot: "prepend" }, slot: "prepend" },
                              [_vm._v("https://cdn.riuir.com/")]
                            )
                          ],
                          2
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.editForm.resource.video[720].src
                      ? _c(
                          "el-col",
                          { attrs: { span: 4, offset: 1 } },
                          [
                            _vm._v("\n            字幕："),
                            _c("el-switch", {
                              attrs: { "on-text": "", "off-text": "" },
                              model: {
                                value: _vm.editForm.resource.video[720].useLyc,
                                callback: function($$v) {
                                  _vm.editForm.resource.video[720].useLyc = $$v
                                },
                                expression:
                                  "editForm.resource.video[720].useLyc"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                )
              ],
              _vm._v(" "),
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "1080P 资源", "label-width": "85px" } },
                  [
                    _c(
                      "el-col",
                      { attrs: { span: 18 } },
                      [
                        _c(
                          "el-input",
                          {
                            attrs: { "auto-complete": "off" },
                            model: {
                              value: _vm.editForm.resource.video[1080].src,
                              callback: function($$v) {
                                _vm.editForm.resource.video[1080].src =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "editForm.resource.video[1080].src"
                            }
                          },
                          [
                            _c(
                              "template",
                              { attrs: { slot: "prepend" }, slot: "prepend" },
                              [_vm._v("https://cdn.riuir.com/")]
                            )
                          ],
                          2
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.editForm.resource.video[1080].src
                      ? _c(
                          "el-col",
                          { attrs: { span: 4, offset: 1 } },
                          [
                            _vm._v("\n            字幕："),
                            _c("el-switch", {
                              attrs: { "on-text": "", "off-text": "" },
                              model: {
                                value: _vm.editForm.resource.video[1080].useLyc,
                                callback: function($$v) {
                                  _vm.editForm.resource.video[1080].useLyc = $$v
                                },
                                expression:
                                  "editForm.resource.video[1080].useLyc"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                )
              ],
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "外链资源", "label-width": "85px" } },
                [
                  _c(
                    "el-input",
                    {
                      attrs: { "auto-complete": "off" },
                      model: {
                        value: _vm.editForm.url,
                        callback: function($$v) {
                          _vm.editForm.url =
                            typeof $$v === "string" ? $$v.trim() : $$v
                        },
                        expression: "editForm.url"
                      }
                    },
                    [
                      _c(
                        "template",
                        { attrs: { slot: "prepend" }, slot: "prepend" },
                        [_vm._v("https://cdn.riuir.com/")]
                      )
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "海报", "label-width": "85px" } },
                [
                  _c(
                    "el-input",
                    {
                      attrs: { "auto-complete": "off" },
                      model: {
                        value: _vm.editForm.poster,
                        callback: function($$v) {
                          _vm.editForm.poster =
                            typeof $$v === "string" ? $$v.trim() : $$v
                        },
                        expression: "editForm.poster"
                      }
                    },
                    [
                      _c(
                        "template",
                        { attrs: { slot: "prepend" }, slot: "prepend" },
                        [_vm._v("https://cdn.riuir.com/")]
                      )
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "字幕", "label-width": "85px" } },
                [
                  _c(
                    "el-input",
                    {
                      attrs: { "auto-complete": "off" },
                      model: {
                        value: _vm.editForm.resource.lyric.zh,
                        callback: function($$v) {
                          _vm.editForm.resource.lyric.zh =
                            typeof $$v === "string" ? $$v.trim() : $$v
                        },
                        expression: "editForm.resource.lyric.zh"
                      }
                    },
                    [
                      _c(
                        "template",
                        { attrs: { slot: "prepend" }, slot: "prepend" },
                        [_vm._v("https://cdn.riuir.com/")]
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-modal",
        {
          staticClass: "video-create-modal",
          attrs: { "header-text": "新建视频" },
          on: { submit: _vm.handleCreateDone },
          model: {
            value: _vm.showCreateModal,
            callback: function($$v) {
              _vm.showCreateModal = $$v
            },
            expression: "showCreateModal"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.createForm } },
            [
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "番剧", "label-width": "85px" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: { placeholder: "请选择" },
                              model: {
                                value: _vm.createForm.bname,
                                callback: function($$v) {
                                  _vm.createForm.bname = $$v
                                },
                                expression: "createForm.bname"
                              }
                            },
                            _vm._l(_vm.bangumis, function(item) {
                              return _c("el-option", {
                                key: item.id,
                                attrs: {
                                  value: item.name,
                                  disabled: !!item.deleted_at
                                }
                              })
                            })
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "集数", "label-width": "85px" } },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "m-n",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.createForm.part,
                              callback: function($$v) {
                                _vm.createForm.part =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "createForm.part"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "名称", "label-width": "85px" } },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "${name}",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.createForm.bangumiEnglishName,
                              callback: function($$v) {
                                _vm.createForm.bangumiEnglishName =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "createForm.bangumiEnglishName"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "画质", "label-width": "85px" } },
                [
                  _c(
                    "div",
                    [
                      _c(
                        "el-checkbox",
                        {
                          model: {
                            value: _vm.createForm.P720.show,
                            callback: function($$v) {
                              _vm.createForm.P720.show = $$v
                            },
                            expression: "createForm.P720.show"
                          }
                        },
                        [_vm._v("720P")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-checkbox",
                        {
                          model: {
                            value: _vm.createForm.P1080.show,
                            callback: function($$v) {
                              _vm.createForm.P1080.show = $$v
                            },
                            expression: "createForm.P1080.show"
                          }
                        },
                        [_vm._v("1080P")]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _vm.createForm.P720.show
                ? _c(
                    "el-row",
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "720P 资源", "label-width": "85px" } },
                        [
                          _c(
                            "el-col",
                            { attrs: { span: 18 } },
                            [
                              _c(
                                "el-input",
                                {
                                  attrs: { "auto-complete": "off" },
                                  model: {
                                    value: _vm.createForm.P720.src,
                                    callback: function($$v) {
                                      _vm.createForm.P720.src =
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                    },
                                    expression: "createForm.P720.src"
                                  }
                                },
                                [
                                  _c(
                                    "template",
                                    {
                                      attrs: { slot: "prepend" },
                                      slot: "prepend"
                                    },
                                    [_vm._v("https://cdn.riuir.com/")]
                                  )
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { attrs: { span: 4, offset: 1 } },
                            [
                              _vm._v("\n            字幕："),
                              _c("el-switch", {
                                attrs: { "on-text": "", "off-text": "" },
                                model: {
                                  value: _vm.createForm.P720.useLyc,
                                  callback: function($$v) {
                                    _vm.createForm.P720.useLyc = $$v
                                  },
                                  expression: "createForm.P720.useLyc"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.createForm.P1080.show
                ? _c(
                    "el-row",
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "1080P 资源", "label-width": "85px" } },
                        [
                          _c(
                            "el-col",
                            { attrs: { span: 18 } },
                            [
                              _c(
                                "el-input",
                                {
                                  attrs: { "auto-complete": "off" },
                                  model: {
                                    value: _vm.createForm.P1080.src,
                                    callback: function($$v) {
                                      _vm.createForm.P1080.src =
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                    },
                                    expression: "createForm.P1080.src"
                                  }
                                },
                                [
                                  _c(
                                    "template",
                                    {
                                      attrs: { slot: "prepend" },
                                      slot: "prepend"
                                    },
                                    [_vm._v("https://cdn.riuir.com/")]
                                  )
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { attrs: { span: 4, offset: 1 } },
                            [
                              _vm._v("\n            字幕："),
                              _c("el-switch", {
                                attrs: { "on-text": "", "off-text": "" },
                                model: {
                                  value: _vm.createForm.P1080.useLyc,
                                  callback: function($$v) {
                                    _vm.createForm.P1080.useLyc = $$v
                                  },
                                  expression: "createForm.P1080.useLyc"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.createForm.P720.show && !_vm.createForm.P1080.show
                ? _c(
                    "el-form-item",
                    { attrs: { label: "外链资源", "label-width": "85px" } },
                    [
                      _c(
                        "el-input",
                        {
                          attrs: { "auto-complete": "off" },
                          model: {
                            value: _vm.createForm.url,
                            callback: function($$v) {
                              _vm.createForm.url =
                                typeof $$v === "string" ? $$v.trim() : $$v
                            },
                            expression: "createForm.url"
                          }
                        },
                        [
                          _c(
                            "template",
                            { attrs: { slot: "prepend" }, slot: "prepend" },
                            [_vm._v("https://cdn.riuir.com/")]
                          )
                        ],
                        2
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "海报", "label-width": "85px" } },
                [
                  _c(
                    "el-input",
                    {
                      attrs: { "auto-complete": "off" },
                      model: {
                        value: _vm.createForm.poster,
                        callback: function($$v) {
                          _vm.createForm.poster =
                            typeof $$v === "string" ? $$v.trim() : $$v
                        },
                        expression: "createForm.poster"
                      }
                    },
                    [
                      _c(
                        "template",
                        { attrs: { slot: "prepend" }, slot: "prepend" },
                        [_vm._v("https://cdn.riuir.com/")]
                      )
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.createForm.P720.useLyc || _vm.createForm.P1080.useLyc
                ? _c(
                    "el-form-item",
                    { attrs: { label: "字幕", "label-width": "85px" } },
                    [
                      _c(
                        "el-input",
                        {
                          attrs: { "auto-complete": "off" },
                          model: {
                            value: _vm.createForm.lyric.zh,
                            callback: function($$v) {
                              _vm.createForm.lyric.zh =
                                typeof $$v === "string" ? $$v.trim() : $$v
                            },
                            expression: "createForm.lyric.zh"
                          }
                        },
                        [
                          _c(
                            "template",
                            { attrs: { slot: "prepend" }, slot: "prepend" },
                            [_vm._v("https://cdn.riuir.com/")]
                          )
                        ],
                        2
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "名称", "label-width": "85px" } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      placeholder: "一行一个",
                      "auto-complete": "off"
                    },
                    model: {
                      value: _vm.createForm.name,
                      callback: function($$v) {
                        _vm.createForm.name =
                          typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "createForm.name"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "footer",
        [
          _c("el-pagination", {
            attrs: {
              layout: "total, sizes, prev, pager, next, jumper",
              "current-page": _vm.pagination.curPage,
              "page-sizes": [24, 50, 100],
              "page-size": _vm.pagination.pageSize,
              pageCount: _vm.pagination.totalPage,
              total: _vm.list.length
            },
            on: {
              "size-change": _vm.handleSizeChange,
              "current-change": _vm.handleCurrentChange
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var bangumi_video = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0b9e0b16", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/bangumi/video.vue
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  video,
  bangumi_video,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/bangumi/video.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] video.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b9e0b16", Component.options)
  } else {
    hotAPI.reload("data-v-0b9e0b16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var views_bangumi_video = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./frontend/views/admin/user.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaultSignUp = {
  name: '',
  email: '',
  password: ''
};
/* harmony default export */ var user = ({
  name: 'v-admin-user',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data: function data() {
    return {
      showCreateModal: false,
      signUp: defaultSignUp
    };
  },

  methods: {
    register: function register() {
      var _this = this;

      this.$http.post('/auth/register', {
        name: this.signUp.name,
        email: this.signUp.email,
        password: this.signUp.password
      }).then(function () {
        _this.resetSignUp();
        _this.$message.success('操作成功');
      }).catch(function () {
        _this.$message.error('操作失败');
      });
    },
    resetSignUp: function resetSignUp() {
      this.showCreateModal = false;
      this.signUp = defaultSignUp;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-01151acb","hasScoped":false}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./frontend/views/admin/user.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c(
      "header",
      [
        _c(
          "el-button",
          {
            attrs: { type: "primary", icon: "plus", size: "large" },
            on: {
              click: function($event) {
                _vm.showCreateModal = true
              }
            }
          },
          [_vm._v("注册")]
        ),
        _vm._v(" "),
        _c(
          "v-modal",
          {
            attrs: { "header-text": "新注册一个管理员" },
            on: { cancel: _vm.resetSignUp, submit: _vm.register },
            model: {
              value: _vm.showCreateModal,
              callback: function($$v) {
                _vm.showCreateModal = $$v
              },
              expression: "showCreateModal"
            }
          },
          [
            _c(
              "el-form",
              { attrs: { "label-width": "80px" } },
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "昵称" } },
                  [
                    _c("el-input", {
                      model: {
                        value: _vm.signUp.name,
                        callback: function($$v) {
                          _vm.signUp.name =
                            typeof $$v === "string" ? $$v.trim() : $$v
                        },
                        expression: "signUp.name"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  { attrs: { label: "邮箱" } },
                  [
                    _c("el-input", {
                      attrs: { type: "email" },
                      model: {
                        value: _vm.signUp.email,
                        callback: function($$v) {
                          _vm.signUp.email =
                            typeof $$v === "string" ? $$v.trim() : $$v
                        },
                        expression: "signUp.email"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  { attrs: { label: "密码" } },
                  [
                    _c("el-input", {
                      attrs: { type: "password" },
                      model: {
                        value: _vm.signUp.password,
                        callback: function($$v) {
                          _vm.signUp.password =
                            typeof $$v === "string" ? $$v.trim() : $$v
                        },
                        expression: "signUp.password"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var admin_user = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-01151acb", esExports)
  }
}
// CONCATENATED MODULE: ./frontend/views/admin/user.vue
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  user,
  admin_user,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "frontend/views/admin/user.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01151acb", Component.options)
  } else {
    hotAPI.reload("data-v-01151acb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var views_admin_user = __webpack_exports__["default"] = (Component.exports);


/***/ })

},[35]);