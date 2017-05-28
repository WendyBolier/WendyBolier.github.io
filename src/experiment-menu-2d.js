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

function closeUploadUi() {
    var apainterUI = document.getElementById('apainter-ui');
    apainterUI.style.display = 'none';
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
                basicFigureBeforeHelp(4);
            }
            break;

        case 2:
            if(slider.checked) {
            }
            else {
                document.querySelector("#pyramid3Did").setAttribute('visible', 'true');
                basicFigureBeforeHelp(5);
            }
            break;

        case 3:
            if(slider.checked) {
            }
            else {
                document.querySelector("#sphere").setAttribute('visible', 'true');
                basicFigureBeforeHelp(6);
            }
            break;

        case 4:
            if(slider.checked) {
            }
            else {
                document.querySelector("#cylinder3Did").setAttribute('visible', 'true');
                basicFigureBeforeHelp(7);
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
                basicFigureBeforeHelp(8);
            }
            break;

        case 13:
            if(slider.checked) {
                document.querySelector("#gardenHouse2Did").setAttribute('visible', 'true');
            }
            else {
                document.querySelector("#gardenHouse3Did").setAttribute('visible', 'true');
            }
            break;

        case 14:
            document.querySelector("#knut2Did").setAttribute('visible', 'true');
            document.querySelector("#knut3Did").setAttribute('visible', 'true');
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
    var help = document.querySelector("#helpButton");

    next.setAttribute('visible', 'false');
    previous.setAttribute('visible', 'false');
    finished.setAttribute('visible', 'false');
    help.setAttribute('visible', 'false');

    var treeEl = document.querySelector("#tree");
    treeEl.setAttribute('src', 'assets/models/Step-by-step/Tree/tree-1.obj');
    treeEl.setAttribute('mtl', 'assets/models/Step-by-step/Tree/tree-1.mtl');

    var churchEl = document.querySelector("#church");
    churchEl.setAttribute('src', 'assets/models/Step-by-step/SmallChurch/smallchurch-0.obj');
    churchEl.setAttribute('mtl', 'assets/models/Step-by-step/SmallChurch/smallchurch-0.mtl');

    var chickenEl = document.querySelector("#chicken");
    chickenEl.setAttribute('src', 'assets/models/Step-by-step/Chicken/Chicken-1.obj');
    chickenEl.setAttribute('mtl', 'assets/models/Step-by-step/Chicken/Chicken-1.mtl');

    var cubeEl = document.querySelector("#cube3Did");
    cubeEl.setAttribute('src', 'assets/models/Figures/Cube/cube-4.obj');

    var pyramidEl = document.querySelector("#pyramid3Did");
    pyramidEl.setAttribute('src', 'assets/models/Figures/Pyramid/pyramid-4.obj');

    var sphereEl = document.querySelector("#sphere");
    sphereEl.setAttribute('src', 'assets/models/Figures/Sphere/sphere-4.obj');

    var cylinderEl = document.querySelector("#cylinder3Did");
    cylinderEl.setAttribute('src', 'assets/models/Figures/Cylinder/cylinder-4.obj');

    var coneEl = document.querySelector("#cone3Did");
    coneEl.setAttribute('src', 'assets/models/Figures/Cone/cone-4.obj');
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
        case 4:
            sbsCube(this.step);
            break;
        case 5:
            sbsPyramid(this.step);
            break;
        case 6:
            sbsSphere(this.step);
            break;
        case 7:
            sbsCylinder(this.step);
            break;
        case 8:
            sbsCone(this.step);
            break;
        default:
            break;
    }
}

function basicFigureBeforeHelp(num) {
    var helpButton =  document.querySelector("#helpButton");
    helpButton.setAttribute('visible', 'true');
    this.drawing = num;
}

