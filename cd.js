let k = 3;
let insertedArray = [ 1,2,5, 1,2,3, 7,1,2,4, 1,2,3, 2, 2,2,3,3,4,5 ];

if( k<1 || k>5 || insertedArray.length < 4 ){
    console.log("Invalid Array or K");
    return;
}

if( k == 1 ){
    console.log("Yes");
    return;
}

let count = 0;
let lookForSibling = false; 

let string1 = "";
let string2 = "";

for( var i=1; i<insertedArray.length; i++ ){
    if( i == insertedArray.length-1 ){
        alert("NO");
        break;
    }
    if( lookForSibling == false ){
        if( insertedArray[i] - insertedArray[i+1] == -1 ){
            string1 += insertedArray[i];
            count++;
            if( count == k-1 ){
                string1 += insertedArray[i+1];
                count = 0;
                lookForSibling = true;
            }
        }
        else{
            count = 0;
            string1 = "";
        }
    }
    else if( lookForSibling == true ){
        if( insertedArray[i] - insertedArray[i+1] == -1 ){
            string2 += insertedArray[i];
            count++;
            if( count == k-1 ){
                string2 += insertedArray[i+1];
                if( string1 == string2 ){
                    alert("yes");
                    break;
                }
                else{
                    count = 0;
                    string2 = "";
                }
            }
        }
        else{
            count = 0;
            string2 = "";
        }
    } 
}