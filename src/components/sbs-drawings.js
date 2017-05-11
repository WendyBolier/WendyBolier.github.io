/**
 * Created by Spacelab on 10-5-2017.
 */

AFRAME.registerComponent('sbs-drawings', {
    schema: {

    },

    init: function() {
        var sceneEl = document.querySelector('a-scene');

        var churchEl = document.createElement('a-obj-model');
        sceneEl.appendChild(churchEl);

        churchEl.setAttribute('src', 'assets/models/Step-by-step/SmallChurch/smallchurch-0.obj');
        churchEl.setAttribute('mtl', 'assets/models/Step-by-step/SmallChurch/smallchurch-0.mtl');
        churchEl.setAttribute('position', '-1 0.5 -1');
        churchEl.setAttribute('scale', '0.1 0.1 0.1');
        churchEl.setAttribute('rotation', '0 90 0');
        churchEl.setAttribute('material.side', 'THREE.DoubleSide');
        churchEl.setAttribute('visible', 'false');


    },


    update: function () {


    },

    play: function () {
        var el = this.el;
        el.addEventListener('raycaster-intersection', this.onIntersection);
    }



});