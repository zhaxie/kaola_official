const selfGlobalComponents = {
    install:function(Vue) {
        Vue.component('page', require('@/components/common/page.vue').default);
        Vue.component('imgWithLoading', require('@/components/common/imgWithLoading.vue').default);
        Vue.component('breadNav', require('@/components/common/breadNav.vue').default);
        Vue.component('headerNav', require('@/components/common/headerNav.vue').default);
        Vue.component('footerNav', require('@/components/common/footerNav.vue').default);
    }
}

export default selfGlobalComponents;

