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
    resetSbs();

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
            startsbsdrawing(1);
            break;

        case 10:
            startsbsdrawing(2);
            break;

        case 11:
            startsbsdrawing(3);
            break;

        case 12:
            if(slider.checked) {
            }
            else {
                document.querySelector("#cone3Did").setAttribute('visible', 'true');
            }
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

function resetSbs() {
    var next =  document.querySelector("#nextButton");
    var previous =  document.querySelector("#previousButton");
    var finished =  document.querySelector("#finishedButton");

    next.setAttribute('visible', 'false');
    previous.setAttribute('visible', 'false');
    finished.setAttribute('visible', 'false');

}

function startsbsdrawing(num) {
    var next =  document.querySelector("#nextButton");
    var previous =  document.querySelector("#previousButton");
    var finished =  document.querySelector("#finishedButton");

    next.setAttribute('visible', 'true');
    previous.setAttribute('visible', 'true');
    finished.setAttribute('visible', 'false');

    this.drawing = num;
    this.step = 1;

    switch(num) {
        case 1:
            sbsTree(this.step);
            break;
        case 2:
            sbsSmallChurch(this.step);
            break;
        case 3:
            sbsChicken(this.step);
            break;
        default:
            break;
    }
}

function sbsNextStep() {
    switch(this.drawing) {
        case 1:
            sbsTree(this.step + 1);
            break;
        case 2:
            sbsSmallChurch(this.step + 1);
            break;
        case 3:
            sbsChicken(this.step + 1);
            break;
        default:
            break;
    }
}

function sbsPreviousStep() {
    if(this.step > 1) {
        switch (this.drawing) {
            case 1:
                sbsTree(this.step - 1);
                break;
            case 2:
                sbsSmallChurch(this.step - 1);
                break;
            case 3:
                sbsChicken(this.step - 1);
                break;
            default:
                break;
        }
    }
}

function sbsTree(step) {
    this.step = step;
    var treeEl = document.querySelector("#tree");

    if(step === 1) {
        treeEl.setAttribute('src', 'assets/models/Step-by-step/Tree/tree-1.obj');
        treeEl.setAttribute('mtl', 'assets/models/Step-by-step/Tree/tree-1.mtl');
        treeEl.setAttribute('visible', 'true');
    }
    else if(step === 2) {
        treeEl.setAttribute('src', 'assets/models/Step-by-step/Tree/tree-2.obj');
        treeEl.setAttribute('mtl', 'assets/models/Step-by-step/Tree/tree-2.mtl');
    }
    else if(step === 3) {
        treeEl.setAttribute('src', 'assets/models/Step-by-step/Tree/tree-3.obj');
        treeEl.setAttribute('mtl', 'assets/models/Step-by-step/Tree/tree-3.mtl');
    }
    else if(step === 4) {
        treeEl.setAttribute('src', 'assets/models/Step-by-step/Tree/tree-full.obj');
        treeEl.setAttribute('mtl', 'assets/models/Step-by-step/Tree/tree-full.mtl');
    }
    else if(step === 5) {
        lastStep();
    }
}

