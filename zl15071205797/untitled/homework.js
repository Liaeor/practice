/*
* create by Liaeor!
* In  2018-01-18
* */

/*计算某一条信号 对应 飞机的位置*/
function doPlace( file , index ) {
    let signal_a = file[index].split(' '),
        signal_num_arr,x,y,z,place;

    if(index === 0){
        signal_a.splice(4,0,'0','0','0');  //保证第一条消息 也可以以同种方式计算
    }
    signal_num_arr = signal_a.map(Number),
        x =  signal_num_arr[1] + signal_num_arr[4],
        y =  signal_num_arr[2] + signal_num_arr[5],
        z =  signal_num_arr[3] + signal_num_arr[6],
        place = String(x) + String(y) + String(z);

    return place;

}

/*计算某一条信号 对应 飞机的起始位置*/
function doStartPlace( file , index ) {
    let signal_a = file[index].split(' '),
        x =  signal_a[1] ,
        y =  signal_a[2] ,
        z =  signal_a[3] ,
        place = x + y + z;

    return place;
}

/*输出当前无人机的状态*/
function outputState(file , index) {
    let signal_arr = file[index].split(' '),
        signal_str,x,y,z;

    if(index === 0){
        signal_arr.splice(1,0,index); //分割数组 返回一个新的数组
    }
    else {
        x = parseInt(signal_arr[1]) + parseInt(signal_arr[4]);
        y = parseInt(signal_arr[2]) + parseInt(signal_arr[5]);
        z = parseInt(signal_arr[3]) + parseInt(signal_arr[6]);
        signal_arr.splice(1);
        signal_arr.splice(1,0,index,x,y,z);
    }

    signal_str = signal_arr.join(' ');
    return signal_str;
}

/*判断当前无人机状态*/
var fault = false;
function doState(file,index) {
    if(fault){
        if(index >= file.length ){
            console.log('Cannot find '+ index);
        }
        else{
            console.log('Error: '+index);
        }
    }
    else{
        if(index === 0){
            if(file[index].split(' ').length !== 4){
                console.log('Error: '+index);
                fault = true;
                return fault;  //解决故障之后 都 故障
            }
            console.log(outputState(file,index));
        }
        else if(index > 0 && index < file.length){
            if(file[index].split(' ').length !== 7 || doStartPlace(file,index) !== doPlace(file , index-1)){
                console.log('Error: '+index);
                fault = true;
                return fault;  //解决故障之后 都 故障
            }
            else{
                console.log(outputState(file,index));
            }
        }
        else {
            console.log('Cannot find '+ index);
        }
    }
}

/*主函数*/
function main() {
    let file = [],Index=[],firstSingal,nextSingal,firstIndex,nextIndex;
    let readlineSync = require('readline-sync');
    firstSingal = readlineSync.question("Please input a set of signals!\n");
    file.push(firstSingal);
    while (true){
        nextSingal = readlineSync.question("");
        if (nextSingal.trim() ==='-'){
            firstIndex = readlineSync.question("Please input a set of Index which you want to check!\n");
            Index.push(firstIndex);
            while (true){
                nextIndex = readlineSync.question("");
                if(nextIndex.trim() ==='='){
                    let numIndex = Index.map(Number);
                    console.log("The plane's states are:")
                    for(let i of numIndex){
                        doState(file,i)
                    }
                    break;
                }
                Index.push(nextIndex);
            }
            break;
        }
        file.push(nextSingal);
    }
}

main();
