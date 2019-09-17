/**
 * @ Author: Gszs
 * @ Create Time: 2019-09-03 14:17:10
 * @ Modified by: Gszs
 * @ Modified time: 2019-09-09 11:02:46
 * @ 文件解释: 存放常量配置文件
 */


// Github OAuth(生产模式)
export const GithubOAuthConfig = {
  'oauth_uri': 'https://github.com/login/oauth/authorize',
  'redirect_uri': 'http://localhost:3006/#/app/dashboard/index',
  'client_id': '8ca58e70d5fe243584a8',
  'client_secret': '8c542eae5b5402eaa0c576c514182a8d6999d096',
};

// (开发模式)
if (process.env.NODE_ENV === 'development') {
  GithubOAuthConfig.redirect_uri = "http://localhost:3006/#/app/dashboard/index";
  GithubOAuthConfig.client_id = "8ca58e70d5fe243584a8";
  GithubOAuthConfig.client_secret = "8c542eae5b5402eaa0c576c514182a8d6999d096";
}
