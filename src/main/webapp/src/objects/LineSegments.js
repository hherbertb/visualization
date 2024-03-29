/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.LineSegments = function (geometry, material) {

    THREE.Line.call(this, geometry, material);

    this.type = 'LineSegments';

};

THREE.LineSegments.prototype = Object.assign(Object.create(THREE.Line.prototype), {

    constructor: THREE.LineSegments

});
