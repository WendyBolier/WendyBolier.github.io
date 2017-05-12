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

        this.c = 0;
        this.selecting = false;
        this.done = false;
    },

    play: function () {
        var el = this.el;
        el.addEventListener('hit', this.onHit);
        el.addEventListener('gripclose', this.onGripClose);
        el.addEventListener('gripopen', this.onGripOpen);
    },

    pause: function () {
        var el = this.el;
        el.removeEventListener('hit', this.onHit);
        el.removeEventListener('gripclose', this.onGripClose);
        el.removeEventListener('gripopen', this.onGripOpen);
    },

    onGripClose: function (evt) {
        this.selecting = true;

    },

    onGripOpen: function (evt) {
        this.selecting = false;
        this.done = false;

    },

    onHit: function (evt) {
        var hitEl = evt.detail.el;
        this.hitEl = hitEl;

        if((hitEl !== null) && (this.done === false) && (this.selecting === true)) {
            if(hitEl.id === "nextButton") {
                console.log("Next button hit");
                sbsNextStep();
                this.done = true;
            }
            else if(hitEl.id === "previousButton") {
                sbsPreviousStep();
                this.done = true;
            }
            else if(hitEl.id === "finishedButton") {
                console.log("Finished button hit");
                pressedFinished();
                this.done = true;
            }
        }

    }

});