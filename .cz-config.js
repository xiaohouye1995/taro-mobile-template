module.exports = {
  types: [
    { value: '✨feat', name: '✨feat:          增加新功能' },
    { value: '🐛fix', name: '🐛fix:           修复bug' },
    { value: '📝docs', name: '📝docs:          修改文档' },
    { value: '🚀perf', name: '🚀perf:          性能优化' },
    { value: '📦build', name: '📦build:         变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）' },
    { value: '👷ci', name: '👷ci:            更改持续集成软件的配置文件和package中的scripts命令' },
    { value: '🔂revert', name: '🔂revert:        版本回退' },
    { value: '💎style', name: '💎style:         样式修改不影响逻辑' },
    { value: '🚨test', name: '🚨test:          增删测试' },
    { value: '🔀merge', name: '🔀merge:          合并分支' },
  ],
  messages: {
    type: '请选择提交的类型；',
    customScope: '请输入修改的范围（可选）',
    subject: '请简要描述提交（必填）',
    body: '请输入详细描述（可选）',
    footer: '请选择要关闭的issue（可选）',
    confirmCommit: '确认要使用以上信息提交？（y/n）',
  },
  // 跳过问题：修改范围，自定义修改范围，详细描述，issue相关
  skipQuestions: ['scope', 'customScope', 'body', 'footer'],
  subjectLimit: 72,
};
