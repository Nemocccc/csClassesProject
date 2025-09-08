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

    let currentArray = [...originalArray]

    let arrayFilterer = (filterCriteria = null, callback = null) => {
        if (typeof filterCriteria != "function") {
            return currentArray;
        }

        currentArray = currentArray.filter(
            item => filterCriteria(item)
        );

        if (typeof callback != "function") {
            return arrayFilterer;
        }

        callback.call(originalArray, currentArray);
        return arrayFilterer;
    }

    return arrayFilterer;
}

export default cs142MakeMultiFilter;