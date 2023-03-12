/** Файл нужен для компилирования d.ts файлов моделей пакетов
 * Запуск - npm run dts
 * НА ОШИБКИ ВНИМАНИЯ НЕ ОБРАЩАТЬ, ФАЙЛ НЕ ВЛИЯЕТ НА СБОРКУ ПРОЕКТА
 * НА СБОРКУ ВЛИЯЕТ ТОЛЬКО vue.config.js
 */
const exposes = require('./mf.exposes');
module.exports = {
  name: 'dts',
  entry: Object.values(exposes),
  mode: 'development',
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: [/\.ts?$/],
        use: [
          {
            loader: 'dts-loader',
            options: {
              name: 'layout', // Название приложение
              exposes: exposes,
              typesOutputDir: '.exposes-types', // Папка в которую собираются d.ts файлы
            },
          },
        ],
      },
    ],
  },
  stats: {
    entrypoints: false,
    warnings: false,
    errors: false,
  },
};
