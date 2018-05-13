
var totalcellnotx = document.getElementById('totaltno');
var resulttx = document.getElementById('tresult');

var dappAddress = "n1xzsYqEJzmbzj38NJdAsYdrZVYBzuRh4rF";

var NebPay = require("nebpay");
var nebPay = new NebPay();
var check='后天八卦';
var modecheck='';
var nextid=0;
//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if(typeof(webExtensionWallet) != "undefined"){
    document.getElementById("walletcheck").innerHTML = "";
}else {
        document.getElementById("walletcheck").innerHTML = "请安装最新的星云钱包~";
    }
var calcguaxiang = -1;
function readtotal(){
    var func = "gettotaltest"
    var args = "[\"" + 0 + "\"]"
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");

    
}
function changemode(){
    
    var to = dappAddress;
    var value = 0.01;
    var func = "setMode"
    var args = "";
    
    layer.confirm('<p>请选择八卦模式</p>', {
                  btn: ['先天八卦','后天八卦'],btnAlign:'c' //按钮
                  }, function(){
                
                  
                    args = "[\"" + 'xiantian' + "\"]";
                  check = '先天八卦';
                  nebPay.call(to, value, func, args, {
                              qrcode: {
                              showQRCode: false
                              },
                              goods: {
                              name: "test",
                              desc: "test goods"
                              },
                              //callback: cbCallDapp
                              listener: resultmode
                              });
                  }, function(){
                    args = "[\"" + 'houtian' + "\"]";
                  check = '后天八卦';
                  nebPay.call(to, value, func, args, {
                              qrcode: {
                              showQRCode: false
                              },
                              goods: {
                              name: "test",
                              desc: "test goods"
                              },
                              //callback: cbCallDapp
                              listener: resultmode
                              });
                  });
 
}
function resultmode(resp){
    if(resp!='Error: Transaction rejected by user'){
         layer.msg('设置八卦模式为：'+check);
    }
    
}

function readmode(){
    var func = "getMode"
    var args = "[\"" + 0 + "\"]"
    
    window.postMessage({
                       "target": "contentscript",
                       "data":{
                       "to" : dappAddress,
                       "value" : "0",
                       "contract" : {
                       "function" : func,
                       "args" : args
                       }
                       },
                       "method": "neb_call"
                       }, "*");
    
    
    
}

function savenewtest(id, yinli) {
    var to = dappAddress;
    var value = 0.00;
   var func = "newtest"
    var args = "[\"" + id + "\",\"" + yinli + "\"]";
   
   // var callArgs = "[\"" + document.getElementById("inputParameter").value.trim() + "\"]"; //in the form of ["args"]
    nebPay.call(to, value, func, args, {
                qrcode: {
                showQRCode: false
                },
                goods: {
                name: "test",
                desc: "test goods"
                },
                //callback: cbCallDapp
                listener: cbCallDapp
                });
}

function cbCallDapp(resp){
    console.log("callback resp: " + JSON.stringify(resp))
    if(resp!='Error: Transaction rejected by user'){
        calcbagua();
    }
    
}

