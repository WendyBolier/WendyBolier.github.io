/* global AFRAME */

/**
 * Handles events coming from the hand-controls.
 */
AFRAME.registerComponent('select', {
    init: function () {
        // Bind event handlers
        this.onHit = this.onHit.bind(this);
        this.onGripOpen = this.onGripOpen.bind(this);
        this.onGripClose = this.onGripClose.bind(this);

        this.sw = 0;
        this.c = 0;
    },

    play: function () {
        var el = this.el;
        el.addEventListener('hit', this.onHit);
        el.addEventListener('gripclose', this.onGripClose);
        el.addEventListener('gripopen', this.onGripOpen);

        el.addEventListener('triggerchanged', this.onTriggerChanged);
    },

    pause: function () {
        var el = this.el;
        el.removeEventListener('hit', this.onHit);
        el.removeEventListener('gripclose', this.onGripClose);
        el.removeEventListener('gripopen', this.onGripOpen);
    },

    onTriggerChanged: function (evt) {
        var hitEl = this.hitEl;
        console.log("HIT");
        document.querySelector("#testbox").setAttribute('color', 'yellow');
    },

    onGripClose: function (evt) {
        document.querySelector("#testbox").setAttribute('color', 'yellow');
        /*
        if(this.sw === 1) {
            return;
        }
        var hitEl = this.hitEl;
        console.log("HIT");
        if(this.c === 0)
        {
            document.querySelector("#testbox").setAttribute('color', 'yellow');
            this.c =1;
        }
        else {
            document.querySelector("#testbox").setAttribute('color', 'red');
            this.c =0;
        }

        this.sw = 1;*/
    },

    onGripOpen: function (evt) {
        var hitEl = this.hitEl;
        this.sw = 0;
    },

    onHit: function (evt) {
        var hitEl = evt.detail.el;
        this.hitEl = hitEl;
    },

});