<template>
  <div>
    <div class="map-index">
      <span>[</span>
      <span class="area-item" @click="changeMapIndexCode(-1)">中国</span>
      <template v-for="(item,key) in mapIndex">
        <span :key="item.code+'right'">></span>
        <span :key="item.code" class="area-item" @click="changeMapIndexCode(key)">{{ item.name }}</span>
      </template>
      <span>]</span>
    </div>
    <a class="download-source" href="http://120.77.182.31:90/map.rar" download="">下载json和映射文件</a>
    <div id="chinaMap" :style="{width:'100vw', height:'100vh'}"/>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
require('../../static/china.js')
export default {
  name: 'MapDemo',
  data () {
    return {
      mapIndex: [],
      mapIndexCode: '',
      myChart: {},
      areaMapping: {
        安徽: {
          code: 'anhui',
          children: {
            安庆市: {
              code: 'anqing'
            },
            蚌埠市: {
              code: 'bengbu'
            },
            亳州市: {
              code: 'bozhou'
            },
            池州市: {
              code: 'chizhou'
            },
            滁州市: {
              code: 'chuzhou'
            },
            阜阳市: {
              code: 'fuyang'
            },
            淮北市: {
              code: 'huaibei'
            },
            淮南市: {
              code: 'huainan'
            },
            合肥市: {
              code: 'hefei'
            },
            黄山市: {
              code: 'huanshan'
            },
            六安市: {
              code: 'liuan'
            },
            马鞍山市: {
              code: 'maanshan'
            },
            铜陵市: {
              code: 'tongling'
            },
            芜湖市: {
              code: 'wuhu'
            },
            宿州市: {
              code: 'suzhou'
            },
            宣城市: {
              code: 'xuancheng'
            }
          }
        },
        澳门: {
          code: 'aomen'
        },
        北京: {
          code: 'beijing'
        },
        重庆: {
          code: 'chongqing'
        },
        福建: {
          code: 'fujian',
          children: {
            宁德市: {
              code: 'ningde'
            },
            福州市: {
              code: 'fuzhou'
            },
            龙岩市: {
              code: 'longyan'
            },
            南平市: {
              code: 'nanping'
            },
            莆田市: {
              code: 'putian'
            },
            泉州市: {
              code: 'quanzhou'
            },
            三明市: {
              code: 'sanming'
            },
            厦门市: {
              code: 'shamen'
            },
            漳州市: {
              code: 'zhangzhou'
            }
          }
        },
        甘肃: {
          code: 'gansu',
          children: {
            白银市: {
              code: 'baiyin'
            },
            定西市: {
              code: 'dingxi'
            },
            甘南藏族自治州: {
              code: 'gannan'
            },
            嘉峪关市: {
              code: 'jiayuguan'
            },
            金昌市: {
              code: 'jinchang'
            },
            酒泉市: {
              code: 'jiuquan'
            },
            兰州市: {
              code: 'lanzhou'
            },
            临夏回族自治州: {
              code: 'linxia'
            },
            陇南市: {
              code: 'longnan'
            },
            平凉市: {
              code: 'pingliang'
            },
            庆阳市: {
              code: 'qingyang'
            },
            天水市: {
              code: 'tianshui'
            },
            武威市: {
              code: 'wuwei'
            },
            张掖市: {
              code: 'zhangye'
            }
          }
        },
        广东: {
          code: 'guangdong',
          children: {
            深圳市: {
              code: 'shenzhen'
            },
            东莞市: {
              code: 'dongguan'
            },
            潮州市: {
              code: 'chaozhou'
            },
            东沙群岛: {
              code: 'dongsha'
            },
            佛山市: {
              code: 'foshan'
            },
            广州市: {
              code: 'guangzhou'
            },
            河源市: {
              code: 'heyuan'
            },
            惠州市: {
              code: 'huizhou'
            },
            江门市: {
              code: 'jiangmen'
            },
            揭阳市: {
              code: 'jieyang'
            },
            茂名市: {
              code: 'maoming'
            },
            梅州市: {
              code: 'meizhou'
            },
            清远市: {
              code: 'qingyuan'
            },
            汕头市: {
              code: 'shantou'
            },
            汕尾市: {
              code: 'shanwei'
            },
            韶关市: {
              code: 'shaoguan'
            },
            阳江市: {
              code: 'yangjiang'
            },
            云浮市: {
              code: 'yunfu'
            },
            湛江市: {
              code: 'zhanjiang'
            },
            肇庆市: {
              code: 'zhaoqing'
            },
            中山市: {
              code: 'zhongshan'
            },
            珠海市: {
              code: 'zhuhai'
            }
          }
        },
        广西: {
          code: 'guangxi',
          children: {
            百色市: {
              code: 'baise'
            },
            北海市: {
              code: 'beihai'
            },
            崇左市: {
              code: 'chongzuo'
            },
            防城港市: {
              code: 'fangchenggang'
            },
            贵港市: {
              code: 'guigang'
            },
            桂林市: {
              code: 'guilin'
            },
            河池市: {
              code: 'hechi'
            },
            贺州市: {
              code: 'hezhou'
            },
            来宾市: {
              code: 'laibin'
            },
            柳州市: {
              code: 'liuzhou'
            },
            南宁市: {
              code: 'nanning'
            },
            钦州市: {
              code: 'qinzhou'
            },
            梧州市: {
              code: 'wuzhou'
            },
            玉林市: {
              code: 'yulin'
            }
          }
        },
        贵州: {
          code: 'guizhou',
          children: {
            安顺市: {
              code: 'anshun'
            },
            毕节市: {
              code: 'bijie'
            },
            贵阳市: {
              code: 'guiyang'
            },
            六盘水市: {
              code: 'liupanshui'
            },
            黔东南苗族侗族自治州: {
              code: 'qiandongnan'
            },
            黔南布依族苗族自治州: {
              code: 'qiannan'
            },
            黔西南布依族苗族自治州: {
              code: 'qianxinan'
            },
            铜仁市: {
              code: 'tongren'
            },
            遵义市: {
              code: 'zunyi'
            }
          }
        },
        海南: {
          code: 'hainan',
          children: {
            白沙黎族自治县: {
              code: 'baisha'
            },
            保亭黎族苗族自治县: {
              code: 'baoting'
            },
            昌江黎族自治县: {
              code: 'changjiang'
            },
            澄迈县: {
              code: 'chengmai'
            },
            儋州市: {
              code: 'zhanzou'
            },
            定安县: {
              code: 'dingan'
            },
            东方市: {
              code: 'dongfang'
            },
            海口市: {
              code: 'haikou'
            },
            乐东黎族自治县: {
              code: 'ledong'
            },
            临高县: {
              code: 'lingao'
            },
            陵水黎族自治县: {
              code: 'lingshui'
            },
            琼海市: {
              code: 'qionghai'
            },
            琼中黎族苗族自治县: {
              code: 'qiongzhong'
            },
            三沙市: {
              code: 'sansha'
            },
            三亚市: {
              code: 'sanya'
            },
            屯昌县: {
              code: 'tunchang'
            },
            万宁市: {
              code: 'wanning'
            },
            文昌市: {
              code: 'wenchang'
            },
            五指山市: {
              code: 'wuzhishan'
            }
          }
        },
        南海诸岛: {
          code: 'hainan'
        },
        河北: {
          code: 'hebei',
          children: {
            保定市: {
              code: 'baoding'
            },
            沧州市: {
              code: 'cangzhou'
            },
            承德市: {
              code: 'chengde'
            },
            邯郸市: {
              code: 'handan'
            },
            衡水市: {
              code: 'hengshui'
            },
            廊坊市: {
              code: 'langfang'
            },
            秦皇岛市: {
              code: 'qinhuangdao'
            },
            石家庄市: {
              code: 'shijiazhuang'
            },
            唐山市: {
              code: 'tangshan'
            },
            邢台市: {
              code: 'xingtai'
            },
            张家口市: {
              code: 'zhangjiakou'
            }
          }
        },
        黑龙江: {
          code: 'heilongjiang',
          children: {
            大庆市: {
              code: 'daqing'
            },
            大兴安岭地区: {
              code: 'daxinganling'
            },
            哈尔滨市: {
              code: 'haerbin'
            },
            鹤岗市: {
              code: 'hegang'
            },
            黑河市: {
              code: 'heihe'
            },
            鸡西市: {
              code: 'jixi'
            },
            佳木斯市: {
              code: 'jiamusi'
            },
            牡丹江市: {
              code: 'mudanjiang'
            },
            七台河市: {
              code: 'qitaihe'
            },
            齐齐哈尔市: {
              code: 'qiqihaer'
            },
            双鸭山市: {
              code: 'shuangyashan'
            },
            绥化市: {
              code: 'suihua'
            },
            伊春市: {
              code: 'yichun'
            }
          }
        },
        河南: {
          code: 'henan',
          children: {
            安阳市: {
              code: 'anyang'
            },
            鹤壁市: {
              code: 'hebi'
            },
            济源市: {
              code: 'jiyuan'
            },
            焦作市: {
              code: 'jiaozuo'
            },
            开封市: {
              code: 'kaifeng'
            },
            洛阳市: {
              code: 'luoyang'
            },
            漯河市: {
              code: 'luohe'
            },
            南阳市: {
              code: 'nanyang'
            },
            平顶山市: {
              code: 'pingdingshan'
            },
            濮阳市: {
              code: 'puyang'
            },
            三门峡市: {
              code: 'sanmenxia'
            },
            商丘市: {
              code: 'shangqiu'
            },
            新乡市: {
              code: 'xinxiang'
            },
            信阳市: {
              code: 'xinyang'
            },
            许昌市: {
              code: 'xuchang'
            },
            郑州市: {
              code: 'zhengzhou'
            },
            周口市: {
              code: 'zhoukou'
            },
            驻马店市: {
              code: 'zhumadian'
            }
          }
        },
        湖北: {
          code: 'hubei',
          children: {
            鄂州市: {
              code: 'ezhou'
            },
            恩施土家族苗族自治州: {
              code: 'enshitujiazu'
            },
            黄冈市: {
              code: 'huanggang'
            },
            黄石市: {
              code: 'huangshi'
            },
            荆门市: {
              code: 'jingmen'
            },
            荆州市: {
              code: 'jingzhou'
            },
            潜江市: {
              code: 'qianjiang'
            },
            神农架林区: {
              code: 'shennongjia'
            },
            十堰市: {
              code: 'shiyan'
            },
            随州市: {
              code: 'suizhou'
            },
            天门市: {
              code: 'tianmen'
            },
            武汉市: {
              code: 'wuhan'
            },
            仙桃市: {
              code: 'xiantao'
            },
            咸宁市: {
              code: 'xianning'
            },
            襄阳市: {
              code: 'xiangyang'
            },
            孝感市: {
              code: 'xiaogan'
            },
            宜昌市: {
              code: 'yichang'
            }
          }
        },
        湖南: {
          code: 'hunan',
          children: {
            常德市: {
              code: 'changde'
            },
            郴州市: {
              code: 'chenzhou'
            },
            衡阳市: {
              code: 'hengyang'
            },
            怀化市: {
              code: 'huaihua'
            },
            娄底市: {
              code: 'loudi'
            },
            邵阳市: {
              code: 'shaoyang'
            },
            湘潭市: {
              code: 'xiangtan'
            },
            湘西土家族苗族自治州: {
              code: 'xiangxitujiazumiaozu'
            },
            益阳市: {
              code: 'yiyang'
            },
            永州市: {
              code: 'yongzhou'
            },
            岳阳市: {
              code: 'yueyang'
            },
            张家界市: {
              code: 'zhangjiajie'
            },
            长沙市: {
              code: 'changsha'
            },
            株洲市: {
              code: 'zhuzhou'
            }
          }
        },
        江苏: {
          code: 'jiangsu',
          children: {
            常州市: {
              code: 'changzhou'
            },
            淮安市: {
              code: 'huaian'
            },
            连云港市: {
              code: 'lianyungang'
            },
            南京市: {
              code: 'nanjing'
            },
            南通市: {
              code: 'nantong'
            },
            苏州市: {
              code: 'suzhou'
            },
            泰州市: {
              code: 'taizhou'
            },
            无锡市: {
              code: 'wuxi'
            },
            宿迁市: {
              code: 'suqian'
            },
            徐州市: {
              code: 'xuzhou'
            },
            盐城市: {
              code: 'yancheng'
            },
            扬州市: {
              code: 'yangzhou'
            },
            镇江市: {
              code: 'zhenjiang'
            }
          }
        },
        江西: {
          code: 'jiangxi',
          children: {
            抚州市: {
              code: 'fuzhou'
            },
            赣州市: {
              code: 'ganzhou'
            },
            吉安市: {
              code: 'jian'
            },
            景德镇市: {
              code: 'jingdezhen'
            },
            九江市: {
              code: 'jiujiang'
            },
            南昌市: {
              code: 'nanchang'
            },
            萍乡市: {
              code: 'pingxiang'
            },
            上饶市: {
              code: 'shangrao'
            },
            新余市: {
              code: 'xinyu'
            },
            宜春市: {
              code: 'yichun'
            },
            鹰潭市: {
              code: 'yingtan'
            }
          }
        },
        吉林: {
          code: 'jilin',
          children: {
            白城市: {
              code: 'baicheng'
            },
            白山市: {
              code: 'baishan'
            },
            吉林市: {
              code: 'jilin'
            },
            辽源市: {
              code: 'liaoyuan'
            },
            四平市: {
              code: 'siping'
            },
            松原市: {
              code: 'songyuan'
            },
            通化市: {
              code: 'tonghua'
            },
            延边朝鲜族自治州: {
              code: 'yanbian'
            },
            长春市: {
              code: 'changchun'
            }
          }
        },
        辽宁: {
          code: 'liaoning',
          children: {
            鞍山市: {
              code: 'anshan'
            },
            本溪市: {
              code: 'benxi'
            },
            朝阳市: {
              code: 'zhaoyang'
            },
            大连市: {
              code: 'dalian'
            },
            丹东市: {
              code: 'dandong'
            },
            抚顺市: {
              code: 'fushun'
            },
            阜新市: {
              code: 'fuxin'
            },
            葫芦岛市: {
              code: 'huludao'
            },
            锦州市: {
              code: 'jinzhou'
            },
            辽阳市: {
              code: 'liaoyang'
            },
            盘锦市: {
              code: 'panjin'
            },
            沈阳市: {
              code: 'shenyang'
            },
            铁岭市: {
              code: 'tieling'
            },
            营口市: {
              code: 'yingkou'
            }
          }
        },
        内蒙古: {
          code: 'neimenggu',
          children: {
            阿拉善盟: {
              code: 'alashan'
            },
            巴彦淖尔市: {
              code: 'bayanzhuoer'
            },
            包头市: {
              code: 'baotou'
            },
            赤峰市: {
              code: 'chifeng'
            },
            鄂尔多斯市: {
              code: 'eerduosi'
            },
            呼和浩特市: {
              code: 'huhehaote'
            },
            呼伦贝尔市: {
              code: 'hulunbeier'
            },
            通辽市: {
              code: 'tongliao'
            },
            乌海市: {
              code: 'wuhai'
            },
            乌兰察布市: {
              code: 'wulanchabu'
            },
            锡林郭勒盟: {
              code: 'xilinguole'
            },
            兴安盟: {
              code: 'xingan'
            }
          }
        },
        宁夏: {
          code: 'ningxia',
          children: {
            中卫市: {
              code: 'zhongwei'
            },
            固原市: {
              code: 'guyuan'
            },
            石嘴山市: {
              code: 'shizuishan'
            },
            吴忠市: {
              code: 'wuzhong'
            },
            银川市: {
              code: 'yinchuan'
            }
          }
        },
        青海: {
          code: 'qinghai',
          children: {
            海东市: {
              code: 'haidong'
            },
            果洛藏族自治州: {
              code: 'guoluo'
            },
            海北藏族自治州: {
              code: 'haibei'
            },
            海南藏族自治州: {
              code: 'hainan'
            },
            海西蒙古族藏族自治州: {
              code: 'haixi'
            },
            黄南藏族自治州: {
              code: 'huangnan'
            },
            西宁市: {
              code: 'xining'
            },
            玉树藏族自治州: {
              code: 'yushu'
            }
          }
        },
        山东: {
          code: 'shandong',
          children: {
            滨州市: {
              code: 'binzhou'
            },
            德州市: {
              code: 'dezhou'
            },
            东营市: {
              code: 'dongying'
            },
            菏泽市: {
              code: 'hejie'
            },
            济南市: {
              code: 'jinan'
            },
            济宁市: {
              code: 'jining'
            },
            聊城市: {
              code: 'liaocheng'
            },
            临沂市: {
              code: 'linyi'
            },
            青岛市: {
              code: 'qingdao'
            },
            日照市: {
              code: 'rizhao'
            },
            泰安市: {
              code: 'taian'
            },
            威海市: {
              code: 'weihai'
            },
            潍坊市: {
              code: 'weifang'
            },
            烟台市: {
              code: 'yantai'
            },
            枣庄市: {
              code: 'zaozhuang'
            },
            淄博市: {
              code: 'zibo'
            }
          }
        },
        上海: {
          code: 'shanghai'
        },
        山西: {
          code: 'shanxi',
          children: {
            大同市: {
              code: 'datong'
            },
            晋城市: {
              code: 'jincheng'
            },
            晋中市: {
              code: 'jinzhong'
            },
            临汾市: {
              code: 'linfen'
            },
            吕梁市: {
              code: 'lvliang'
            },
            朔州市: {
              code: 'shuozhou'
            },
            太原市: {
              code: 'taiyuan'
            },
            忻州市: {
              code: 'xinzhou'
            },
            阳泉市: {
              code: 'yangquan'
            },
            运城市: {
              code: 'yuncheng'
            },
            长治市: {
              code: 'changzhi'
            }
          }
        },
        陕西: {
          code: 'shanxi1',
          children: {
            安康市: {
              code: 'ankang'
            },
            宝鸡市: {
              code: 'baoji'
            },
            汉中市: {
              code: 'hanzhong'
            },
            商洛市: {
              code: 'shangluo'
            },
            铜川市: {
              code: 'tongchuan'
            },
            渭南市: {
              code: 'weinan'
            },
            西安市: {
              code: 'xian'
            },
            咸阳市: {
              code: 'xianyang'
            },
            延安市: {
              code: 'yanan'
            },
            榆林市: {
              code: 'yulin'
            }
          }
        },
        四川: {
          code: 'sichuan',
          children: {
            阿坝藏族羌族自治州: {
              code: 'aba'
            },
            巴中市: {
              code: 'bazhong'
            },
            成都市: {
              code: 'chengdu'
            },
            达州市: {
              code: 'dazhou'
            },
            德阳市: {
              code: 'deyang'
            },
            甘孜藏族自治州: {
              code: 'ganzi'
            },
            广安市: {
              code: 'guangan'
            },
            广元市: {
              code: 'guangyuan'
            },
            乐山市: {
              code: 'leshan'
            },
            凉山彝族自治州: {
              code: 'liangshan'
            },
            泸州市: {
              code: 'luzhou'
            },
            眉山市: {
              code: 'meishan'
            },
            绵阳市: {
              code: 'mianyang'
            },
            南充市: {
              code: 'nanchong'
            },
            内江市: {
              code: 'neijiang'
            },
            攀枝花市: {
              code: 'panzhihua'
            },
            遂宁市: {
              code: 'suining'
            },
            雅安市: {
              code: 'yaan'
            },
            宜宾市: {
              code: 'yibin'
            },
            资阳市: {
              code: 'ziyang'
            },
            自贡市: {
              code: 'zigong'
            }
          }
        },
        台湾: {
          code: 'taiwan'
        },
        天津: {
          code: 'tianjin'
        },
        香港: {
          code: 'xianggang'
        },
        新疆: {
          code: 'xinjiang',
          children: {
            阿克苏地区: {
              code: 'akesu'
            },
            阿勒泰地区: {
              code: 'alatai'
            },
            巴音郭楞蒙古自治州: {
              code: 'bayinguoleng'
            },
            北屯市: {
              code: 'beitun'
            },
            博尔塔拉蒙古自治州: {
              code: 'boerta'
            },
            昌吉回族自治州: {
              code: 'changji'
            },
            和田地区: {
              code: 'hetian'
            },
            喀什地区: {
              code: 'kashen'
            },
            可克达拉市: {
              code: 'kekada'
            },
            克拉玛依市: {
              code: 'kelamayi'
            },
            克孜勒苏柯尔克孜自治州: {
              code: 'kezilesu'
            },
            昆玉市: {
              code: 'kunyu'
            },
            石河子市: {
              code: 'shihezi'
            },
            双河市: {
              code: 'shuanghe'
            },
            塔城地区: {
              code: 'tacheng'
            },
            铁门关市: {
              code: 'tiemenguan'
            },
            图木舒克市: {
              code: 'tumushuke'
            },
            五家渠市: {
              code: 'wujiaqu'
            },
            伊犁哈萨克自治州: {
              code: 'yili'
            }
          }
        },
        西藏: {
          code: 'xizang',
          children: {
            阿里地区: {
              code: 'ali'
            },
            昌都市: {
              code: 'changdu'
            },
            拉萨市: {
              code: 'lasa'
            },
            林芝市: {
              code: 'linzhi'
            },
            那曲市: {
              code: 'naqu'
            },
            日喀则市: {
              code: 'rikeze'
            },
            山南市: {
              code: 'shannan'
            }
          }
        },
        云南: {
          code: 'yunnan',
          children: {
            保山市: {
              code: 'baoding'
            },
            楚雄彝族自治州: {
              code: 'chuxiong'
            },
            大理白族自治州: {
              code: 'dali'
            },
            德宏傣族景颇族自治州: {
              code: 'dehong'
            },
            迪庆藏族自治州: {
              code: 'diqing'
            },
            红河哈尼族彝族自治州: {
              code: 'honghe'
            },
            昆明市: {
              code: 'kunming'
            },
            丽江市: {
              code: 'lijiang'
            },
            临沧市: {
              code: 'lincang'
            },
            怒江傈僳族自治州: {
              code: 'nujiang'
            },
            普洱市: {
              code: 'puer'
            },
            曲靖市: {
              code: 'qujing'
            },
            文山壮族苗族自治州: {
              code: 'wenshan'
            },
            西双版纳傣族自治州: {
              code: 'xishuangbanna'
            },
            玉溪市: {
              code: 'yuxi'
            },
            昭通市: {
              code: 'zhaotong'
            }
          }
        },
        浙江: {
          code: 'zhejiang',
          children: {
            杭州市: {
              code: 'hangzhou'
            },
            湖州市: {
              code: 'huzhou'
            },
            嘉兴市: {
              code: 'jiaxing'
            },
            金华市: {
              code: 'jinhua'
            },
            丽水市: {
              code: 'lishui'
            },
            宁波市: {
              code: 'ningbo'
            },
            衢州市: {
              code: 'quzhou'
            },
            绍兴市: {
              code: 'shaoxing'
            },
            台州市: {
              code: 'taizhou'
            },
            温州市: {
              code: 'wenzhou'
            },
            舟山市: {
              code: 'zhoushan'
            }
          }
        }
      },
      mapSeriesOption: {},
      publicMapSeriesOption: {
        type: 'map',
        z: 2,
        // 自定义扩展图表类型
        mapType: 'China',
        // 区域块上的label
        label: {
          show: true,
          color: '#fff',
          formatter: param => {
            return param.name
          }
        },
        itemStyle: {
          areaColor: '#669999'
        },
        layoutCenter: ['50%', '50%']
      }
    }
  },
  computed: {
    mapOption () {
      return {
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: {
          show: false,
          type: 'value'
        },
        // 漫步-开启缩放和拖动
        roam: true,
        // zoom: 20,
        // 滚轮缩放控制
        scaleLimit: {
          min: 0.5,
          max: 5
        },
        tooltip: {
          trigger: 'item',
          formatter: function (e) {
            return e.name
          }
        },
        series: [this.mapSeriesOption]
      }
    }
  },
  mounted () {
    this.drawChinaMap([])
  },
  methods: {
    // 画中国地图的方法
    drawChinaMap (provData) {
      this.mapIndex = []
      this.mapIndexCode = -1
      // 如果存在则先销毁
      // 清空原地图，避免点击事件累加
      if (this.myChart.id !== undefined) {
        this.myChart.dispose()
      }
      this.myChart = echarts.init(document.getElementById('chinaMap'))
      // 这里依据屏幕大小配置
      const clientWidth = document.body.clientWidth
      let layoutSize = '100%'
      if (clientWidth >= 1920) {
        layoutSize = '120%'
      } else if (clientWidth < 1920 && clientWidth >= 1600) {
        layoutSize = '100%'
      } else {
        layoutSize = '100%'
      }
      const specialMapSeriesOption = {
        // 这里决定了地图使用china.js
        map: 'china',
        // 需要设置layoutCenter，layoutSize才会有效
        layoutSize: layoutSize,
        data: provData
      }
      this.mapSeriesOption = Object.assign(
        specialMapSeriesOption,
        this.publicMapSeriesOption
      )
      this.myChart.setOption(this.mapOption)
      // 注册点击事件
      this.myChart.on('click', params => {
        this.drawProvinceMap(params.name, [])
      })
    },
    // 画省级地图的方法
    drawProvinceMap (provinceName, cityData) {
      const provinceCode = this.areaMapping[provinceName].code
      this.mapIndex = []
      this.mapIndex.push({
        name: provinceName,
        code: provinceCode
      })
      this.mapIndexCode = 0
      // 如果存在则先销毁
      // 清空原地图，避免点击事件累加
      if (this.myChart.id !== undefined) {
        this.myChart.dispose()
      }
      const url = `/map/province/${provinceCode}.json`
      // 获取json
      this.$http.get(url)
        .then(res => {
          this.myChart = echarts.init(document.getElementById('chinaMap'))
          // 这里更换省级地图json
          echarts.registerMap('China', res.data)
          const specialMapSeriesOption = {
            // 需要设置layoutCenter，layoutSize才会有效
            layoutSize: '95%',
            data: cityData
          }
          this.mapSeriesOption = Object.assign(
            specialMapSeriesOption,
            this.publicMapSeriesOption
          )
          this.myChart.setOption(this.mapOption)
          // 调整mapIndex
          this.$emit('changeMapIndex', 0, provinceName, provinceCode)
          // 注册点击事件
          this.myChart.on('click', params => {
            // 先确认是否有地图，有地图继续请求
            if (this.areaMapping[provinceName].children &&
              this.areaMapping[provinceName].children[params.name] &&
              this.areaMapping[provinceName].children[params.name].code !== undefined) {
              this.drawCityMap(provinceCode, this.areaMapping[provinceName].children[params.name].code, [], params.name)
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 画城市地图的方法
    drawCityMap (provinceCode, cityCode, areaData, cityName) {
      this.mapIndex.push({
        name: cityName,
        code: cityCode
      })
      this.mapIndexCode = 1
      // 如果存在则先销毁
      // 清空原地图，避免点击事件累加
      if (this.myChart.id !== undefined) {
        this.myChart.dispose()
      }
      this.myChart = echarts.init(document.getElementById('chinaMap'))
      // 这里更换市级地图json
      const url = `/map/province/${provinceCode}/${cityCode}.json`
      // 获取json
      this.$http.get(url)
        .then(res => {
          echarts.registerMap('China', res.data)
          const specialMapSeriesOption = {
            // 需要设置layoutCenter，layoutSize才会有效
            layoutSize: '95%',
            data: areaData
          }
          this.mapSeriesOption = Object.assign(
            specialMapSeriesOption,
            this.publicMapSeriesOption
          )
          this.myChart.setOption(this.mapOption)
        })
        .catch(error => {
          console.log(error)
        })
    },
    changeMapIndexCode (index) {
      if (index === this.mapIndexCode) return
      switch (index) {
        case -1:
          this.drawChinaMap()
          break
        case 0:
          this.drawProvinceMap(this.mapIndex[0].name)
          break
        case 1:
          this.drawCityMap(this.mapIndex[0].code, this.mapIndex[1].code, [], this.mapIndex[1].name)
          break
        default:
          this.getProvinceInfo()
      }
    }
  }
}
</script>

<style scoped>
  .map-index {
    position: absolute;
    top: 30px;
    left: 30px;
    color: #ffcf00;
    z-index: 10000;
    font-size: 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .map-index > .area-item {
    cursor: pointer;
    border-bottom: 1px solid rgba(0,0,0,0,);
    padding: 0 3px;
  }
  .map-index > .area-item:hover {
    border-bottom: 1px solid #ffcf00;
  }
  .map-index > .svg-icon {
    width: 15px;
    height: 15px;
  }
  .download-source {
    color: #ff4c4c;
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -70px;
    z-index: 20000;
    font-size: 18px;
  }
</style>
