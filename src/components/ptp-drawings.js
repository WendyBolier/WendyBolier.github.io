/**
 * Created by Wendy on 17/04/2017.
 */

AFRAME.registerComponent('ptp-drawings', {
    schema: {

    },

    init: function() {
       // var sceneEl = document.querySelector('a-scene');
        var sceneEl = el.sceneEl;
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
            height: 3,
            width: 1
        });

        entityEl.setAttribute('position', '1 2 -3');
        entityEl.setAttribute('color', 'blue');
    },


    update: function () {


    }
});