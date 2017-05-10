/**
 * Created by Spacelab on 9-5-2017.
 */

function toggleMenuVisibility() {
    var elems = document.getElementsByClassName('menu');
    for (var i = 0; i < elems.length; ++i) {
        var s = elems[i].style;
        s.display = s.display === 'none' ? 'inline' : 'none';
    }
}

function openFigure(f) {
    var slider = document.getElementById("slider");
    removeAllFiguresFromScene();

    switch(f) {
        case 1:
            if(slider.checked) {
                document.querySelector("#cube2Did").setAttribute('visible', 'true');
            }
            else {
                document.querySelector("#cube3Did").setAttribute('visible', 'true');
            }
            break;

        case 2:
            if(slider.checked) {
            }
            else {
                document.querySelector("#pyramid3Did").setAttribute('visible', 'true');
            }
            break;

        case 3:
            if(slider.checked) {
            }
            else {
                document.querySelector("#sphere3Did").setAttribute('visible', 'true');
            }
            break;

        case 4:
            if(slider.checked) {
            }
            else {
                document.querySelector("#cylinder3Did").setAttribute('visible', 'true');
            }
            break;

        case 5:
            if(slider.checked) {
                document.querySelector("#house2Did").setAttribute('visible', 'true');
            }
            else {
                document.querySelector("#house3Did").setAttribute('visible', 'true');
            }
            break;

        case 6:
            if(slider.checked) {
                document.querySelector("#fish2Did").setAttribute('visible', 'true');
            }
            else {
                document.querySelector("#fish3Did").setAttribute('visible', 'true');
            }
            break;

        case 7:
            if(slider.checked) {
                document.querySelector("#bug2Did").setAttribute('visible', 'true');
            }
            else {
                document.querySelector("#bug3Did").setAttribute('visible', 'true');
            }
            break;

        case 8:
            if(slider.checked) {
                document.querySelector("#knut2Did").setAttribute('visible', 'true');
            }
            else {
                document.querySelector("#knut3Did").setAttribute('visible', 'true');
            }
            break;

        case 9:
            sbsTree();
            break;

        case 10:
            sbsSmallChurch();
            break;

        default:
            break;
    }
}

function removeAllFiguresFromScene() {
    var figures = document.querySelectorAll(".figure");
    for (var i = 0; i < figures.length; ++i) {
        figures[i].setAttribute('visible', 'false');
    }
}

function sbsTree() {

}

function sbsSmallChurch() {
    var sceneEl = document.querySelector('a-scene');
    var churchEl = document.createElement('a-obj-model');
    sceneEl.appendChild(churchEl);

    churchEl.setAttribute('src', 'assets/models/Step-by-step/SmallChurch/smallchurch-0.obj');
    churchEl.setAttribute('mtl', 'assets/models/Step-by-step/SmallChurch/smallchurch-0.mtl');
    churchEl.setAttribute('position', '-1 0.5 -1');
    churchEl.setAttribute('scale', '0.1 0.1 0.1');
    churchEl.setAttribute('rotation', '0 90 0');
    churchEl.setAttribute('material.side', 'THREE.DoubleSide');

    var nextButton = document.createElement('a-image');
    sceneEl.appendChild(nextButton);

    nextButton.setAttribute('id', 'nextButtonID');
    nextButton.setAttribute('src', 'assets/images/buttons/next.png');
    nextButton.setAttribute('position', '0 0.5 -1.5');
    nextButton.setAttribute('scale', '0.5 0.5 0.5');


    // if button pressed next step
}