function startHelp() {
    var helpButton =  document.querySelector("#helpButton");
    helpButton.setAttribute('visible', 'false');
    startsbsdrawing(this.drawing);
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
        case 4:
            sbsCube(this.step + 1);
            break;
        case 5:
            sbsPyramid(this.step + 1);
            break;
        case 6:
            sbsSphere(this.step + 1);
            break;
        case 7:
            sbsCylinder(this.step + 1);
            break;
        case 8:
            sbsCone(this.step + 1);
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
            case 4:
                sbsCube(this.step - 1);
                break;
            case 5:
                sbsPyramid(this.step - 1);
                break;
            case 6:
                sbsSphere(this.step - 1);
                break;
            case 7:
                sbsCylinder(this.step - 1);
                break;
            case 8:
                sbsCone(this.step - 1);
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
        chickenEl.setAttribute('src', 'assets/models/Step-by-step/Chicken/Chicken-5.obj');
        chickenEl.setAttribute('mtl', 'assets/models/Step-by-step/Chicken/Chicken-5.mtl');
    }
    else if(step === 6) {
        chickenEl.setAttribute('src', 'assets/models/Step-by-step/Chicken/Chicken-6.obj');
        chickenEl.setAttribute('mtl', 'assets/models/Step-by-step/Chicken/Chicken-6.mtl');
    }
    else if(step === 7) {
        chickenEl.setAttribute('src', 'assets/models/Step-by-step/Chicken/Chicken-7.obj');
        chickenEl.setAttribute('mtl', 'assets/models/Step-by-step/Chicken/Chicken-7.mtl');
    }
    else if(step === 8) {
        chickenEl.setAttribute('src', '#chicken-full');
        chickenEl.setAttribute('mtl', '#chicken-full-mtl');
    }
    else if(step === 9) {
        lastStep();
    }
}

function sbsCube(step) {
    this.step = step;
    var cubeEl = document.querySelector("#cube3Did");

    if(step === 1) {
        cubeEl.setAttribute('src', 'assets/models/Figures/Cube/cube-1.obj');
        cubeEl.setAttribute('visible', 'true');
    }
    else if(step === 2) {
        cubeEl.setAttribute('src', 'assets/models/Figures/Cube/cube-2.obj');
    }
    else if(step === 3) {
        cubeEl.setAttribute('src', 'assets/models/Figures/Cube/cube-3.obj');
    }
    else if(step === 4) {
        cubeEl.setAttribute('src', 'assets/models/Figures/Cube/cube-4.obj');
    }
    else if(step === 5) {
        lastStep();
    }
}

function sbsPyramid(step) {
    this.step = step;
    var pyramidEl = document.querySelector("#pyramid3Did");

    if(step === 1) {
        pyramidEl.setAttribute('src', 'assets/models/Figures/Pyramid/pyramid-1.obj');
        pyramidEl.setAttribute('visible', 'true');
    }
    else if(step === 2) {
        pyramidEl.setAttribute('src', 'assets/models/Figures/Pyramid/pyramid-2.obj');
    }
    else if(step === 3) {
        pyramidEl.setAttribute('src', 'assets/models/Figures/Pyramid/pyramid-3.obj');
    }
    else if(step === 4) {
        pyramidEl.setAttribute('src', 'assets/models/Figures/Pyramid/pyramid-4.obj');
    }
    else if(step === 5) {
        lastStep();
    }
}

function sbsSphere(step) {
    this.step = step;
    var sphereEl = document.querySelector("#sphere");

    if(step === 1) {
        sphereEl.setAttribute('src', 'assets/models/Figures/Sphere/sphere-1.obj');
        sphereEl.setAttribute('visible', 'true');
    }
    else if(step === 2) {
        sphereEl.setAttribute('src', 'assets/models/Figures/Sphere/sphere-2.obj');
    }
    else if(step === 3) {
        sphereEl.setAttribute('src', 'assets/models/Figures/Sphere/sphere-3.obj');
    }
    else if(step === 4) {
        sphereEl.setAttribute('src', 'assets/models/Figures/Sphere/sphere-4.obj');
    }
    else if(step === 5) {
        lastStep();
    }
}

function sbsCylinder(step) {
    this.step = step;
    var cylinderEl = document.querySelector("#cylinder3Did");

    if(step === 1) {
        cylinderEl.setAttribute('src', 'assets/models/Figures/Cylinder/cylinder-1.obj');
        cylinderEl.setAttribute('visible', 'true');
    }
    else if(step === 2) {
        cylinderEl.setAttribute('src', 'assets/models/Figures/Cylinder/cylinder-2.obj');
    }
    else if(step === 3) {
        cylinderEl.setAttribute('src', 'assets/models/Figures/Cylinder/cylinder-3.obj');
    }
    else if(step === 4) {
        cylinderEl.setAttribute('src', 'assets/models/Figures/Cylinder/cylinder-4.obj');
    }
    else if(step === 5) {
        lastStep();
    }

}

function sbsCone(step) {
    this.step = step;
    var coneEl = document.querySelector("#cone3Did");

    if(step === 1) {
        coneEl.setAttribute('src', 'assets/models/Figures/Cone/cone-2.obj');
        coneEl.setAttribute('visible', 'true');
    }
    else if(step === 2) {
        coneEl.setAttribute('src', 'assets/models/Figures/Cone/cone-3.obj');
    }
    else if(step === 3) {
        coneEl.setAttribute('src', 'assets/models/Figures/Cone/cone-4.obj');
    }
    else if(step === 4) {
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