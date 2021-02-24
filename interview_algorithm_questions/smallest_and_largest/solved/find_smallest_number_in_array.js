const nums = [21, 34, 452, 11, 435, 634, 436, 22, 34];

let num = 0;
let min;

while(num < nums.length){
  if(num == 0){
    min = nums[num]
  }
  if(min > nums[num]){
    min = nums[num]
  }
  num++;
}
console.log(min)
