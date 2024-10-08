# ts-to-mock

English | [简体中文](./README.zh-CN.md)

ts-to-mock is a TypeScript interface parsing project for generating Mock data and Mock functions.

## Demo

![demo](./assets/demo.gif)

## Features

- Parse TypeScript interfaces
- Generate Mock data
- Generate Mock functions
- Provide client interface for interaction
- Support server-side processing

## Installation

This project only supports package management using pnpm.

1. Make sure pnpm is installed. If not, run:

```bash
npm install -g pnpm
```

2. Clone the project repository:

```bash
git clone [项目仓库URL]
cd ts-to-mock
```

2. 安装依赖：
   
```bash
pnpm install-all
```

## 使用

启动开发服务器：

```bash
pnpm dev
```

这将同时启动客户端和服务器端的开发服务器。

## 项目结构

项目采用 monorepo 结构，包含以下包：

- packages/client: 客户端应用
- packages/server: 服务器端应用

## 脚本

- pnpm dev: 启动所有包的开发服务器
- pnpm build: 构建所有包
- pnpm test: 运行所有包的测试
- pnpm install-all: 安装所有包的依赖