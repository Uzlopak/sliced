/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

 module.exports = function (args, slice, sliceEnd) {

  var len = args.length;

  if (0 === len) return [];

  var start = (slice < 0)
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  if (len - start < 1) return []
  var ret = new Array(len - start);

  if (start !== 0) {
    while (len-- > start) {
      ret[len - start] = args[len];
    }
  } else {

    while (len--) {
      ret[len] = args[len];
    }
  }

  return ret;
}