function calcbagua(){
    
        var pic='<div class="yang-yin2"></div>'
  
    eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('7(6==\'5\'){2=8-1(4.3()*8)}9{2=1(4.3()*8)}0 c="";0 a="";0 b="";',13,13,'var|parseInt|calcguaxiang|random|Math|xiantian|modecheck|if||else|guadetail|yaodetail|baguaresult'.split('|'),0,{}))

 
    if(calcguaxiang == 0){
      
        baguaresult = "乾";
        guadetail ="元亨，利贞。";
        yaodetail = [
                     "潜龙，勿用。",
                     "见龙在田，利见大人。",
                     "君子终日乾乾，夕惕若，厉，无咎。",
                     "或跃在渊，无咎。",
                     "飞龙在天，利见大人。",
                     "亢龙有悔。"
                     ];
        
    }else if(calcguaxiang ==1){
        baguaresult = "坤";
        guadetail ="元亨，利牝马之贞。君子有攸往，先迷后得主，利西南得朋，东北丧朋。安贞，吉。";
        yaodetail = [
                     "履霜，坚冰至。",
                     "直，方，大，不习无不利。",
                     "含章可贞。或从王事，无成有终。",
                     "括囊；无咎，无誉。",
                     "黄裳，元吉。",
                     "龙战于野，其血玄黄。"
                     ]
        
    }else if(calcguaxiang ==2){
        baguaresult = "离";
        guadetail ="利贞，亨。畜牝牛，吉。";
        yaodetail =[
                    "履错然，敬之无咎。",
                    "黄离，元吉。",
                    "日昃之离，不鼓缶而歌，则大耋之嗟，凶。",
                    "突如其来如，焚如，死如，弃如。",
                    "出涕沱若，戚嗟若，吉。",
                    "王用出征，有嘉折首，获匪其丑，无咎。"
                    ]
        
    }else if(calcguaxiang ==3){
        baguaresult = "巽";
        guadetail ="小亨，利攸往，利见大人。";
        yaodetail = [
                     "进退，利武人之贞。",
                     "巽在床下，用史巫纷若，吉，无咎。",
                     "频巽，吝。",
                     "悔亡，田获三品。",
                     "贞吉悔亡，无不利。无初有终，先庚三日，后庚三日，吉。",
                     "巽在床下，丧其资斧，贞凶。"
                     ]
        
    }else if(calcguaxiang ==4){
        baguaresult = "坎";
        guadetail ="习坎，有孚，维心亨，行有尚。";
        yaodetail = [
                     "习坎，入于坎窞，凶。",
                     "坎有险，求小得。",
                     "来之坎坎，险且枕，入于坎窞，勿用。",
                     "樽酒簋贰，用缶，纳约自牖，终无咎。",
                     "坎不盈，祗既平，无咎。",
                     "系用徽纆，置于丛棘，三岁不得，凶。"
                     ]
    }else if(calcguaxiang ==5){
        baguaresult = "兑";
        guadetail ="亨，利贞。";
        yaodetail = [
                     "和兑，吉。",
                     "孚兑，吉，悔亡。",
                     "来兑，凶。",
                     "商兑，未宁，介疾有喜。",
                     "孚于剥，有厉。",
                     "引兑。"
                     ]

    }else if(calcguaxiang ==6){
        baguaresult = "震";
        guadetail ="亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。";
        yaodetail = [
                     "震来虩虩，后笑言哑哑，吉",
                     "震来厉，亿丧贝，跻于九陵，勿逐，七日得。",
                     "震苏苏，震行无眚。",
                     "震遂泥。",
                     "震往来厉，亿无丧，有事。",
                     "震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。"
                     ]
        
    }else if(calcguaxiang ==7){
        baguaresult = "艮";
        guadetail ="艮其背，不获其身，行其庭，不见其人，无咎。";
        yaodetail = [
                     "艮其趾，无咎，利永贞。",
                     "艮其腓，不拯其随，其心不快。",
                     "艮其限，列其夤，厉薰心。",
                     "艮其身，无咎。",
                     "艮其辅，言有序，悔亡。",
                     "敦艮，吉。"
                     ]

        
    }
    
    layer.msg(pic,{time:0,btn:['解读'],shade: 0.8,area: ['600px', '600px'],btnAlign:'c',yes:function(index){
              
              layer.close(index);
              
              layer.msg(baguaresult+"<br>"+guadetail+"<br>"+yaodetail,{time:0,btn: ['确定'],shade: 0.8});
              }
              
              });
    
     document.getElementById("tresult").innerHTML = baguaresult+'<br>'+guadetail+'<br>'+yaodetail;
}

