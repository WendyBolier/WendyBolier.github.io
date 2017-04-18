/**
 * Created by Wendy on 17/04/2017.
 */

AFRAME.registerComponent('mouse-interaction', {
    schema: {
        to: {default: '2.5 2.5 2.5'}
    },

    init: function() {
        var data = this.data;
        this.el.addEventListener('mouseenter', function() {
            this.setAttribute('scale', data.to);
        });
    }
});