{

    "use strict";

    const robot = {
        "defineInputs" () {

            this.commands = document.getElementById("commands").value;
            this.coordinates = document.getElementById("coordinates").value;
            this.steps = document.getElementById("where-to").value;
            this.path = [this.coordinates];

        },

        addPositionToPath (x, y) {

            this.path.push(`${x} ${y}`);

        },

        "handleSteps" (direction, step, totalSteps) {

            const currentPath = this.path;
            let lastPosition = currentPath[currentPath.length - 1];

            lastPosition = lastPosition.split(" ");

            let lastXPosition = parseInt(lastPosition[0]);
            let lastYPosition = parseInt(lastPosition[1]);

            for (let i = 0; i < totalSteps; i++) {

                if (direction === "x") {

                    lastXPosition += step;
                    this.addPositionToPath(lastXPosition, lastYPosition);

                } else {

                    lastYPosition += step;
                    this.addPositionToPath(lastXPosition, lastYPosition);

                }

            }

        },

        "handleDirections" () {

            const stepsArray = this.steps.split(" ");

            stepsArray.forEach((step) => {

                const direction = step.charAt(0).toUpperCase();
                const totalSteps = step.slice(-(step.length - 1));

                switch (direction) {

                case "N":
                    this.handleSteps("y", -1, totalSteps);
                    break;
                case "E":
                    this.handleSteps("x", +1, totalSteps);
                    break;
                case "S":
                    this.handleSteps("y", +1, totalSteps);
                    break;
                default:
                    this.handleSteps("x", -1, totalSteps);
                    break;

                }

            });

        },

        "updateStatus" (statusMessage) {

            document.querySelector(".status").textContent = statusMessage;

        },

        "showOutput" (numberOfPlaces) {

            document.querySelector(".count-status").textContent = `Cleaned: ${numberOfPlaces}`;

        },

        "countUniquePlaces" () {

            const unique = new Set(this.path);

            this.showOutput(unique.size);

        }
    };

    function init () {

        const inputForm = document.querySelector(".instructions-form");
        const countButton = document.querySelector(".show-unique");

        inputForm.addEventListener("submit", (e) => {

            e.preventDefault();
            robot.defineInputs();
            robot.updateStatus("Cleaning...");
            robot.handleDirections();
            robot.updateStatus("Done!");

        });

        countButton.addEventListener("click", robot.countUniquePlaces.bind(robot));

    }

    init();

}
