/*opts = {
	method: '',  // get/post
	mode: '',
	credentials: '',
	cache:'',
	headers:{

	},
	或者headers: new Headers()
	body: FormData 或者json对象
}*/
export default async opts => {
  let headerData = {
    //method: opts.method || 'GET',
    mode: opts.mode || 'cors',
    credentials: 'include'
    //body: opts.body ,
  }
  //get请求方式
  if (opts.method.toUpperCase() === 'GET') {
    headerData.method = 'GET';
    if (opts.body == null) return;
    opts.url += '?';
    opts.body && Object.keys(opts.body).forEach(item => {
      opts.url += `${item}=${opts.body[item]}&`
    })
    opts.url = opts.url.slice(0, -1)
  }
  //post请求方式
  if (opts.method.toUpperCase() === 'POST') {
    headerData.method = 'POST';
    //json数据
    if (Object.prototype.toString.call(opts.body) !== "[object FormData]") {
      headerData.body = JSON.stringify(opts.body);
      headerData.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    //form表单
    } else {
      headerData.body = opts.body;
      headerData.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }

    }
  }
  // Object.keys(headerData).forEach(item => {
  //   if (opts.headerData.hasOwnProperty(item)) return;
  //   opts.headerData[item] = headerData[item]
  // });
  const res = await fetch(opts.url, headerData);
  const resJson = await res.json();
  return resJson;
}
