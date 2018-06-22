import router from 'vue'
let utilsObj = Object.create(null)

// log输出函数
utilsObj.log = param => {
  console.log('%c' + param, 'color:red;font-size:24px')
}

/* opts = {
  method: '',  // get/post
  mode: '',
  credentials: '',
  cache:'',
  headers:{

  },
  或者headers: new Headers()
  body: FormData 或者json对象
} */
utilsObj.fetch = opts => {
  let optsData = Object.create(null)
  // optsData.mode = 'cors';
  // optsData.credentials = 'inlucde';
  // optsData.cache = 'no-cache';

  // get请求方式
  if (opts.method.toUpperCase() === 'GET') {
    optsData.method = 'GET'
    if (opts.body != undefined) {
      opts.url += '?'
      opts.body && Object.keys(opts.body).forEach(item => {
        opts.url += `${item}=${opts.body[item]}&`
      })
      opts.url = opts.url.slice(0, -1)
    }
  }
  // post请求方式
  if (opts.method.toUpperCase() === 'POST') {
    optsData.method = 'POST'
    // json数据
    if (Object.prototype.toString.call(opts.body) !== '[object FormData]') {
      optsData.body = JSON.stringify(opts.body)
      optsData.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // form表单
    } else {
      optsData.body = opts.body
      optsData.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }
  let param = optsData.body
    ? {
      mode: 'cors',
      credentials: 'include',
      method: optsData.method,
      headers: optsData.headers,
      body: optsData.body
    } : {
      mode: 'cors',
      credentials: 'include',
      method: optsData.method,
      headers: optsData.headers
    }

  fetch(opts.url, param).then(resp => {
    return resp.json()
  }).then(result => {
    if (result.status == 402) {
      location.replace('http://www.vueapp.tech:8080/#/login')
    } else {
      opts.callback(result)
    }
  }).catch(e => {
    console.log(e)
  })
}

// // 弹框
// {
//   content: //弹框内容
//   btnArr: [],
//   eventArr: []
// }
utilsObj.pop = opts => {
  let str = `<section class="popup"><div class="title">提示</div>` +
    `<div class="popupBody"><span>${opts.content}</span></div>` +
    `<div class="oper clearfix"></div></section>`
  let popup = document.createElement('section')
  popup.classList = 'popupMask'
  popup.innerHTML = str
  let oper = popup.querySelector('.oper')
  let btnArr = opts.btnArr
  let eventArr = opts.eventArr ? opts.eventArr : []
  if (btnArr.length) {
    let btn = []
    btnArr.forEach((element, index) => {
      btn[index] = document.createElement('span')
      if (btnArr.length < 2) btn[index].style = 'width:100%'
      btn[index].innerText = element
      if (eventArr.length && eventArr[index]) {
        btn[index].addEventListener('click', opts => {
          let e = eventArr[index]['event']
          e(eventArr[index]['param'])
        })
      }
      btn[index].addEventListener('click', () => {
        document.body.removeChild(popup)
      })
      oper.appendChild(btn[index])
    })
  }
  document.body.appendChild(popup)
}

export default utilsObj
