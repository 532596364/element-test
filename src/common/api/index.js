import { JSONAPI } from '../index';

/**
 * ----------------用户登录权限相关---------------
 * 登陆相关接口全部走cas
 */
export const isLogin = () => JSONAPI.get('/projectA-api/cas/isLogin');

export const logout = () => {
    window.location = '/projectA-api/cas/logout';
};

export const doLogin = () => {
    window.location = `/projectA-api/cas/doLogin?redirectUrl=${window.location.href}`;
};

/**
 * 页面权限
 */
export const hasAuth = params => JSONAPI.post('/projectA-api/url/isDisplayLinkUrl', params);

/**
 * 获取菜单
 */
//过滤隐藏模块的菜单
export const getMenu = () => JSONAPI.get('/projectA-api/cas/getUserMenuList');
//不过滤隐藏模块的所有菜单
export const getAllMenu = () => JSONAPI.get('/projectA-api/cas/getUserAllMenuList');

/**
 * 通用select组件
 */
// 在src/common/index.js中配置selectSourceUrl
// export const getSourceList = keys => JSONAPI.get(`${getPrefix()}/common/getData`, { params: { keys } });

