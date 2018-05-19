// {
  robot = {
    commands: '2',
    start: { x:10, y:22 },
    steps: [{E:2}, {N:1}],
    path: [],
    clean: function() {
      this.path.push(this.start);
      this.steps.forEach(step => {
        switch(Object.keys(step)[0]) {
          case 'N':
            this.updatePath('y', +1, Object.values(step)[0]);
            break;
          case 'E':
            this.updatePath('x', +1, Object.values(step)[0]);
            break;
          case 'S':
            this.updatePath('y', -1, Object.values(step)[0]);
            break;
          default:
            this.updatePath('x', -1, Object.values(step)[0]);
            break;
        };
      });
    },
    updatePath: function (direction, stepPosition, totalSteps) {
      const currentPath = this.path;
      const lastPosition = currentPath[currentPath.length-1];
      console.log(totalSteps);
      for(let i = 0; i < totalSteps; i++){
        if (direction === 'x'){
          this.addPosition({
            x:lastPosition.x + stepPosition,
            y:lastPosition.y,
          });
        } else {
          this.addPosition({
            x:lastPosition.x,
            y:lastPosition.y + stepPosition,
          });
        }
      }
    },
    addPosition(newPosition) {
      console.log(newPosition);
      this.path.push(newPosition);
    },
    countUnique: () => {
      console.log(this.path.length);
    }
  }

  robot.clean()


// }
