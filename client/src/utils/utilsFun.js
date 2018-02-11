// log输出函数
export let log = param => {
	 console.log('%c' + param, 'color:red;font-size:24px')
}


// // 弹框
// {
//   content: //弹框内容
//   btnArr: [],
//   eventArr: []
// }
export let popup = opts => {
    let str = `<section class="popupMask"><section class="popup"><div class="title">提示</div>`
             + `<div class="popupBody"><span>${{}}</span></div>`
			 + `<div class="oper clearfix"></div></section></section>`;
    document.body.innerHTML = str;
}