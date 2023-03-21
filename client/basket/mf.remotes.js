module.exports = {
  /**
   * * Обертка
   */
  shell: 'shell@http://localhost:3010/remoteEntry.js',
  /**
   * * Шаблоны страниц
   */
  layout: 'layout@http://localhost:3020/remoteEntry.js',
  /**
   * * Авторизация
   */
  authorization: 'authorization@http://localhost:3100/remoteEntry.js',
  /**
   * * Продукты
   */
  product: 'product@http://localhost:3200/remoteEntry.js',
};
