// 引入vue
import wxshare from './wxshare.js'
import config from './config.js'
import axios from 'axios'
import {Indicator,Toast} from 'mint-ui'
let cb;
let setcb = func => {
  cb = func;
}
var init = function () {
  //初始化 分享设置
  wxshare.init({
        signatureurl:config.hosturl+'/getsignature',
        appId:'wx3d5547d122fc289c',
        jsApiList:['onMenuShareTimeline','onMenuShareAppMessage'],
        title:'title',
        desc:'description',
        link:'http://www.baidu.com',
        imgurl:'http://y2.ifengimg.com/a/2016_05/add96b5b01c902d.jpg',
        callback:cb
      });

  var code = getUrlParam('code');
  console.log('init------code:',code)
  Indicator.open({
    text:'加载中...',
    spinnerType: 'snake'
  });

  //获取用户wechatid信息，保存到sessionStorage
  axios({
      url:config.hosturl+'/getweboauthuserinfo?code='+code,
      type:'get',
      contentType:'application/json',
      dataType:'json'
  }).then(function(response){

    var data = response.data;
     console.log('init------axiossucc:',data)
        if(data.data==null) {
          console.log('data is null');
          Indicator.close();
        }else{
          Indicator.close();
          sessionStorage.setItem('wechatid',data.data.wechatid);
          sessionStorage.setItem('createdtime',data.data.createdtime);
        }
  }).catch(function(err){
    console.log(err)
  })

}

//取地址参数
function getUrlParam(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r!=null) return unescape(r[2]); 
  return null;
}


export default {init,setcb}
