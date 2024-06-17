# ДЗ 57.Розширення існуючого Express сервера за допомогою мідлварів.

Це проект на базі Express.js, який демонструє інтеграцію мідлварів, маршрути користувачів та статей, а також базову аутентифікацію і валідацію.

## Запуск сервера

Сервер буде прослуховувати порт 3000.

Для запуску сервера виконайте:

yarn start

## Маршрути


### Головна
- `GET /` - Головна сторінка

### Користувачі
- `GET /users` - Отримати список користувачів (потрібна аутентифікація)
- `POST /users` - Створити нового користувача (потрібна аутентифікація та валідація)
- `GET /users/:userId` - Отримати користувача за ID (потрібна аутентифікація)
- `PUT /users/:userId` - Оновити користувача за ID (потрібна аутентифікація)
- `DELETE /users/:userId` - Видалити користувача за ID (потрібна аутентифікація)

### Статті
- `GET /articles` - Отримати список статей (потрібна аутентифікація)
- `POST /articles` - Створити нову статтю (потрібна аутентифікація)
- `GET /articles/:articleId` - Отримати статтю за ID (потрібна аутентифікація)
- `PUT /articles/:articleId` - Оновити статтю за ID (потрібна аутентифікація)
- `DELETE /articles/:articleId` - Видалити статтю за ID (потрібна аутентифікація)


## Опис мідлварів


### Логування запитів
Мідлвар `logRequests` записує інформацію про кожен запит до сервера, що допомагає в дебагінгу та моніторингу активності на сервері.

### Управління сесіями
Мідлвар `sessionMiddleware` забезпечує управління сесіями для додатка, використовуючи express-session.

### Аутентифікація
Мідлвар `authenticate` перевіряє наявність авторизаційного заголовка в запитах і забезпечує доступ тільки авторизованим користувачам. У випадку відсутності ключа, ча значення, користувач не отримує інформацію.
***Для аутентифікаціі потрібно в Headers добавити key-Authorization, value- (наприклад: 1234).***

### Валідація даних
Мідлвар `validateUserInput` перевіряє наявність необхідних полів у запитах для створення та оновлення користувачів. ***Для валідаціі PUT запроса потрібно в Headers добавити key-Content-Type, value- application/json. Далі в Body ввести в JSON форматі (наприклад: {"username": "Sergey", "password": "12345"})***

### Обробка помилок
Мідлвар `errorHandler` обробляє всі помилки, що виникають під час обробки запитів, і відправляє відповідні повідомлення клієнту.
