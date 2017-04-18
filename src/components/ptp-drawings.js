/**
 * Created by Wendy on 17/04/2017.
 */

AFRAME.registerComponent('ptp-drawings', {
    schema: {

    },

    init: function() {
        var sceneEl = document.querySelector('a-scene');


        AFRAME.registerComponent('do-something-once-loaded', {
            init: function () {
                // This will be called after the entity has properly attached and loaded.
                console.log('I am ready'!);
            }
        });

        var entityEl = document.createElement('a-entity');
        entityEl.setAttribute('do-something-once-loaded', '');
        sceneEl.appendChild(entityEl);

        entityEl.setAttribute('geometry', {
            primitive: 'box',
            height: 3,
            width: 1
        });

        entityEl.setAttribute('position', {x: 1, y: 2, z: -3});
        entityEl.setAttribute('material', 'color', 'red');
    }

    update: function () {


    }
});