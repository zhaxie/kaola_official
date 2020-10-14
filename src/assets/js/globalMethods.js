//基础
const ajax = (Vue) => {
  const ajax = require('@/assets/js/ajax.js').default;

  Vue.prototype.$ajax = ajax;
  Vue.prototype.$imgBaseUrl = 'http://192.168.80.238:8888';
}

const globalMethodsObj = {

  //中间提示框
  toast(Vue, mountEle) {
    Vue.prototype.$toast = (options) => {
      Vue.prototype.$message({
        showClose: true,
        message: options.msg,
        type: options.color || 'success'
      });
    };
  },

  // //loading动画
  // loading(Vue, mountEle) {
  //   const Loading = Vue.extend(require('@/components_global/loading.vue').default);
  //   let instance_loading = new Loading();

  //   instance_loading.$mount(document.createElement('div'));
  //   mountEle.appendChild(instance_loading.$el);

  //   Vue.prototype.$showLoading = (options) => { instance_loading.showLoading(options) };
  //   Vue.prototype.$hideLoading = (options) => { instance_loading.hideLoading(options) };
  // },

  //确认框
  resureDialog(Vue, mountEle) {

    Vue.prototype.$resureDialog = async (options) => {
      try {
        await Vue.prototype.$confirm(options.title || '是否确定操作', "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: options.type || ''
        });

        options.ok();
      } catch (error) {
        options.cancel && options.cancel();
      }
    }
  },

  //频繁点击限制
  checkTapTooFaster(Vue) {

    const checkTapTooFaster = (timeInterval = 200) => {
      const lastTapTimer = this.lastTapTimer || 0;
      const currentTimeInterval = new Date().getTime() - lastTapTimer;
      let checkRet;

      console.warn('currentTimeInterval', currentTimeInterval);

      if (currentTimeInterval < timeInterval) {
        Vue.prototype.$toast({
          color: 'error',
          msg: '频繁点击',
        });

        checkRet = true;
      } else {
        checkRet = false;
      }

      this.lastTapTimer = new Date().getTime();

      return checkRet;
    }

    Vue.prototype.$checkTapTooFaster = checkTapTooFaster;
  },

  catchError(Vue) {
    const catchError = (error) => {
      console.error('出错了：', error);
      console.error('出错了：', new Error());

      Vue.prototype.$toast({
        msg: error,
      });
    }

    Vue.prototype.$catchError = catchError;
  }
}

export default {
  install: function (Vue) {

    ajax(Vue) //通用
    const mountEle = document.querySelector('body');

    for (let key in globalMethodsObj) {
      let item = globalMethodsObj[key];
      item.apply(Vue, [Vue, mountEle]);
    }

  }
}