//
var Lunar = {
    MIN_YEAR : 1891,
    MAX_YEAR : 2100,
    lunarInfo : [
                 [0,2,9, 21936], [6,1,30, 9656], [0,2,17, 9584], [0,2,6, 21168], [5,1,26,43344], [0,2,13,59728],
                 [0,2,2, 27296], [3,1,22,44368], [0,2,10,43856], [8,1,30,19304], [0,2,19,19168], [0,2,8, 42352],
                 [5,1,29,21096], [0,2,16,53856], [0,2,4, 55632], [4,1,25,27304], [0,2,13,22176], [0,2,2, 39632],
                 [2,1,22,19176], [0,2,10,19168], [6,1,30,42200], [0,2,18,42192], [0,2,6, 53840], [5,1,26,54568],
                 [0,2,14,46400], [0,2,3, 54944], [2,1,23,38608], [0,2,11,38320], [7,2,1, 18872], [0,2,20,18800],
                 [0,2,8, 42160], [5,1,28,45656], [0,2,16,27216], [0,2,5, 27968], [4,1,24,44456], [0,2,13,11104],
                 [0,2,2, 38256], [2,1,23,18808], [0,2,10,18800], [6,1,30,25776], [0,2,17,54432], [0,2,6, 59984],
                 [5,1,26,27976], [0,2,14,23248], [0,2,4, 11104], [3,1,24,37744], [0,2,11,37600], [7,1,31,51560],
                 [0,2,19,51536], [0,2,8, 54432], [6,1,27,55888], [0,2,15,46416], [0,2,5, 22176], [4,1,25,43736],
                 [0,2,13, 9680], [0,2,2, 37584], [2,1,22,51544], [0,2,10,43344], [7,1,29,46248], [0,2,17,27808],
                 [0,2,6, 46416], [5,1,27,21928], [0,2,14,19872], [0,2,3, 42416], [3,1,24,21176], [0,2,12,21168],
                 [8,1,31,43344], [0,2,18,59728], [0,2,8, 27296], [6,1,28,44368], [0,2,15,43856], [0,2,5, 19296],
                 [4,1,25,42352], [0,2,13,42352], [0,2,2, 21088], [3,1,21,59696], [0,2,9, 55632], [7,1,30,23208],
                 [0,2,17,22176], [0,2,6, 38608], [5,1,27,19176], [0,2,15,19152], [0,2,3, 42192], [4,1,23,53864],
                 [0,2,11,53840], [8,1,31,54568], [0,2,18,46400], [0,2,7, 46752], [6,1,28,38608], [0,2,16,38320],
                 [0,2,5, 18864], [4,1,25,42168], [0,2,13,42160], [10,2,2,45656], [0,2,20,27216], [0,2,9, 27968],
                 [6,1,29,44448], [0,2,17,43872], [0,2,6, 38256], [5,1,27,18808], [0,2,15,18800], [0,2,4, 25776],
                 [3,1,23,27216], [0,2,10,59984], [8,1,31,27432], [0,2,19,23232], [0,2,7, 43872], [5,1,28,37736],
                 [0,2,16,37600], [0,2,5, 51552], [4,1,24,54440], [0,2,12,54432], [0,2,1, 55888], [2,1,22,23208],
                 [0,2,9, 22176], [7,1,29,43736], [0,2,18, 9680], [0,2,7, 37584], [5,1,26,51544], [0,2,14,43344],
                 [0,2,3, 46240], [4,1,23,46416], [0,2,10,44368], [9,1,31,21928], [0,2,19,19360], [0,2,8, 42416],
                 [6,1,28,21176], [0,2,16,21168], [0,2,5, 43312], [4,1,25,29864], [0,2,12,27296], [0,2,1, 44368],
                 [2,1,22,19880], [0,2,10,19296], [6,1,29,42352], [0,2,17,42208], [0,2,6, 53856], [5,1,26,59696],
                 [0,2,13,54576], [0,2,3, 23200], [3,1,23,27472], [0,2,11,38608], [11,1,31,19176],[0,2,19,19152],
                 [0,2,8, 42192], [6,1,28,53848], [0,2,15,53840], [0,2,4, 54560], [5,1,24,55968], [0,2,12,46496],
                 [0,2,1, 22224], [2,1,22,19160], [0,2,10,18864], [7,1,30,42168], [0,2,17,42160], [0,2,6, 43600],
                 [5,1,26,46376], [0,2,14,27936], [0,2,2, 44448], [3,1,23,21936], [0,2,11,37744], [8,2,1, 18808],
                 [0,2,19,18800], [0,2,8, 25776], [6,1,28,27216], [0,2,15,59984], [0,2,4, 27424], [4,1,24,43872],
                 [0,2,12,43744], [0,2,2, 37600], [3,1,21,51568], [0,2,9, 51552], [7,1,29,54440], [0,2,17,54432],
                 [0,2,5, 55888], [5,1,26,23208], [0,2,14,22176], [0,2,3, 42704], [4,1,23,21224], [0,2,11,21200],
                 [8,1,31,43352], [0,2,19,43344], [0,2,7, 46240], [6,1,27,46416], [0,2,15,44368], [0,2,5, 21920],
                 [4,1,24,42448], [0,2,12,42416], [0,2,2, 21168], [3,1,22,43320], [0,2,9, 26928], [7,1,29,29336],
                 [0,2,17,27296], [0,2,6, 44368], [5,1,26,19880], [0,2,14,19296], [0,2,3, 42352], [4,1,24,21104],
                 [0,2,10,53856], [8,1,30,59696], [0,2,18,54560], [0,2,7, 55968], [6,1,27,27472], [0,2,15,22224],
                 [0,2,5, 19168], [4,1,25,42216], [0,2,12,42192], [0,2,1, 53584], [2,1,21,55592], [0,2,9, 54560]
                 ],
    //是否闰年
    isLeapYear : function(year) {
        return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
    },
    //天干地支年
    lunarYear : function(year) {
        var gan = ['庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己'],
        zhi = ['申', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰', '巳', '午', '未'],
        str = year.toString().split("");
        return gan[str[3]] + zhi[year % 12];
    },
    //生肖年
    zodiacYear : function(year) {
        var zodiac = ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊'];
        return zodiac[year % 12];
    },
    //公历月份天数
    //@param year 阳历-年
    //@param month 阳历-月
    solarMonthDays : function(year, month) {
        var FebDays = this.isLeapYear(year) ? 29 : 28;
        var monthHash = ['', 31, FebDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return monthHash[month];
    },
    //农历月份天数
    lunarMonthDays : function(year, month) {
        var monthData = this.lunarMonths(year);
        return monthData[month - 1];
    },
    //农历月份天数数组
    lunarMonths : function(year) {
        var yearData = this.lunarInfo[year - this.MIN_YEAR];
        var leapMonth = yearData[0];
        var bit = (+yearData[3]).toString(2);
        var months = [];
        for (var i = 0; i < bit.length; i++) {
            months[i] = bit.substr(i, 1);
        }
        
        for (var k = 0, len = 16 - months.length; k < len; k++) {
            months.unshift('0');
        }
        
        months = months.slice(0, (leapMonth == 0 ? 12 : 13));
        for (var i = 0; i < months.length; i++) {
            months[i] = +months[i] + 29;
        }
        return months;
    },
    //农历每年的天数
    //@param year 农历年份
    lunarYearDays : function(year) {
        var monthArray = this.lunarYearMonths(year);
        var len = monthArray.length;
        return (monthArray[len-1] == 0 ? monthArray[len-2] : monthArray[len-1]);
    },
    //
    lunarYearMonths : function(year) {
        var monthData = this.lunarMonths(year);
        var res = [];
        var temp = 0;
        var yearData = this.lunarInfo[year - this.MIN_YEAR];
        var len = (yearData[0] == 0 ? 12 : 13);
        for (var i = 0; i < len; i++) {
            temp = 0;
            for (j = 0; j <= i; j++) {
                temp += monthData[j];
            }
            res.push(temp);
        }
        return res;
    },
    //获取闰月
    //@param year 农历年份
    leapMonth : function(year){
        var yearData = this.lunarInfo[year - this.MIN_YEAR];
        return yearData[0];
    },
    //计算农历日期与正月初一相隔的天数
    betweenLunarDays : function(year, month, day) {
        var yearMonth = this.lunarMonths(year);
        var res = 0;
        for (var i = 1; i < month; i++) {
            res += yearMonth[i-1];
        }
        res += day - 1;
        return res;
    },
    //计算2个阳历日期之间的天数
    //@param year 阳历年
    //@param month
    //@param day
    //@param l_month 阴历正月对应的阳历月份
    //@param l_day  阴历初一对应的阳历天
    betweenSolarDays : function(year, month, day, l_month, l_day) {
        var time1 = new Date(year +"-"+ month +"-"+ day).getTime(),
        time2 = new Date(year +"-"+ l_month +"-"+ l_day).getTime();
        return Math.ceil((time1-time2)/24/3600/1000);
    },
    //根据距离正月初一的天数计算阴历日期
    //@param year 阳历年
    //@param between 天数
    lunarByBetween : function(year, between) {
        var lunarArray = [], yearMonth = [], t = 0, e = 0, leapMonth = 0, m = '';
        if (between == 0) {
            t = 1;
            e = 1;
            m = '正月';
        } else {
            year = between > 0 ? year : (year - 1);
            yearMonth = this.lunarYearMonths(year);
            leapMonth = this.leapMonth(year);
            between  = between > 0 ? between : (this.lunarYearDays(year) + between);
            for (var i = 0; i < 13; i++) {
                if (between == yearMonth[i]) {
                    t = i + 2;
                    e = 1;
                    break;
                } else if (between < yearMonth[i]) {
                    t = i + 1;
                    e = between - ((yearMonth[i-1]) ? yearMonth[i-1] : 0) + 1;
                    break;
                }
            }
            
            m = (leapMonth != 0 && t == leapMonth + 1)
            ? ('闰'. this.chineseMonth(t-1))
            : this.chineseMonth(((leapMonth != 0 && leapMonth + 1 < t) ? (t - 1) : t));
        }
        lunarArray.push(year, t, e); //年 月 日
        lunarArray.push(this.lunarYear(year),
                        this.zodiacYear(year),
                        m,
                        this.chineseNumber(e)); //天干地支年 生肖年 月份 日
        lunarArray.push(leapMonth); //闰几月
        return lunarArray;
    },
    //中文月份
    chineseMonth : function(month) {
        var monthHash = ['', '正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'];
        return monthHash[month];
    },
    //中文日期
    chineseNumber : function(num) {
        var dateHash = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        if (num <= 10) {
            res = '初'+ dateHash[num];
        } else if (num > 10 && num < 20) {
            res = '十'+ dateHash[num-10];
        } else if (num == 20) {
            res = "二十";
        } else if (num > 20 && num < 30) {
            res = "廿"+ dateHash[num-20];
        } else if (num == 30) {
            res = "三十";
        }
        return res;
    },
    //转换农历
    toLunar : function(year, month, day) {
        var yearData = this.lunarInfo[year - this.MIN_YEAR];
        if (year == this.MIN_YEAR && month <= 2 && day <= 9) {
            return [1891, 1, 1, '辛卯', '兔', '正月', '初一'];
        }
        return this.lunarByBetween(year, this.betweenSolarDays(year, month, day, yearData[1], yearData[2]));
    },
    //转换公历
    //@param year 阴历-年
    //@param month 阴历-月，闰月处理：例如如果当年闰五月，那么第二个五月就传六月，相当于阴历有13个月
    //@param date 阴历-日
    toSolar : function(year, month, day) {
        var yearData = this.lunarInfo[year - this.MIN_YEAR];
        var between = this.betweenLunarDays(year, month, day);
        var ms = new Date(year +"-" + yearData[1] +"-"+ yearData[2]).getTime();
        var s = ms + between * 24 * 60 * 60 * 1000;
        var d = new Date();
        d.setTime(s);
        year = d.getFullYear();
        month = d.getMonth() + 1;
        day  = d.getDate();
        return [year, month, day];
    }
};
readtotal();
window.addEventListener('message', function(e) {
                      
                        if(e.data.data){
                        if (!!e.data.data.neb_call){
                        var result = e.data.data.neb_call.result

                        if (result === 'null'){
                        console.log("meidongxi")
                        } else{

                        try{

                        result = JSON.parse(e.data.data.neb_call.result);

                        if(result == 'xiantian' || result=='houtian'){
             
                        var newdate= new Date();
                        var newyear= newdate.getFullYear();
                        var yinli =Lunar.toLunar(newyear, newdate.getMonth(), newdate.getDate());
                     
                        layer.confirm('<p><br>现在日期是:<br>公历: '+newyear+'年 '+newdate.getMonth()+'月'+newdate.getDate()+'日<br>阴历: '+yinli+'，<br>是否占卜一卦？</p>', {
                                      btn: ['确认','取消'],btnAlign:'c', //按钮
                                     
                                      }, function(){
                                      layer.msg('演算中... ',{type:1});
                                      modecheck=result;
                                      savenewtest(nextid,yinli);

                                  
                                      }, function(){
                                      
                              
                                      
                                      });
                        }else{
                        document.getElementById("totaltx").innerHTML = "总体演算卦数:     "+result;
                        nextid=parseInt(result)+1;

                        }


                        }catch (err){
                        }

                        if (!!result.key){

                        }
                        }
                        }
                        }});


