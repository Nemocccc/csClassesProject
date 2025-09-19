'use strict';

function cs142MakeMultiFilter(originalArray) {
    /**
     * a function produce array filter functions
     * 
     * @param {Array} originalArray - the original Array to be proceed
     * @returns {Array} the proceeded Array
     * @example
     * function newFunc = cs142MakeMultiFilter(originalArray);
     * 
     * @since 1.0.0
     * @author nemo
     */

    // 浏览器环境兼容写法
    let currentArray = [...originalArray];

    function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria !== "function") {
            return currentArray;
        }

        currentArray = currentArray.filter(
            item => filterCriteria(item),
        );

        if (typeof callback !== "function") {
            return arrayFilterer;
        }

        callback.call(originalArray, currentArray);
        return arrayFilterer;
    }

    return arrayFilterer;
}

// 挂载到 window，方便浏览器环境访问
window.cs142MakeMultiFilter = cs142MakeMultiFilter;