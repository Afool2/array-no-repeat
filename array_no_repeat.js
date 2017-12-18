// 数组去除重复的3种方法

// 遍历数组比较
Array.prototype.delDuplicate =  function() {
    var arr = [];

    for(var i = 0; i < this.length; i ++){
        for(var j = 0, flag = true; j < arr.length; j ++) {
            if(arr[j] === this[i]) {
            
                flag = false;
                break;
               
            }
        }
        if(flag) arr.push(this[i]);
        
    }
    return arr;
};


// 数组排序后再比较,排序后相同的元素相邻，只需比较最后一个元素
Array.prototype.noRepeat = function() {
    this.sort();
    var arr = [this[0]];
    for(var i = 1; i < this.length; i ++) {
        if(this[i] !== arr[arr.length - 1]) arr.push(this[i]);
    }
    
    return arr;
};


// （推荐）创建对象，把数组元素作为对象的属性，判断对象是否有此属性
Array.prototype.unique = function() {
    var arr = [],
        obj = {};
    for(var i = 0; i < this.length; i ++) {
        if(!obj[this[i]]){
            obj[this[i]] = true;
            arr.push(this[i]);
        }

    }

    return arr;
};