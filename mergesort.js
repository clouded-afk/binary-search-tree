function mergeSort(array) {
    if(array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const leftArray = array.slice(0, middle)
    const rightArray = array.slice(middle)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray) {
    const output = []
    let left = 0
    let right = 0

    while (left < leftArray.length && right < rightArray.length) {
        const leftItems = leftArray[left]
        const rightItems = rightArray[right]

        if (leftItems < rightItems) {
            output.push(leftItems)
            left++
        } else {
            output.push(rightItems)
            right++
        }
    }

    return [...output, ...leftArray.slice(left), ...rightArray.slice(right)]
}

export {
    mergeSort
}