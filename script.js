//グローバル変数
const LOCAL_SWITCH = "Switch文の「case」の中のブロックスコープ!!"; //ID 0
const LOCAL_BOB =  "ここはグローバルな関数「bob()」ローカル変数から連絡!!"; //ID 1
const GLOBAL = "グローバル変数(定数)「whatBobSays」で連絡!！"; //ID 2
const LOCAL_NEST_FUNCTION = 'グローバルな関数「bob()」の中で作られた関数!!'; //ID 3
const LOCAL_FOR = "ここはfor文のブロックスコープにあるローカル変数から連絡!!"; //ID 4
const LOCAL_OBJ = "オブジェクトで設定したオブジェクトメソッドで連絡中!!"; //ID 5

//吹き出しの番号を指定するID
let talkID = 0;
//グローバル変数(定数)
const whatBobSays = GLOBAL;

//起動時に呼ばれる
window.onload= function(){
    //起動時に呼び出す関数
    bob();
}

//talkIDに応じてBobの発する言葉を決める関数
function bob(){
    const  whatBobSays =LOCAL_BOB;
    for(let talkID=0; talkID<=5; talkID++){

        const  whatBobSays = LOCAL_FOR; //ローカル変数(定数)

        switch(talkID){
            case 0: //itch文の`case`の中で、ID2の文字列が格納された変数`whatBobSays`を宣言して使用する
            let whatBobSays = GLOBAL;
            whatBobSays = LOCAL_SWITCH;
            setDialog(whatBobSays,talkID);
            break;

            case 1: //ID1の文字列が既に格納され関数`bob()`のローカル変数`whatBobSays`を使用する
            let whatBobSays1 = LOCAL_BOB;// for文の外のスコープで代入をすると要件を満たします
            setDialog(whatBobSays1,talkID);
            break;

            case 2: //ID2の文字列が既に格納されたグローバル変数`whatBobSays`を使用する
            let whatBobSays2 =GLOBAL;//スコープの範囲を1階層飛び越えて取得する方法を使います
            setDialog(whatBobSays2,talkID);
            console.log();
            break;

            case 3://関数`bob()`の中で関数`whatBobSays`を作成し、その中で宣言したものを利用する
            let funcWhatBobSays = function(){
                let whatBobSays3 =LOCAL_NEST_FUNCTION;
                return whatBobSays3;
            }
            setDialog(funcWhatBobSays(),talkID);
            break;

            case 4: //関数`bob()`内のfor文のブロックスコープにある、ID4の文字列が格納された変数`whatBobSays`から取得する
            let whatBobSays4 =LOCAL_FOR;// 代入も、thisも何も使わずに取得できるwhatBobSaysの値を見てみましょう
            setDialog(whatBobSays4,talkID);
            break;

            default: //オブジェクトを作成し、ID5の文字列を返すオブジェクトメソッド`whatBobSays`を使用する
            let obj ={
                func: function() {
                    let whatBobSays5 = LOCAL_OBJ;
                    return whatBobSays5;
                }
            };
            setDialog(obj.func(),talkID);
            break;
        }
    }
    
    // console.log('switch文直下');
}


//「発言する文字列」「発言を識別する番号」を入力すると画面の吹き出しに表示してくれる関数
function setDialog(whatHeSays,talkID){
    if(talkID<=5){
        let bobSays = document.getElementsByClassName("bob-says");
        //Bobの吹き出しに文字列を表示
         bobSays[talkID].firstElementChild.innerHTML = whatHeSays;
         console.log(talkID);
         talkID++;
    }
}
