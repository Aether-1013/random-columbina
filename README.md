# 随机哥伦比娅 (Random Columbina)

一个专为哥伦比娅粉丝打造的同人图库网站，支持随机浏览图片、多语言切换、背景音乐等功能。

## 功能特性

- 随机图片浏览
- 自动播放功能
- 多语言支持（中文、日语、英语、德语、法语、韩语、俄语、拉丁语）
- 背景音乐播放
- 响应式设计
- IP限速保护
- 相似度检测（pHash）

## 访问地址

- 主页：`https://columbina.aether1013.dpdns.org/`

## API 接口文档

### 1. 获取随机图片

**接口地址：** `GET https://columbina.aether1013.dpdns.org/random`

**功能说明：** 随机获取一张已审核的图片

**请求限制：** 70次/分钟

**请求示例：**
```bash
curl https://columbina.aether1013.dpdns.org/api/random
```

**响应示例：**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "filename": "example.jpg",
    "url": "https://columbina.aether1013.dpdns.org/static/images/uploads/example.jpg"
  }
}
```

**响应字段说明：**
- `success`: 请求是否成功
- `data.id`: 图片ID
- `data.filename`: 原始文件名
- `data.url`: 图片访问路径



**响应字段说明：**
- `success`: 请求是否成功
- `data.total_images`: 图片总数
- `data.approved_images`: 已审核图片数
- `data.pending_images`: 待审核图片数
- `data.total_access`: 总访问次数
- `data.total_sent`: 总发送图片数

## 技术栈

- 后端：Flask (Python)
- 数据库：SQLite
- 前端：HTML5, CSS3, JavaScript
- 图片处理：Pillow (Python Imaging Library)


## 版权说明

这是一个粉丝向的同人图库网站，所有图片版权归原作者所有。

如果侵权，请联系 [furina@aether1013.dpdns.org](mailto:furina@aether1013.dpdns.org) 删除。

## 许可证

本项目基于 GPL 3.0 许可证开源，您可以在遵守许可证条款的前提下自由使用、修改和分发本项目的代码。

## 贡献者

- [Aether1013](https://github.com/Aether1013)

## 联系我们

- 邮箱：[furina@aether1013.dpdns.org](mailto:furina@aether1013.dpdns.org)
- 项目仓库：[https://github.com/Aether1013/random-columbina](https://github.com/Aether1013/random-columbina)

## 免责声明

本项目仅供学习和交流使用。