function sbsSmallChurch(step) {
    this.step = step;
    //var sceneEl = document.querySelector('a-scene');
    var churchEl = document.querySelector("#church");

    if(step === 1) {
        //var sceneEl = document.querySelector('a-scene');
        //var churchEl = document.createElement('a-obj-model');
        //sceneEl.appendChild(churchEl);
        //churchEl.setAttribute('position', '-1 0.5 -1');
        //churchEl.setAttribute('scale', '0.1 0.1 0.1');
       // churchEl.setAttribute('rotation', '0 90 0');
        churchEl.setAttribute('src', 'assets/models/Step-by-step/SmallChurch/smallchurch-0.obj');
        churchEl.setAttribute('mtl', 'assets/models/Step-by-step/SmallChurch/smallchurch-0.mtl');
       // churchEl.setAttribute('class', 'figure');
        //this.churchEl = churchEl;
        churchEl.setAttribute('visible', 'true');
    }
    else if(step === 2) {

        churchEl.setAttribute('src', 'assets/models/Step-by-step/SmallChurch/smallchurch-1.obj');
        churchEl.setAttribute('mtl', 'assets/models/Step-by-step/SmallChurch/smallchurch-1.mtl');
    }
    else if(step === 3) {
        churchEl.setAttribute('src', 'assets/models/Step-by-step/SmallChurch/smallchurch-2.obj');
        churchEl.setAttribute('mtl', 'assets/models/Step-by-step/SmallChurch/smallchurch-2.mtl');
}
    else if(step === 4) {
        churchEl.setAttribute('src', 'assets/models/Step-by-step/SmallChurch/smallchurch-3.obj');
        churchEl.setAttribute('mtl', 'assets/models/Step-by-step/SmallChurch/smallchurch-3.mtl');
    }
    else if(step === 5) {
        churchEl.setAttribute('src', 'assets/models/Step-by-step/SmallChurch/smallchurch-4.obj');
        churchEl.setAttribute('mtl', 'assets/models/Step-by-step/SmallChurch/smallchurch-4.mtl');
    }
    else if(step === 6) {
        churchEl.setAttribute('src', 'assets/models/Step-by-step/SmallChurch/smallchurch-5.obj');
        churchEl.setAttribute('mtl', 'assets/models/Step-by-step/SmallChurch/smallchurch-5.mtl');
    }
    else if(step === 7) {
        churchEl.setAttribute('src', 'assets/models/Step-by-step/SmallChurch/smallchurch-full.obj');
        churchEl.setAttribute('mtl', 'assets/models/Step-by-step/SmallChurch/smallchurch-full.mtl');
    }
    else if(step === 8) {
        lastStep();
    }
}

function sbsChicken(step) {
    this.step = step;
    var chickenEl = document.querySelector("#chicken");

    if(step === 1) {
        chickenEl.setAttribute('src', 'assets/models/Step-by-step/Chicken/Chicken-1.obj');
        chickenEl.setAttribute('mtl', 'assets/models/Step-by-step/Chicken/Chicken-1.mtl');
        chickenEl.setAttribute('visible', 'true');
    }
    else if(step === 2) {
        chickenEl.setAttribute('src', 'assets/models/Step-by-step/Chicken/Chicken-2.obj');
        chickenEl.setAttribute('mtl', 'assets/models/Step-by-step/Chicken/Chicken-2.mtl');
    }
    else if(step === 3) {
        chickenEl.setAttribute('src', 'assets/models/Step-by-step/Chicken/Chicken-3.obj');
        chickenEl.setAttribute('mtl', 'assets/models/Step-by-step/Chicken/Chicken-3.mtl');
    }
    else if(step === 4) {
        chickenEl.setAttribute('src', 'assets/models/Step-by-step/Chicken/Chicken-4.obj');
        chickenEl.setAttribute('mtl', 'assets/models/Step-by-step/Chicken/Chicken-4.mtl');
    }
    else if(step === 5) {
        chickenEl.setAttribute('src', '#chicken-full');
        chickenEl.setAttribute('mtl', '#chicken-full-mtl');
    }
    else if(step === 6) {
        lastStep();
    }
}

function lastStep() {

    var next =  document.querySelector("#nextButton");
    var previous =  document.querySelector("#previousButton");
    var finished =  document.querySelector("#finishedButton");

    next.setAttribute('visible', 'false');
    previous.setAttribute('visible', 'false');
    finished.setAttribute('visible', 'true');
}

function pressedFinished() {
    removeAllFiguresFromScene();
    startsbsdrawing(this.drawing);
}

function directToUpload() {
    var sceneEl = document.querySelector('a-scene');
    sceneEl.systems.painter.upload();
}

function directToClear() {
    var sceneEl = document.querySelector('a-scene');
    if (window.confirm("Weet je zeker dat je alles wilt verwijderen?") == true) {
        sceneEl.systems.brush.clear();
    }
}