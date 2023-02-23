(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "dd63");
/******/ })
/************************************************************************/
/******/ ({

/***/ "dd63":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "IconFilter", function() { return /* reexport */ filter; });
__webpack_require__.d(__webpack_exports__, "IconImage", function() { return /* reexport */ icons_image; });
__webpack_require__.d(__webpack_exports__, "IconCircle", function() { return /* reexport */ circle; });

// CONCATENATED MODULE: /Users/fang/Desktop/github-project/helios/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: /Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4c7fbf36-vue-loader-template"}!/Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/fang/Desktop/github-project/helios/node_modules/babel-loader/lib!/Users/fang/Desktop/github-project/helios/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!/Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/fang/Desktop/github-project/helios/node_modules/vue-loader/lib??vue-loader-options!./src/icons/filter.vue?vue&type=template&id=9cda9414&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', _vm._g({
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": _vm.size,
      "height": _vm.size,
      "viewBox": "0 0 24 24",
      "aria-hidden": "true",
      "fill": _vm.color
    }
  }, _vm.$listeners), [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M1.093 2.58A1 1 0 012 2h20a1 1 0 01.764 1.646L15 12.826V21a1 1 0 01-1.447.894l-4-2A1 1 0 019 19v-6.174l-7.764-9.18a1 1 0 01-.143-1.067zM4.155 4l6.609 7.814a1 1 0 01.236.646v5.922l2 1V12.46a1 1 0 01.236-.646L19.845 4H4.155z"
    }
  })]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/icons/filter.vue?vue&type=template&id=9cda9414&

// CONCATENATED MODULE: /Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/fang/Desktop/github-project/helios/node_modules/thread-loader/dist/cjs.js!/Users/fang/Desktop/github-project/helios/node_modules/babel-loader/lib!/Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/fang/Desktop/github-project/helios/node_modules/vue-loader/lib??vue-loader-options!./src/icons/filter.vue?vue&type=script&lang=js&
/* harmony default export */ var filtervue_type_script_lang_js_ = ({
  name: "IconFilter",
  props: {
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: "currentColor"
    }
  }
});
// CONCATENATED MODULE: ./src/icons/filter.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_filtervue_type_script_lang_js_ = (filtervue_type_script_lang_js_); 
// CONCATENATED MODULE: /Users/fang/Desktop/github-project/helios/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/icons/filter.vue





/* normalize component */

var component = normalizeComponent(
  icons_filtervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var filter = (component.exports);
// CONCATENATED MODULE: /Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4c7fbf36-vue-loader-template"}!/Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/fang/Desktop/github-project/helios/node_modules/babel-loader/lib!/Users/fang/Desktop/github-project/helios/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!/Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/fang/Desktop/github-project/helios/node_modules/vue-loader/lib??vue-loader-options!./src/icons/image.vue?vue&type=template&id=2dfeb43b&
var imagevue_type_template_id_2dfeb43b_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', _vm._g({
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": _vm.size,
      "height": _vm.size,
      "viewBox": "0 0 24 24",
      "aria-hidden": "true",
      "fill": _vm.color
    }
  }, _vm.$listeners), [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M8.5 8a.5.5 0 100 1 .5.5 0 000-1zM6 8.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
    }
  }), _c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M5 2a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3H5zm0 2a1 1 0 00-1 1v14a1 1 0 00.65.937L15.292 9.293a1 1 0 011.414 0L20 12.586V5a1 1 0 00-1-1H5zm3.5 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM20 19a1 1 0 01-1 1H7.414L16 11.414l4 4V19zM8.5 8a.5.5 0 100 1 .5.5 0 000-1z"
    }
  })]);
};
var imagevue_type_template_id_2dfeb43b_staticRenderFns = [];

// CONCATENATED MODULE: ./src/icons/image.vue?vue&type=template&id=2dfeb43b&

// CONCATENATED MODULE: /Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/fang/Desktop/github-project/helios/node_modules/thread-loader/dist/cjs.js!/Users/fang/Desktop/github-project/helios/node_modules/babel-loader/lib!/Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/fang/Desktop/github-project/helios/node_modules/vue-loader/lib??vue-loader-options!./src/icons/image.vue?vue&type=script&lang=js&
/* harmony default export */ var imagevue_type_script_lang_js_ = ({
  name: "IconImage",
  props: {
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: "currentColor"
    }
  }
});
// CONCATENATED MODULE: ./src/icons/image.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_imagevue_type_script_lang_js_ = (imagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/icons/image.vue





/* normalize component */

var image_component = normalizeComponent(
  icons_imagevue_type_script_lang_js_,
  imagevue_type_template_id_2dfeb43b_render,
  imagevue_type_template_id_2dfeb43b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var icons_image = (image_component.exports);
// CONCATENATED MODULE: /Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4c7fbf36-vue-loader-template"}!/Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/fang/Desktop/github-project/helios/node_modules/babel-loader/lib!/Users/fang/Desktop/github-project/helios/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!/Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/fang/Desktop/github-project/helios/node_modules/vue-loader/lib??vue-loader-options!./src/icons/circle.vue?vue&type=template&id=daf67786&
var circlevue_type_template_id_daf67786_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', _vm._g({
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": _vm.size,
      "height": _vm.size,
      "viewBox": "0 0 24 24",
      "aria-hidden": "true",
      "fill": _vm.color
    }
  }, _vm.$listeners), [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
    }
  })]);
};
var circlevue_type_template_id_daf67786_staticRenderFns = [];

// CONCATENATED MODULE: ./src/icons/circle.vue?vue&type=template&id=daf67786&

// CONCATENATED MODULE: /Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/fang/Desktop/github-project/helios/node_modules/thread-loader/dist/cjs.js!/Users/fang/Desktop/github-project/helios/node_modules/babel-loader/lib!/Users/fang/Desktop/github-project/helios/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/fang/Desktop/github-project/helios/node_modules/vue-loader/lib??vue-loader-options!./src/icons/circle.vue?vue&type=script&lang=js&
/* harmony default export */ var circlevue_type_script_lang_js_ = ({
  name: "IconCircle",
  props: {
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: "currentColor"
    }
  }
});
// CONCATENATED MODULE: ./src/icons/circle.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_circlevue_type_script_lang_js_ = (circlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/icons/circle.vue





/* normalize component */

var circle_component = normalizeComponent(
  icons_circlevue_type_script_lang_js_,
  circlevue_type_template_id_daf67786_render,
  circlevue_type_template_id_daf67786_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var circle = (circle_component.exports);
// CONCATENATED MODULE: ./src/index.js



// CONCATENATED MODULE: /Users/fang/Desktop/github-project/helios/node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=index.umd.js.map