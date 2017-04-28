/**
 * Created by Wendy on 17/04/2017.
 */

AFRAME.registerComponent('ptp-drawings', {
    schema: {

    },

    init: function() {
        var sceneEl = document.querySelector('a-scene');
        var sphere = sceneEl.querySelector('a-sphere');

       AFRAME.registerComponent('do-something-once-loaded', {
            init: function () {
                // This will be called after the entity has properly attached and loaded.
                console.log('I am ready');
            }
        });

      sphere.setAttribute('color', 'yellow');

        var entityEl = document.createElement('a-entity');
        entityEl.setAttribute('do-something-once-loaded', '');
        sceneEl.appendChild(entityEl);

        entityEl.setAttribute('geometry', {
            primitive: 'box',
            height: 1,
            width: 1
        });

        entityEl.setAttribute('position', '1 2 -3');
        entityEl.setAttribute('color', 'red');

        var entityEl2 = document.createElement('a-entity');
        entityEl2.setAttribute('do-something-once-loaded', '');
        sceneEl.appendChild(entityEl2);

        entityEl2.setAttribute('geometry', {
            primitive: 'box',
            height: 1,
            width: 1
        });

        entityEl2.setAttribute('position', '-1 2 -3');
        entityEl2.setAttribute('color', 'red');
    },


    update: function () {


    }
});