# 随机哥伦比娅 - 前端项目

这是"随机哥伦比娅"网站的前端代码，专为芙宁娜粉丝打造的同人图库网站。

## 功能特性

- 随机图片浏览
- 自动播放功能（13秒间隔）
- 多语言支持（中文、日语、英语、德语、法语、韩语、俄语、拉丁语）
- 背景音乐播放
- 响应式设计
- 优雅的UI动画效果

## 项目结构

```
frontend/
├── static/               # 静态资源
│   ├── css/             # 样式文件
│   │   └── style.css  # 主样式文件
│   ├── js/              # JavaScript文件
│   │   └── main.js    # 主要逻辑
│   ├── images/          # 图片资源
│   │   └── 404wallpaper.webp  # 404页面壁纸
│   └── music/           # 背景音乐
│       └── background.flac  # 背景音乐
└── templates/            # HTML模板
    ├── index.html        # 主页
    └── 404.html         # 404页面
```

## API 接口

前端通过以下API与后端交互：

### 1. 获取随机图片

**接口地址：** `GET /api/random`

**功能说明：** 随机获取一张已审核的图片

**请求限制：** 70次/分钟

**请求示例：**
```bash
curl http://localhost:5000/api/random
```

**响应示例：**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "filename": "example.jpg",
    "url": "/static/images/uploads/example.jpg"
  }
}
```

### 2. 获取统计数据

**接口地址：** `GET /api/statistics`

**功能说明：** 获取网站统计数据

**请求示例：**
```bash
curl http://localhost:5000/api/statistics
```

**响应示例：**
```json
{
  "success": true,
  "data": {
    "total_images": 100,
    "approved_images": 95,
    "pending_images": 5,
    "total_access": 1000,
    "total_sent": 950
  }
}
```

## 技术栈

- HTML5
- CSS3（包含动画和响应式设计）
- 原生JavaScript（无框架依赖）
- Fetch API（用于HTTP请求）

## 使用方法

### 1. 配置后端地址

在 `static/js/main.js` 中，确保API地址正确：

```javascript
// API地址
const API_BASE = '';  // 如果前端和后端在同一域名下，留空即可
```

### 2. 部署到Web服务器

将 `frontend` 目录部署到任何Web服务器即可：

- Nginx
- Apache
- Caddy
- 或任何静态文件服务器

### 3. 配置反向代理（可选）

如果前端和后端分离部署，需要配置反向代理：

**Nginx示例：**
```nginx
location /api/ {
    proxy_pass http://backend:5000/api/;
}

location /static/ {
    proxy_pass http://backend:5000/static/;
}
```

## 功能说明

### 图片浏览

- 点击"换一张"按钮随机获取新图片
- 支持键盘快捷键：`C` 键切换图片

### 自动播放

- 点击"自动播放"按钮开启/关闭
- 自动播放间隔：13秒
- 开启时按钮会有呼吸动画效果（7秒周期）

### 多语言切换

- 支持8种语言
- 点击"语言"按钮切换语言
- 语言设置会保存到本地存储

### 背景音乐

- 点击"音乐"按钮播放/暂停背景音乐
- 音乐格式：FLAC

### 查看原图

- 点击"查看原图"按钮在新标签页打开原图

## 浏览器兼容性

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- 移动端浏览器（iOS Safari, Chrome Mobile）

## 注意事项

1. 前端需要配合后端API使用
2. 确保后端API地址配置正确
3. 静态资源路径需要正确配置
4. 建议使用HTTPS部署

## 版权说明

这是一个粉丝向的同人图库网站，所有图片版权归原作者所有。

如果侵权，请联系 [furina@aether1013.dpdns.org](mailto:furina@aether1013.dpdns.org) 删除。

## 许可证

本项目前端代码仅供学习和交流使用。
