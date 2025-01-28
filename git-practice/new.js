const array = [23, 34, 45, 65, 21 ,45];

      function getAvg(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        let avg = sum / arr.length;
        return avg;
      }
      document.write(getAvg(array));