var arr1 = [1,3,3,8,14, 26];
var arr2 = [4,7,9,9,20, 24, 30];

// 1 3 3 4 7 8 9 9 14 20

var main = [];
var count = 0;
var status = true;

while(arr1.length || arr2.length ){
    while( arr2.length ){
        if( arr1[0] == undefined ){
            main.push( arr2[0] );
            var index = arr2.indexOf(arr2[0]);
            arr2.splice( index, 1 );
            break;
        }
        else if( arr1[0] > arr2[0] ){
            console.log("hi");
            main.push( arr2[0] );
            var index = arr2.indexOf(arr2[0]);
            arr2.splice( index, 1 );
        }
        else if( arr1[0] < arr2[count] ){
            main.push( arr1[0] );
            var index = arr1.indexOf(arr1[0]);
            arr1.splice( index, 1 );
            break;
        }
        else{
            main.push( arr1[0] );
            var index1 = arr1.indexOf(arr1[0]);
            arr1.splice( index1, 1 );

            main.push( arr2[0] );
            var index2 = arr2.indexOf(arr2[0]);
            arr2.splice( index2, 1 );
            break;
        }
    }
}
