# HDD配件独立站源码包

这是一个可直接上传的静态独立站，主文件是 `index.html`。

## 已包含内容
- 英文B2B首页
- 产品展示：起始杆、导向钻头、保护短接、8吨单耳分动器、导向板
- WhatsApp / 电话：+86 186 8674 5560
- 邮箱：smithsusanxhxuz4440@gmail.com
- 询盘表单：自动跳转 WhatsApp 或邮件，不需要后端服务器
- 移动端自适应
- 基础SEO标题、描述、关键词、结构化数据

## 怎么上线
方式一：直接上传到服务器
1. 解压这个文件夹
2. 把整个文件夹里的文件上传到网站根目录，例如 `public_html`、`wwwroot` 或宝塔的网站目录
3. 访问你的域名即可

方式二：Netlify / Vercel
1. 解压后，把整个文件夹拖到 Netlify Deploy 页面，或上传到 GitHub 再绑定 Vercel
2. 绑定你的域名

## 后续建议
- 把 `sitemap.xml` 里的域名 `https://your-domain.com` 改成你的真实域名
- 如果你有公司名、Logo、证书、更多产品图片，可以继续替换
- 真正跑Google广告/SEO前，建议补充 About、FAQ、Blog、Product Detail 页面
- 询盘表单目前是静态跳转，后期可以接入 Formspree、Tally、HubSpot 或自建后端来收集客户信息
