const items=[200,23,121,253,-90,-890,-80,300];

for( const item of items){

    if(item > 0){
        console.log(`R u deposite money ${Math.abs(item)}`);
    }else
    {
        console.log(`R u withdraw money ${Math.abs(item)}`);
    }

}