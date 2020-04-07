function var11()
{
    let music = prompt("Hiện tại bạn đang thích bài hát nào?");
    console.log(music);
    console.log("I like that");
}

function var12()
{
    let name = prompt("Tên bạn là gì?");
    console.log("Hi "+name+" :D");
}

function var21()
{
    const PI=3.14;
    let r = prompt("Nhập bán kính của hình tròn");
    let s = PI*r*r;
    alert("Diện tích của hình tròn là: "+s);
}

function var22()
{
    let c = prompt("Nhập độ C (Celcius)");
    let f = c*1.8+32;
    console.log("Độ F là: "+f);
}

function var23()
{
    let kg = prompt("Cân nặng của bạn là");
    let cm = prompt("Chiều cao của bạn là");
    let bmi=kg/cm/cm*10000;
    console.log("Chỉ số BMI của bạn là: "+bmi);
}

function arr1()
{
    let arr0 = [];
    let arr1 = ["Game"];
    let arr3 = ["Game","Phim","Play"];
}

function arr22()
{
    let arr = ["Game","Phim","Play"];
    arr.push("Food");
    console.log(arr);
}

function arr23()
{
    let arr = ["Game","Phim","Play"];
    let sothich = prompt("Sở thích của bạn");
    arr.push(sothich);
    console.log(arr);
}

function arr32()
{
    let arr = ["Game","Phim","Play"];
    console.log(arr[0]);
    console.log(arr[2]);
}

function arr33()
{
    let arr = ["Game","Phim","Play"];
    let n = prompt("Thứ tự bạn muốn từ 0 đến 2");
    console.log(arr[n]);
}

function arr4()
{
    let arr = ["Game","Phim","Play"];
    console.log(arr);
    arr[1]="Dragon";
    console.log(arr);
    arr[2]=arr[2].toUpperCase();
    console.log(arr[2]);
    let sothich = prompt("Sở thích mới là");
    let n = prompt("Thứ tự muốn update");
    arr[n]=sothich;
    console.log(arr);
}

function obj1234()
{
    let obj0 = {};
    let obj1 = {name: "Diệu"};
    console.log(obj1);
    let obj2 = {name: "Diệu", age: "16"};
    console.log(obj2);
    let obj3 = {nhânvật: "Shanks", casỹ: "Jay", bộphim: "One Piece"};
    console.log(obj3);
}

function obj15()
{
    let ans = {Ans1: "1", Ans2: "2", Ans3: "3", Ans4: "4"};
    let tracnghiem =
    [
        "Nội dung câu hỏi: 1+1 bằng mấy?",
        ans,
        "Phương án đúng: Ans2"
    ];
    console.log(tracnghiem);
}

function obj223()
{
    let obj3 = {nhânvật: "Shanks", casỹ: "Jay", bộphim: "One Piece"};
    console.log(obj3);
    console.log(obj3.nhânvật, obj3.casỹ, obj3.bộphim);

    let name = prompt("Property bạn muốn nhập");
    console.log(obj3[name]);
}

function obj24()
{
    let ans = {1: "1", 2: "3", 3: "2", 4: "4"};
    let tracnghiem =
    [
        "Nội dung câu hỏi: 1+1 bằng mấy?",
        ans,
        "Phương án đúng: 2"
    ];
    console.log(tracnghiem);
    let n = prompt("Phương án trả lời của bạn là")
    console.log(ans[n]);
}

function obj32()
{
    let obj3 = {nhânvật: "Shanks", casỹ: "Jay", bộphim: "One Piece"};
    console.log(obj3);
    obj3.nhânvật="S"; obj3.casỹ="J"; obj3.bộphim="OP";
    console.log(obj3);
}

function obj33()
{
    let obj3 = {nhânvật: "Shanks", casỹ: "Jay", bộphim: "One Piece"};
    console.log(obj3);
    let des = prompt("Thông tin mới nhân vật");
    obj3.nhânvật=des;
    console.log(obj3);
}

function obj34()
{
    let ans = {ans1: "1", ans2: "3", ans3: "2", ans4: "4"};
    let tracnghiem =
    [
        "Nội dung câu hỏi: 1+1 bằng mấy?",
        ans,
        "Phương án đúng: 2"
    ];
    console.log(tracnghiem);
    let n = prompt("Giá trị của phương án trả lời thứ nhất đổi là");
    ans.ans1=n;
    console.log(ans);
}

function func11(name)
{
    alert(name);
}

function func12a()
{
    a=prompt("Mời nhập số a");
}
function func12b()
{
    b=prompt("Mời nhập số b");
}
function sum()
{
    let s=Number(a)+Number(b);
    alert("Tổng của a và b là: "+s);
}

function func21n1()
{
    n1=prompt("Mời nhập số 1");
}
function func21n2()
{
    n2=prompt("Mời nhập số 2");
}
function dau()
{
    d=prompt("Mời nhập dấu");
}
function ketqua()
{
    s1=Number(n1)+Number(n2);
    s2=Number(n1)-Number(n2);
    s3=Number(n1)*Number(n2);
    s4=Number(n1)/Number(n2);
    if (d=="+") {alert("Tổng của 2 số là: "+s1)};
    if (d=="-") {alert("Hiệu của 2 số là: "+s2)};
    if (d=="*") {alert("Tích của 2 số là: "+s3)};
    if (d=="/") {alert("Thương của 2 số là: "+s4)};
}

function func22()
{
    let dayso = [1,2,3,4,5,6,7,8,9,10];
    console.log(dayso);
    for(i=0;i<=9;i++)
    {
        if(dayso[i]%2==0)
        {
            console.log(dayso[i]);
        }
        else
        {
            console.log();
        }
    }
}

function loop1()
{
    let trung=200;
    for(let i=1;i<=15;i++)
    {
        trung=trung-4;
    }
    alert("Sau 15 ngày bà Tân còn "+trung+" quả trứng");
}

function loop2()
{
    console.log("Cho dãy 4,9,16,25,39,...");
    let n=1;
    for(let i=0;i<=24;i++)
    {
        console.log(n=n+3+i*2);
    }
}

function loop3()
{
    let trung=0;
    for(let i=0;i<=14;i++)
    {
        trung=trung+1+i;
    }
    alert("Trứng bà có là "+trung);
}

function loop4()
{
    let trung=5;
    for(let i=0;i<=14;i++)
    {
        trung=trung+1+i-2;
    }
    alert("Trứng bà có là "+trung);
}

function loop5()
{
    for(let i=1;i<=9;i++)
    {
        for(let j=1;j<=i;j++)
        {
            document.writeln(i+" ");
        }
        document.writeln("<br/>")
    }
}
loop5();