// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable  rw(Read / Write)
// let (added in ES6)

    let globalName = 'global name'; //글로벌 스콥 -> 메모리에 할당 되어 있어서 최소한

    {
        //블럭 안에서만 사용 가능
        let name = 'ellie';
        console.log(name);
        name = 'hello';
        console.log(name);
    }
    console.log("name : " + name);

    // var (don't ever use this!)
    // var hoisting -> 어디에서 선언했는지 상관 없이 제일 위로 선언을 놓는 것. 선언이 올라가는 것.
    age = 4;
    var age;

    //블록 안에서 사용해도 밖에서 사용 됨.
    {
        age = 4;
        var age;
    }
    console.log(age); // -> 블록 밖에서 사용 됨... ㅠㅠ


// 3. contant - 상수 only read
    // use const whenever possible.
    // only use let if variable needs to change.
    
    // favor immutable data type always for a few reason:
    // - security
    // - thread safety
    // - reduce human mistakes

    const dayInWeek = 7;
    const maxNumber = 5;

    // 변경 될 수 있는 것을 Mutable 이라고 한다.

// 4. Variable types

    // primitive, single item: number, string, boolean, null, undefiedn, symbol
    // object, box container
    // function, first-class functoion -> 함수도 변수에 할당 될 수 있다.

    const count = 17; // integer
    const size = 17.1; // decimal number
    console.log(`value : ${count}, type: ${typeof count}`);
    console.log(`value : ${size}, type: ${typeof size}`);

    // number - speicla numeric values:
    const infinity = 1 / 0;
    const negativeInfinity = -1 / 0;
    const nAn = 'not a number ' / 2;

    console.log(infinity);
    console.log(negativeInfinity);
    console.log(nAn);


    // string
    const char = 'c';
    const brendan = 'brendan';
    const greeting = 'hello ' + brendan;

    const helloBob = `hi ${brendan}!`; //template literals (string) 백틱으로 감싼 문자열 ${} 로 변수를 넣을 수 있다.


    // boolean
    // false : 0, null, undefined, NaN, ''
    // true : any other value


    // null -> null로 정의한 경우
    let nothing = null;
    console.log(`value: ${nothing}, type: ${typeof nothing}`);

    // undefined 값을 할당하지 않은 것
    let x; // 혹은 let x = undefined;
    console.log(`value: ${x}, type: ${typeof x}`);

    // symbol, create unique identifiers for objects -> 고유한 식별자
    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');
    console.log(symbol1 === symbol2); // -> false
    // 같은 값을 넣어도 다른 심볼로 만들어짐. 같은 스트링 이라도...

    const symbol3 = Symbol.for('id');
    const symbol4 = Symbol.for('id');
    console.log(symbol3 === symbol4); // -> true 주어진 스트링에 맞는 심볼을 만들어줘 -> 같다고 나옴.
    console.log(symbol3.description); // -> symbol을 출력하면 에러...   .description 을 붙여줘야함.



    // 5. Dynamic typing: dynamically typed language
    // 런 타임(프로그램이 동작할 때) 할당된 값에 따라 바뀔 수 있다.