const _ = require('lodash')

const CHILD_WITH_FRIEND = '├──'
const CHILD_ONLY = '└──'
const VERTICAL_LINE = '│'

/**
 * Add indent
 * 
 * @param {boolean[]} depthFriends Whether depth-specific friends exist
 */
function _addIndent(depthFriends) {
    const myDepth = depthFriends.length
    let str = ''
    for(let i=0;i<myDepth;i++){
        const isParent = i === myDepth - 1
        if(depthFriends[i]) {
            if(isParent) {
                str += `${CHILD_WITH_FRIEND} `
            } else {
                str += `${VERTICAL_LINE}   `
            }
        } else {
            if(isParent) {
                str += `${CHILD_ONLY} `
            } else {
                str += `    `
            }
        }
    }
    return str
}

/**
 * Creating text-based trees using objects
 * 
 * @param {string} ret final result
 * @param {boolean[]} depthFriends depth information
 * @param {object} obj conversion target object
 * @returns final result
 */
function generateTreeText(obj, depthFriends = [], ret = '') {
    if(!_vaildation(obj)) return ret
    const objArr = Object.entries(obj)
    for(let i=0;i<objArr.length;i++){
        const cloneDepthFriends = _.cloneDeep(depthFriends)
        const [key, value] = objArr[i]
        const haveFriends = i !== objArr.length - 1
        cloneDepthFriends.push(haveFriends)
        ret += `\n${_addIndent(cloneDepthFriends)}${key}`
        // child
        if(_vaildation(value)) {
            ret = generateTreeText(value, cloneDepthFriends, ret)
        }
    }
    return ret
}

function _vaildation(obj) {
    return obj !== null && obj !== undefined && typeof obj === 'object' && !Array.isArray(obj)
}

module.exports = ({
    generateTreeText
})